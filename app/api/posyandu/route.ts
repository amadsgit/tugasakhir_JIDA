import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posyandu = await prisma.posyandu.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(posyandu);
  } catch (error) {
    console.error('[GET Posyandu]', error);
    return NextResponse.json(
      { error: 'Gagal mengambil data posyandu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
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

    // Simpan ke database
    const newPosyandu = await prisma.posyandu.create({
      data: {
        nama,
        alamat,
        wilayah,
        kelurahan,
        penanggungJawab,
        noHp,
        akreditasi: akreditasi as any, // enum string
        longitude,
        lattitude,
      },
    });

    return NextResponse.json(newPosyandu, { status: 201 });
  } catch (error) {
    console.error('[POST Posyandu]', error);
    return NextResponse.json(
      { error: 'Gagal menambahkan data posyandu.' },
      { status: 500 }
    );
  }
}
