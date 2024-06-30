/*
  Warnings:

  - You are about to drop the column `name` on the `skills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "skills" DROP COLUMN "name",
ADD COLUMN     "comfortable" TEXT[],
ADD COLUMN     "expertise" TEXT[],
ADD COLUMN     "familiar" TEXT[],
ADD COLUMN     "tools" TEXT[];
