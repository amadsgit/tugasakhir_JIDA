// lib/data-posyandu.ts
import { prisma } from './prisma';

export async function getTotalKelurahan() {
  const total = await prisma.kelurahan.count();
  return total;
}
