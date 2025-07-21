// app/api/kader/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const kader = await prisma.kader.findUnique({ where: { id: Number(params.id) } });
  if (!kader) return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 });
  return NextResponse.json(kader);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const kader = await prisma.kader.update({
      where: { id: Number(params.id) },
      data,
    });
    return NextResponse.json(kader);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal update kader' }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.kader.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ message: 'Berhasil dihapus' });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menghapus kader' }, { status: 400 });
  }
}
