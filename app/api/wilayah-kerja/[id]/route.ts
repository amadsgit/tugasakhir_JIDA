
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// PUT: Update data kelurahan
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await req.json();

    const kelurahan = await prisma.kelurahan.update({
      where: { id: parseInt(id) },
      data,
    });

    return NextResponse.json(kelurahan);
  } catch (error) {
    console.error('[PUT Kelurahan]', error);
    return NextResponse.json({ error: 'Gagal update kelurahan/desa' }, { status: 400 });
  }
}

// DELETE: Hapus data kelurahan/desa berdasarkan ID
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.kelurahan.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Berhasil dihapus' });
  } catch (error) {
    console.error('[DELETE Kelurahan]', error);
    return NextResponse.json({ error: 'Gagal menghapus kelurahan/desa' }, { status: 400 });
  }
}
