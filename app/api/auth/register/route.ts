import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const signupSchema = z.object({
  nama: z.string().min(1),
  email: z.string().email(),
  noHp: z.string().min(10),
  noKK: z.string().min(16),
  nik: z.string().min(16),
  tanggalLahir: z.string(), // akan dikonversi ke Date
  alamat: z.string().min(1),
  password: z.string().min(6),
  roleId: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nama,
      email,
      noHp,
      noKK,
      nik,
      tanggalLahir,
      alamat,
      password,
      roleId,
    } = signupSchema.parse(body);

    // Cek apakah email atau NIK sudah digunakan
    const [existingEmail, existingNik] = await Promise.all([
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { nik } }),
    ]);

    if (existingEmail) {
      return NextResponse.json({ message: "Email sudah digunakan!" }, { status: 409 });
    }

    if (existingNik) {
      return NextResponse.json({ message: "NIK sudah digunakan!" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
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
        roleId,
      },
    });

    // Kirim OTP ke endpoint /api/auth/send-otp
    await fetch(`${process.env.BASE_URL}/api/auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    return NextResponse.json({
      message: "Pendaftaran berhasil! Silakan verifikasi OTP dari email.",
      user: { id: newUser.id, email: newUser.email },
    }, { status: 201 });

  } catch (error: any) {
    console.error("Error saat register:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Validasi gagal", errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ message: "Terjadi kesalahan saat pendaftaran!" }, { status: 500 });
  }
}
