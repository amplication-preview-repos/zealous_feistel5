import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserInputService } from "./userInput.service";
import { UserInputControllerBase } from "./base/userInput.controller.base";

@swagger.ApiTags("userInputs")
@common.Controller("userInputs")
export class UserInputController extends UserInputControllerBase {
  constructor(protected readonly service: UserInputService) {
    super(service);
  }
}
