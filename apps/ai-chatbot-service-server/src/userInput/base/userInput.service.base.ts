/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserInput as PrismaUserInput } from "@prisma/client";

export class UserInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserInputCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userInput.count(args);
  }

  async userInputs(
    args: Prisma.UserInputFindManyArgs
  ): Promise<PrismaUserInput[]> {
    return this.prisma.userInput.findMany(args);
  }
  async userInput(
    args: Prisma.UserInputFindUniqueArgs
  ): Promise<PrismaUserInput | null> {
    return this.prisma.userInput.findUnique(args);
  }
  async createUserInput(
    args: Prisma.UserInputCreateArgs
  ): Promise<PrismaUserInput> {
    return this.prisma.userInput.create(args);
  }
  async updateUserInput(
    args: Prisma.UserInputUpdateArgs
  ): Promise<PrismaUserInput> {
    return this.prisma.userInput.update(args);
  }
  async deleteUserInput(
    args: Prisma.UserInputDeleteArgs
  ): Promise<PrismaUserInput> {
    return this.prisma.userInput.delete(args);
  }
}
