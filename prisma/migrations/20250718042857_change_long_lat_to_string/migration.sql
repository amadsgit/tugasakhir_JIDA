/*
  Warnings:

  - The values [BelumDiakreditasi] on the enum `Akreditasi` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Akreditasi_new" AS ENUM ('Paripurna', 'Pratama', 'Madya', 'Purnama', 'Mandiri', 'Belum_akreditasi');
ALTER TABLE "Posyandu" ALTER COLUMN "akreditasi" TYPE "Akreditasi_new" USING ("akreditasi"::text::"Akreditasi_new");
ALTER TYPE "Akreditasi" RENAME TO "Akreditasi_old";
ALTER TYPE "Akreditasi_new" RENAME TO "Akreditasi";
DROP TYPE "Akreditasi_old";
COMMIT;
