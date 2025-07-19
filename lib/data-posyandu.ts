// lib/data-posyandu.ts
import { prisma } from './prisma';

export async function getTotalPosyandu() {
  const total = await prisma.posyandu.count();
  return total;
}
