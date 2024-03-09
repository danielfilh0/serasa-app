/*
  Warnings:

  - A unique constraint covering the columns `[ip_address]` on the table `evaluations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ip_address` to the `evaluations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "evaluations" ADD COLUMN     "ip_address" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "evaluations_ip_address_key" ON "evaluations"("ip_address");
