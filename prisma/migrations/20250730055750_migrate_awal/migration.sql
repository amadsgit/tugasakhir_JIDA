-- CreateEnum
CREATE TYPE "Akreditasi" AS ENUM ('PARIPURNA', 'PRATAMA', 'MADYA', 'PURNAMA', 'MANDIRI', 'BELUM_AKREDITASI');

-- CreateTable
CREATE TABLE "Kelurahan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kelurahan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posyandu" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "wilayah" TEXT NOT NULL,
    "kelurahanId" INTEGER,
    "penanggungJawab" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "akreditasi" "Akreditasi" NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
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

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "noKK" TEXT,
    "nik" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "resetToken" TEXT,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Otp" (
    "id" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kelurahan_nama_key" ON "Kelurahan"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Kader_nik_key" ON "Kader"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Role_nama_key" ON "Role"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Role_slug_key" ON "Role"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_nik_key" ON "User"("nik");

-- AddForeignKey
ALTER TABLE "Posyandu" ADD CONSTRAINT "Posyandu_kelurahanId_fkey" FOREIGN KEY ("kelurahanId") REFERENCES "Kelurahan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kader" ADD CONSTRAINT "Kader_posyanduId_fkey" FOREIGN KEY ("posyanduId") REFERENCES "Posyandu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
