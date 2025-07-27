import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwtToken } from '@/lib/jwt';

const publicRoutes = ['/', '/auth/login', '/auth/register'];
const logoutRoutes = ['/api/auth/logout'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  // Lewati verifikasi JWT untuk endpoint logout untuk meningkatkan kinerja
  if (logoutRoutes.some(route => path.startsWith(route))) {
    return NextResponse.next();
  }
  
  const token = req.cookies.get('token')?.value;
  let user = null;
  
  if (token) {
    try {
      user = await verifyJwtToken<{ role: string; id: string; email?: string }>(token);
      if (process.env.NODE_ENV === 'production') {
        console.log('Middleware: Token verified for user ID:', user?.id || 'unknown');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'production') {
        console.log('Middleware: Token verification failed:', error);
      }
      user = null;
    }
  } else {
    if (process.env.NODE_ENV === 'production' && path.startsWith('/dashboard')) {
      console.log('Middleware: No token found for dashboard access');
    }
  }

  if (!user && path.startsWith('/dashboard')) {
    if (process.env.NODE_ENV === 'production') {
      console.log('Middleware: Redirecting to login from:', path);
    }
    const response = NextResponse.redirect(new URL('/auth/login', req.url));
    // Tambahkan header untuk mencegah caching halaman dashboard
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  }

  if (user && publicRoutes.includes(path)) {
    const roleRoutes: Record<string, string> = {
      administrator: '/dashboard/admin',
      kader: '/dashboard/kader',
      ibu_hamil: '/dashboard/ibu-hamil',
      orang_tua_balita: '/dashboard/orang-tua-balita',
    };

    return NextResponse.redirect(new URL(roleRoutes[user.role], req.url));
    // return NextResponse.redirect(new URL(roleRoutes[user.role] || '/dashboard', req.url));
  }

  // Tambahkan header no-cache untuk semua halaman dashboard yang dilindungi
  if (path.startsWith('/dashboard')) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/', '/auth/login', '/auth/register'],
};
