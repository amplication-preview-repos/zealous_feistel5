import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomDataServiceBase } from "./base/customData.service.base";

@Injectable()
export class CustomDataService extends CustomDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
