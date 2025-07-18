import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET: Ambil detail Posyandu berdasarkan ID
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const posyandu = await prisma.posyandu.findUnique({
      where: { id: parseInt(id) },
    });

    if (!posyandu) {
      return NextResponse.json({ error: 'Data tidak ditemukan.' }, { status: 404 });
    }

    return NextResponse.json(posyandu);
  } catch (error) {
    console.error('[GET Posyandu]', error);
    return NextResponse.json({ error: 'Gagal mengambil data posyandu.' }, { status: 500 });
  }
}

// PUT: Update data posyandu
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const {
      nama,
      alamat,
      wilayah,
      kelurahan,
      penanggungJawab,
      noHp,
      akreditasi,
      longitude,
      lattitude,
    } = body;

    // Validasi kosong
    if (
      !nama ||
      !alamat ||
      !wilayah ||
      !kelurahan ||
      !penanggungJawab ||
      !noHp ||
      !akreditasi ||
      !longitude ||
      !lattitude
    ) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi.' },
        { status: 400 }
      );
    }

    // Validasi enum akreditasi
    const validAkreditasi = [
      'Paripurna',
      'Pratama',
      'Madya',
      'Purnama',
      'Mandiri',
      'Belum_akreditasi',
    ];

    if (!validAkreditasi.includes(akreditasi)) {
      return NextResponse.json(
        { error: 'Akreditasi tidak valid.' },
        { status: 400 }
      );
    }

    const updated = await prisma.posyandu.update({
      where: { id: parseInt(id) },
      data: {
        nama,
        alamat,
        wilayah,
        kelurahan,
        penanggungJawab,
        noHp,
        akreditasi: akreditasi as any,
        longitude,
        lattitude,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error('[PUT Posyandu]', error);
    return NextResponse.json(
      { error: 'Gagal mengupdate data posyandu.' },
      { status: 500 }
    );
  }
}

// DELETE: Hapus posyandu berdasarkan ID
export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.posyandu.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Data berhasil dihapus.' });
  } catch (error) {
    console.error('[DELETE Posyandu]', error);
    return NextResponse.json(
      { error: 'Gagal menghapus data posyandu.' },
      { status: 500 }
    );
  }
}
