import { Module } from "@nestjs/common";
import { ScrapedDataModuleBase } from "./base/scrapedData.module.base";
import { ScrapedDataService } from "./scrapedData.service";
import { ScrapedDataController } from "./scrapedData.controller";
import { ScrapedDataResolver } from "./scrapedData.resolver";

@Module({
  imports: [ScrapedDataModuleBase],
  controllers: [ScrapedDataController],
  providers: [ScrapedDataService, ScrapedDataResolver],
  exports: [ScrapedDataService],
})
export class ScrapedDataModule {}
