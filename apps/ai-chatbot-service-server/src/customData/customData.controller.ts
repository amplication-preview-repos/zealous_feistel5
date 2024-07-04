import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomDataService } from "./customData.service";
import { CustomDataControllerBase } from "./base/customData.controller.base";

@swagger.ApiTags("customData")
@common.Controller("customData")
export class CustomDataController extends CustomDataControllerBase {
  constructor(protected readonly service: CustomDataService) {
    super(service);
  }
}
