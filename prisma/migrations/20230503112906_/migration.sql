/*
  Warnings:

  - Added the required column `about` to the `Details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Details" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "profile" TEXT NOT NULL;
