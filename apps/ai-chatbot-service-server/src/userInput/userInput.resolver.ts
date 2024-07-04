import * as graphql from "@nestjs/graphql";
import { UserInputResolverBase } from "./base/userInput.resolver.base";
import { UserInput } from "./base/UserInput";
import { UserInputService } from "./userInput.service";

@graphql.Resolver(() => UserInput)
export class UserInputResolver extends UserInputResolverBase {
  constructor(protected readonly service: UserInputService) {
    super(service);
  }
}
