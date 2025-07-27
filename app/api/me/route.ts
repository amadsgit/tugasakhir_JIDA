import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtToken } from '@/lib/jwt';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      if (process.env.NODE_ENV === 'production') {
        console.log('/api/me: No token found in cookies');
      }
      return NextResponse.json({ user: null, error: 'No token' }, { status: 401 });
    }

    const decoded = await verifyJwtToken(token);
    
    if (!decoded) {
      if (process.env.NODE_ENV === 'production') {
        console.log('/api/me: Token verification failed');
      }
      return NextResponse.json({ user: null, error: 'Invalid token' }, { status: 401 });
    }

    if (process.env.NODE_ENV === 'production') {
      console.log('/api/me: Token verified successfully for user:', decoded.email);
    }
    
    // Add CORS headers for production
    const response = NextResponse.json({ user: decoded });
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    if (process.env.NODE_ENV === 'production') {
      console.error('/api/me: Error:', error);
    }
    return NextResponse.json({ user: null, error: 'Server error' }, { status: 401 });
  }
}
