import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Untuk GET request (direct browser access), redirect ke login
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = NextResponse.redirect(new URL('/auth/login', baseUrl));

    // Hapus cookie token
    response.cookies.set('token', '', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      path: '/',
    });

    // Tambahkan header untuk mencegah caching dan memaksa refresh
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Clear-Site-Data', '"cache", "cookies", "storage"');

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error saat logout' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // Optimized logout response - minimal processing
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Hapus cookie token dengan optimized settings
    response.cookies.set('token', '', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      path: '/',
      maxAge: 0, // Immediately expire
    });

    // Minimal headers untuk performa optimal
    response.headers.set('Cache-Control', 'no-store');
    response.headers.set('Clear-Site-Data', '"cookies"');

    return response;
  } catch (error) {
    // Even on error, return sukses jika berhasil logout
    console.error('Logout error:', error);
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );
    
    // tetap menghapus cookie jika terjadi kesalahan
    response.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
      path: '/',
      maxAge: 0,
    });
    
    return response;
  }
}
