/*
  Warnings:

  - The `status` column on the `semester_registrations` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SemesterRegistrationStatus" AS ENUM ('UPCOMING', 'ONGOING', 'ENDED');

-- AlterTable
ALTER TABLE "semester_registrations" DROP COLUMN "status",
ADD COLUMN     "status" "SemesterRegistrationStatus" DEFAULT 'UPCOMING';

-- DropEnum
DROP TYPE "semesterRegistrationStatus";
