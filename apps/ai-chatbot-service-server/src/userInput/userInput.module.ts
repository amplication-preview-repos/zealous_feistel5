import { Module } from "@nestjs/common";
import { UserInputModuleBase } from "./base/userInput.module.base";
import { UserInputService } from "./userInput.service";
import { UserInputController } from "./userInput.controller";
import { UserInputResolver } from "./userInput.resolver";

@Module({
  imports: [UserInputModuleBase],
  controllers: [UserInputController],
  providers: [UserInputService, UserInputResolver],
  exports: [UserInputService],
})
export class UserInputModule {}
