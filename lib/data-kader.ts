// lib/data-posyandu.ts
import { prisma } from './prisma';

export async function getTotalKader() {
  const total = await prisma.kader.count();
  return total;
}
