import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInputServiceBase } from "./base/userInput.service.base";

@Injectable()
export class UserInputService extends UserInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
