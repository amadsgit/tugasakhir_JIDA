import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


export async function GET() {
  try {
    const role = await prisma.role.findMany({
      select: {
        id: true,
        nama: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(role);
  } catch (error) {
    console.error('Error fetching role:', error);
    return NextResponse.json({ message: 'Gagal mengambil data role' }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama } = body;

    if (!nama || typeof nama !== 'string') {
      return NextResponse.json({ message: 'Nama role tidak valid' }, { status: 400 });
    }

    const existing = await prisma.role.findUnique({
      where: { nama },
    });

    if (existing) {
      return NextResponse.json({ message: 'Role sudah ada' }, { status: 409 });
    }

    const newRole = await prisma.role.create({
      data: { nama },
    });

    return NextResponse.json(newRole, { status: 201 });
  } catch (error) {
    console.error('Error creating role:', error);
    return NextResponse.json({ message: 'Gagal menambah Role' }, { status: 500 });
  }
}
