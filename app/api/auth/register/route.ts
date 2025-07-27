import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { sendOtpEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nama, email, noHp, noKK, nik,
      tanggalLahir, alamat, password, roleId,
    } = body;

    if (!nama || !email || !noHp || !nik || !tanggalLahir || !alamat || !password || !roleId) {
      return NextResponse.json({ message: 'harap isi data yang wajib diisi!' }, { status: 400 });
    }

    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return NextResponse.json({ message: 'Email sudah digunakan!' }, { status: 409 });
    }

    const existingNik = await prisma.user.findUnique({ where: { nik } });
    if (existingNik) {
      return NextResponse.json({ message: 'NIK sudah digunakan!' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        nama,
        email,
        noHp,
        noKK,
        nik,
        tanggalLahir: new Date(tanggalLahir),
        alamat,
        password: hashedPassword,
        roleId: Number(roleId),
      },
    });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

    await prisma.otp.create({
      data: {
        email,
        kode: otp,
        expiredAt,
      },
    });

    await sendOtpEmail(email, otp);

    return NextResponse.json({
      message: 'Pendaftaran berhasil! Kode OTP dikirim ke email.',
      user: { id: newUser.id, email: newUser.email },
    }, { status: 201 });

  } catch (error) {
    console.error('Error saat register:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan saat pendaftaran!' }, { status: 500 });
  }
}
