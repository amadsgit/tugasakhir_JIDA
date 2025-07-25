
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await req.json(); 

    const role = await prisma.role.update({
      where: { id: parseInt(id) },
      data,
    });

    return NextResponse.json(role);
  } catch (error) {
    console.error('[PUT role]', error);
    return NextResponse.json({ error: 'Gagal update role' }, { status: 400 });
  }
}



export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const roleId = parseInt(id);

    // Cek apakah ada user yang terhubung
    const jumlahUser = await prisma.user.count({
      where: { roleId },
    });

    if (jumlahUser > 0) {
      return NextResponse.json(
        {
          error: 'Role masih memiliki user aktif. Silahkan hapus user terlebih dahulu sebelum menghapus data.',
        },
        { status: 409 } // HTTP 409 Conflict
      );
    }

    await prisma.role.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Role Berhasil dihapus' });
  } catch (error) {
    console.error('[DELETE role]', error);
    return NextResponse.json({ error: 'Gagal menghapus role' }, { status: 400 });
  }
}
