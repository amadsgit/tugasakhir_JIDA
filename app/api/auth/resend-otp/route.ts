import { prisma } from '@/lib/prisma';
import { sendOtpEmail } from '@/lib/mailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email wajib diisi' }, { status: 400 });
    }

    // memebuat OTP baru
    const kode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000);

    // menandai semua otp sebelumnya sebagai tidak berlaku
    await prisma.otp.updateMany({
      where: {
        email,
        verified: false,
        expiredAt: { gt: new Date() }
      },
      data: {
        expiredAt: new Date(), // expired langsung
      },
    });

    // Simpan OTP baru
    await prisma.otp.create({
      data: {
        email,
        kode,
        expiredAt,
      },
    });

    // Kirim email
    await sendOtpEmail(email, kode);

    return NextResponse.json({ message: 'OTP baru telah dikirim ke email Anda.' });
  } catch (error) {
    console.error('Gagal mengirim ulang OTP:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan saat mengirim OTP.' }, { status: 500 });
  }
}
