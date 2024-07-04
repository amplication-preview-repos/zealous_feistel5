import * as graphql from "@nestjs/graphql";
import { CustomDataResolverBase } from "./base/customData.resolver.base";
import { CustomData } from "./base/CustomData";
import { CustomDataService } from "./customData.service";

@graphql.Resolver(() => CustomData)
export class CustomDataResolver extends CustomDataResolverBase {
  constructor(protected readonly service: CustomDataService) {
    super(service);
  }
}
