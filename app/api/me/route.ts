import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtToken } from '@/lib/jwt';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      console.log('No token found in cookies');
      return NextResponse.json({ user: null, error: 'No token' }, { status: 401 });
    }

    const decoded = await verifyJwtToken(token);
    
    if (!decoded) {
      console.log('Token verification failed');
      return NextResponse.json({ user: null, error: 'Invalid token' }, { status: 401 });
    }

    console.log('Token verified successfully for user:', decoded.email);
    return NextResponse.json({ user: decoded });
  } catch (error) {
    console.error('Error in /api/me:', error);
    return NextResponse.json({ user: null, error: 'Server error' }, { status: 401 });
  }
}
