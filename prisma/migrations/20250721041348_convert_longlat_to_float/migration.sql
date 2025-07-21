/*
  Warnings:

  - Changed the type of `longitude` on the `Posyandu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lattitude` on the `Posyandu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Posyandu" DROP COLUMN "longitude",
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
DROP COLUMN "lattitude",
ADD COLUMN     "lattitude" DOUBLE PRECISION NOT NULL;
