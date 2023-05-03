-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "data" TEXT[],

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "title" TEXT NOT NULL,
    "concepts" TEXT[],
    "tools" TEXT[],
    "description" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "demo" TEXT NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Details" (
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "slogan" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Projects_title_key" ON "Projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Details_name_key" ON "Details"("name");
