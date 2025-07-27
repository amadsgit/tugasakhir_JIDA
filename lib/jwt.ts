const JWT_SECRET = (() => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
  }
  return secret;
})();

// Cache dalam memori sederhana untuk hasil verifikasi JWT
const jwtCache = new Map<string, { payload: any; timestamp: number }>();
const CACHE_TTL = 30000; // 30 detik cache TTL
const MAX_CACHE_SIZE = 1000;

// Hapus entri cache yang kedaluwarsa
function clearExpiredCache() {
  const now = Date.now();
  for (const [token, data] of jwtCache.entries()) {
    if (now - data.timestamp > CACHE_TTL) {
      jwtCache.delete(token);
    }
  }
}

// Kelola ukuran cache
function manageCacheSize() {
  if (jwtCache.size > MAX_CACHE_SIZE) {
    const entries = Array.from(jwtCache.entries());
    // Hapus 20% entri terlama
    const toRemove = Math.floor(MAX_CACHE_SIZE * 0.2);
    entries.slice(0, toRemove).forEach(([token]) => {
      jwtCache.delete(token);
    });
  }
}

// Pengodean URL Base64
function base64UrlEncode(str: string): string {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Dekode URL Base64
function base64UrlDecode(str: string): string {
  // Tambahkan padding jika diperlukan
  str += '='.repeat((4 - str.length % 4) % 4);
  return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
}

// Konversi string ke ArrayBuffer
function stringToArrayBuffer(str: string): ArrayBuffer {
  const encoder = new TextEncoder();
  const uint8Array = encoder.encode(str);
  const buffer = new ArrayBuffer(uint8Array.length);
  const view = new Uint8Array(buffer);
  view.set(uint8Array);
  return buffer;
}

// Ubah ArrayBuffer menjadi string heksadesimal
function arrayBufferToHex(buffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = [...byteArray].map(value => {
    const hexCode = value.toString(16);
    const paddedHexCode = hexCode.padStart(2, '0');
    return paddedHexCode;
  });
  return hexCodes.join('');
}

// Buat tanda tangan HMAC menggunakan Web Crypto API
async function createSignature(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    stringToArrayBuffer(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    stringToArrayBuffer(data)
  );

  return base64UrlEncode(arrayBufferToHex(signature));
}

// Verifikasi tanda tangan HMAC menggunakan Web Crypto API
async function verifySignature(data: string, signature: string, secret: string): Promise<boolean> {
  try {
    const key = await crypto.subtle.importKey(
      'raw',
      stringToArrayBuffer(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    // Ubah tanda tangan kembali ke ArrayBuffer
    const signatureHex = base64UrlDecode(signature);
    const signatureBuffer = new Uint8Array(signatureHex.length / 2);
    for (let i = 0; i < signatureHex.length; i += 2) {
      signatureBuffer[i / 2] = parseInt(signatureHex.substr(i, 2), 16);
    }

    return await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBuffer,
      stringToArrayBuffer(data)
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

export async function signJwtAccessToken(
  payload: object,
  expiresIn: string = '60m'
): Promise<string> {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };

  // Ubah expiresIn menjadi detik
  const expiresInSeconds = expiresIn.endsWith('m') 
    ? parseInt(expiresIn.slice(0, -1)) * 60 
    : parseInt(expiresIn.slice(0, -1)) * 3600; // asumsikan jam jika bukan 'm'

  const now = Math.floor(Date.now() / 1000);
  const exp = now + expiresInSeconds;

  const jwtPayload = {
    ...payload,
    iat: now,
    exp: exp
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(jwtPayload));
  const data = `${encodedHeader}.${encodedPayload}`;

  const signature = await createSignature(data, JWT_SECRET);
  
  return `${data}.${signature}`;
}

export async function verifyJwtToken<T = any>(token: string): Promise<T | null> {
  try {
    // Periksa cache terlebih dahulu
    const cached = jwtCache.get(token);
    if (cached) {
      const now = Date.now();
      // Periksa apakah cache masih valid dan token belum kedaluwarsa
      if (now - cached.timestamp < CACHE_TTL) {
        const tokenNow = Math.floor(now / 1000);
        if (!cached.payload.exp || cached.payload.exp > tokenNow) {
          return cached.payload as T;
        } else {
          // Token kedaluwarsa, hapus dari cache
          jwtCache.delete(token);
        }
      } else {
        // Cache kedaluwarsa, hapus entri
        jwtCache.delete(token);
      }
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const [encodedHeader, encodedPayload, signature] = parts;
    const data = `${encodedHeader}.${encodedPayload}`;

    // Verifikasi tanda tangan
    const isValid = await verifySignature(data, signature, JWT_SECRET);
    if (!isValid) {
      throw new Error('Invalid signature');
    }

    // Dekode muatan
    const payload = JSON.parse(base64UrlDecode(encodedPayload));

    // Periksa masa berlakunya
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      throw new Error('Token expired');
    }

    // Cache hasilnya
    manageCacheSize();
    jwtCache.set(token, {
      payload,
      timestamp: Date.now()
    });

    // Bersihkan cache yang kedaluwarsa secara berkala (setiap 100 verifikasi)
    if (Math.random() < 0.01) {
      clearExpiredCache();
    }

    return payload as T;
  } catch (error) {
    console.error('JWT verification failed:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

// Versi sinkron untuk kompatibilitas mundur (akan menimbulkan kesalahan pada runtime edge)
export function signJwtAccessTokenSync(
  payload: object,
  expiresIn: string = '60m'
): string {
  throw new Error('Synchronous JWT signing is not supported in edge runtime. Use signJwtAccessToken instead.');
}

export function verifyJwtTokenSync<T = any>(token: string): T | null {
  throw new Error('Synchronous JWT verification is not supported in edge runtime. Use verifyJwtToken instead.');
}
