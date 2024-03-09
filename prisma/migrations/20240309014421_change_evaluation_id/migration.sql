/*
  Warnings:

  - The primary key for the `evaluations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `evaluations` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id");
