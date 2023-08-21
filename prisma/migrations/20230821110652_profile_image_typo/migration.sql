/*
  Warnings:

  - You are about to drop the column `profileimage` on the `faculties` table. All the data in the column will be lost.
  - You are about to drop the column `profileimage` on the `students` table. All the data in the column will be lost.
  - Added the required column `profileImage` to the `faculties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faculties" DROP COLUMN "profileimage",
ADD COLUMN     "profileImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students" DROP COLUMN "profileimage",
ADD COLUMN     "profileImage" TEXT NOT NULL;
