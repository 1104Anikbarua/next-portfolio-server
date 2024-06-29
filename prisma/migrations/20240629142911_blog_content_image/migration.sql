/*
  Warnings:

  - Added the required column `imageLink` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "imageLink" TEXT NOT NULL;
