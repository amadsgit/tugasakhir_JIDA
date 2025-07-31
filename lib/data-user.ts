// lib/data-posyandu.ts
import { prisma } from './prisma';

export async function getTotalUser() {
  const total = await prisma.user.count();
  return total;
}
