
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const kader = await prisma.kader.findMany({ include: { posyandu: true } });
  return NextResponse.json(kader);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const kader = await prisma.kader.create({ data });
    return NextResponse.json(kader, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menambahkan kader' }, { status: 400 });
  }
}
