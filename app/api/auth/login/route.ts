import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { signJwtAccessToken } from '@/lib/jwt';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Format email tidak valid' }),
  password: z.string().min(6, { message: 'Password minimal 6 karakter' }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: 'Validasi gagal', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });

    if (!user) {
      return NextResponse.json({ message: 'Email tidak ditemukan.' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Password salah.' }, { status: 401 });
    }

    if (!user.isVerified) {
      return NextResponse.json({ message: 'Akun belum diverifikasi', unverified: true }, { status: 403 });
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role.slug,
      nama: user.nama,
    };

    const token = await signJwtAccessToken(payload);

    const response = NextResponse.json({ message: 'Login berhasil', user: payload });
    response.cookies.set('token', token, {
      httpOnly: false, // untuk sementara
      // httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600, // 1 jam
      path: '/',
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Terjadi kesalahan saat login' }, { status: 500 });
  }
}
