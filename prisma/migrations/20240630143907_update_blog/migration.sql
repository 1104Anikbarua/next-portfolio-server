/*
  Warnings:

  - You are about to drop the column `imageLink` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "imageLink",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
