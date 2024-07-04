import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookDataService } from "./bookData.service";
import { BookDataControllerBase } from "./base/bookData.controller.base";

@swagger.ApiTags("bookData")
@common.Controller("bookData")
export class BookDataController extends BookDataControllerBase {
  constructor(protected readonly service: BookDataService) {
    super(service);
  }
}
