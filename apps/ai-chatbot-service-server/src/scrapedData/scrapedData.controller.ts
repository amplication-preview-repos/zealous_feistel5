import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScrapedDataService } from "./scrapedData.service";
import { ScrapedDataControllerBase } from "./base/scrapedData.controller.base";

@swagger.ApiTags("scrapedData")
@common.Controller("scrapedData")
export class ScrapedDataController extends ScrapedDataControllerBase {
  constructor(protected readonly service: ScrapedDataService) {
    super(service);
  }
}
