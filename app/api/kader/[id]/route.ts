
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


// PUT: Update data kader
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await req.json();

    const kader = await prisma.kader.update({
      where: { id: parseInt(id) },
      data,
    });

    return NextResponse.json(kader);
  } catch (error) {
    console.error('[PUT Kader]', error);
    return NextResponse.json({ error: 'Gagal update kader' }, { status: 400 });
  }
}

// DELETE: Hapus data kader berdasarkan ID
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.kader.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Berhasil dihapus' });
  } catch (error) {
    console.error('[DELETE Kader]', error);
    return NextResponse.json({ error: 'Gagal menghapus kader' }, { status: 400 });
  }
}
