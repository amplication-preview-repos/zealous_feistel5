import { Module } from "@nestjs/common";
import { CustomDataModuleBase } from "./base/customData.module.base";
import { CustomDataService } from "./customData.service";
import { CustomDataController } from "./customData.controller";
import { CustomDataResolver } from "./customData.resolver";

@Module({
  imports: [CustomDataModuleBase],
  controllers: [CustomDataController],
  providers: [CustomDataService, CustomDataResolver],
  exports: [CustomDataService],
})
export class CustomDataModule {}
