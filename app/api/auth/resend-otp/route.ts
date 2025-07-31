import { PrismaClient } from "@/generated/prisma";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email wajib diisi." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "User tidak ditemukan." }, { status: 404 });
    }

    // Nonaktifkan OTP lama yang belum kadaluarsa
    await prisma.otp.updateMany({
      where: {
        userId: user.id,
        expiry: { gt: new Date() },
      },
      data: {
        expiry: new Date(), // langsung kadaluarsa
      },
    });

    // Generate OTP baru
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

    await prisma.otp.create({
      data: {
        kode: otp,
        expiry,
        userId: user.id,
      },
    });

    // Kirim ulang OTP via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"e-Posyandu" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Kode OTP Baru",
      text: `Halo ${user.nama},\n\nKode OTP baru Anda adalah: ${otp}\nKode ini berlaku selama 10 menit.\n\nJangan berikan kode ini kepada siapa pun.`,
    });

    return NextResponse.json({ message: "Kode OTP baru berhasil dikirim ke email." });

  } catch (error) {
    console.error("Gagal mengirim ulang OTP:", error);
    return NextResponse.json({ message: "Terjadi kesalahan saat mengirim ulang OTP." }, { status: 500 });
  }
}
