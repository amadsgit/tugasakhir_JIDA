import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const user = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        role: {
          select: {
            id: true,
            nama: true,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('[GET user]', error);
    return NextResponse.json(
      { error: 'Gagal mengambil data user' },
      { status: 500 }
    );
  }
}