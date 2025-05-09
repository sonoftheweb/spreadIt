-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "uploadTimestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "File" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" INTEGER NOT NULL,
    "originalFilename" TEXT NOT NULL,
    "uploadTimestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "File_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Row" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileId" INTEGER NOT NULL,
    "rowNumberInFile" INTEGER NOT NULL,
    CONSTRAINT "Row_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ColumnMetadata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileId" INTEGER NOT NULL,
    "columnName" TEXT NOT NULL,
    "detectedDataType" TEXT NOT NULL,
    CONSTRAINT "ColumnMetadata_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DataValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rowId" INTEGER NOT NULL,
    "columnId" INTEGER NOT NULL,
    "valueText" TEXT,
    "valueInteger" INTEGER,
    "valueReal" REAL,
    "valueDatetime" TEXT,
    "valueBoolean" BOOLEAN,
    CONSTRAINT "DataValue_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "Row" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DataValue_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "ColumnMetadata" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_name_key" ON "Session"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Row_fileId_rowNumberInFile_key" ON "Row"("fileId", "rowNumberInFile");

-- CreateIndex
CREATE UNIQUE INDEX "ColumnMetadata_fileId_columnName_key" ON "ColumnMetadata"("fileId", "columnName");

-- CreateIndex
CREATE UNIQUE INDEX "DataValue_rowId_columnId_key" ON "DataValue"("rowId", "columnId");
