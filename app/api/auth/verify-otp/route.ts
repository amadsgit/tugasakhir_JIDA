import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ message: "Email dan OTP wajib diisi." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "User tidak ditemukan." }, { status: 404 });
    }

    const otpRecord = await prisma.otp.findFirst({
      where: {
        userId: user.id,
        kode: otp,
        expiry: { gte: new Date() },
      },
    });

    if (!otpRecord) {
      return NextResponse.json({ message: "OTP salah atau sudah kadaluarsa." }, { status: 400 });
    }

    // Hapus OTP agar tidak bisa digunakan ulang
    await prisma.otp.delete({ where: { id: otpRecord.id } });

    // Update status verifikasi
    await prisma.user.update({
      where: { id: user.id },
      data: { verifiedAt: new Date() },
    });

    return NextResponse.json({ message: "" }, { status: 200 });

  } catch (error) {
    console.error("Error verifikasi OTP:", error);
    return NextResponse.json({ message: "Terjadi kesalahan server." }, { status: 500 });
  }
}
