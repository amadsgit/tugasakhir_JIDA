import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { sendOtpEmail } from "@/lib/mailer";

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

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 menit dari sekarang

    // Simpan OTP ke DB
    await prisma.otp.create({
      data: {
        kode: otp,
        expiry,
        userId: user.id,
      },
    });

    // Kirim email OTP menggunakan fungsi dari lib/mailer.ts
    await sendOtpEmail(email, otp);

    return NextResponse.json({ message: "Kode OTP berhasil dikirim ke email." });

  } catch (error) {
    console.error("Gagal mengirim OTP:", error);
    return NextResponse.json({ message: "Terjadi kesalahan saat mengirim OTP." }, { status: 500 });
  }
}
