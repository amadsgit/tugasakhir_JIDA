import { PrismaClient, Akreditasi } from '@/generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.posyandu.create({
    data: {
      nama: 'Posyandu Melati',
      alamat: 'Jl. Curug lima',
      wilayah: 'RW 01',
      kelurahan: 'Kelurahan Pasirkareumbi',
      penanggungJawab: 'Nani hayati',
      noHp: '081234567001',
      akreditasi: Akreditasi.Paripurna,
      longitude: 107.123001,
      lattitude: -6.987001,
    },
  })

  console.log('Posyandu berhasil disimpan!')
}

main()
  .catch((e) => {
    console.error('Seeding error:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
