/*
  Warnings:

  - Added the required column `examType` to the `educations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "educations" ADD COLUMN     "examType" TEXT NOT NULL;
