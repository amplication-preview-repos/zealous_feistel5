import * as graphql from "@nestjs/graphql";
import { ScrapedDataResolverBase } from "./base/scrapedData.resolver.base";
import { ScrapedData } from "./base/ScrapedData";
import { ScrapedDataService } from "./scrapedData.service";

@graphql.Resolver(() => ScrapedData)
export class ScrapedDataResolver extends ScrapedDataResolverBase {
  constructor(protected readonly service: ScrapedDataService) {
    super(service);
  }
}
