/*
  Warnings:

  - You are about to drop the column `category` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `githubClient` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `githubServer` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `technologyUsed` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "category",
DROP COLUMN "githubClient",
DROP COLUMN "githubServer",
DROP COLUMN "technologyUsed",
ADD COLUMN     "githubClientLink" TEXT,
ADD COLUMN     "githubServerLink" TEXT,
ADD COLUMN     "technologies" TEXT[];
