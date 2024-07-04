import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookDataServiceBase } from "./base/bookData.service.base";

@Injectable()
export class BookDataService extends BookDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
