import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'User berhasil dihapus' });
  } catch (error) {
    console.error('[DELETE User]', error);
    return NextResponse.json({ error: 'Gagal menghapus user' }, { status: 400 });
  }
}