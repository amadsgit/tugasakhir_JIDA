-- CreateEnum
CREATE TYPE "Akreditasi" AS ENUM ('Paripurna', 'Pratama', 'Madya', 'Purnama', 'Mandiri', 'BelumDiakreditasi');

-- CreateTable
CREATE TABLE "Posyandu" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "wilayah" TEXT NOT NULL,
    "kelurahan" TEXT NOT NULL,
    "penanggungJawab" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "akreditasi" "Akreditasi" NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "lattitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posyandu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kader" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "posyanduId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kader_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kader_nik_key" ON "Kader"("nik");

-- AddForeignKey
ALTER TABLE "Kader" ADD CONSTRAINT "Kader_posyanduId_fkey" FOREIGN KEY ("posyanduId") REFERENCES "Posyandu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
