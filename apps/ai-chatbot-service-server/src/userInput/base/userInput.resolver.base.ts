/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserInput } from "./UserInput";
import { UserInputCountArgs } from "./UserInputCountArgs";
import { UserInputFindManyArgs } from "./UserInputFindManyArgs";
import { UserInputFindUniqueArgs } from "./UserInputFindUniqueArgs";
import { CreateUserInputArgs } from "./CreateUserInputArgs";
import { UpdateUserInputArgs } from "./UpdateUserInputArgs";
import { DeleteUserInputArgs } from "./DeleteUserInputArgs";
import { UserInputService } from "../userInput.service";
@graphql.Resolver(() => UserInput)
export class UserInputResolverBase {
  constructor(protected readonly service: UserInputService) {}

  async _userInputsMeta(
    @graphql.Args() args: UserInputCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserInput])
  async userInputs(
    @graphql.Args() args: UserInputFindManyArgs
  ): Promise<UserInput[]> {
    return this.service.userInputs(args);
  }

  @graphql.Query(() => UserInput, { nullable: true })
  async userInput(
    @graphql.Args() args: UserInputFindUniqueArgs
  ): Promise<UserInput | null> {
    const result = await this.service.userInput(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserInput)
  async createUserInput(
    @graphql.Args() args: CreateUserInputArgs
  ): Promise<UserInput> {
    return await this.service.createUserInput({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UserInput)
  async updateUserInput(
    @graphql.Args() args: UpdateUserInputArgs
  ): Promise<UserInput | null> {
    try {
      return await this.service.updateUserInput({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserInput)
  async deleteUserInput(
    @graphql.Args() args: DeleteUserInputArgs
  ): Promise<UserInput | null> {
    try {
      return await this.service.deleteUserInput(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
