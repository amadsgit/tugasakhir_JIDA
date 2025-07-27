
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, kode } = await req.json();

    console.log("kode OTP yang dikirim:", kode);
    if (!email || !kode) {
      return NextResponse.json({ message: 'Email dan kode OTP wajib diisi!' }, { status: 400 });
    }

    const otpRecord = await prisma.otp.findFirst({
      where: {
        email,
        kode,
        verified: false,
        expiredAt: {
          gte: new Date(),
        },
      },
    });

    if (!otpRecord) {
      return NextResponse.json({ message: 'OTP tidak valid atau sudah kedaluwarsa!' }, { status: 400 });
    }

    // Update OTP menjadi terverifikasi
    await prisma.otp.update({
      where: { id: otpRecord.id },
      data: { verified: true },
    });

    // Update user menjadi terverifikasi 
    await prisma.user.update({
      where: { email },
      data: { isVerified: true },
    });

    return NextResponse.json({ message: '' }, { status: 200 });
  } catch (error) {
    console.error('Error saat verifikasi OTP:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan!' }, { status: 500 });
  }
}
