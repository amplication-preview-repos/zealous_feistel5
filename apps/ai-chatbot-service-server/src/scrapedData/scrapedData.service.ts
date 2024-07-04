import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapedDataServiceBase } from "./base/scrapedData.service.base";

@Injectable()
export class ScrapedDataService extends ScrapedDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
