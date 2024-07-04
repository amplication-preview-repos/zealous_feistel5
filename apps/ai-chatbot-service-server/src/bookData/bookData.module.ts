import { Module } from "@nestjs/common";
import { BookDataModuleBase } from "./base/bookData.module.base";
import { BookDataService } from "./bookData.service";
import { BookDataController } from "./bookData.controller";
import { BookDataResolver } from "./bookData.resolver";

@Module({
  imports: [BookDataModuleBase],
  controllers: [BookDataController],
  providers: [BookDataService, BookDataResolver],
  exports: [BookDataService],
})
export class BookDataModule {}
