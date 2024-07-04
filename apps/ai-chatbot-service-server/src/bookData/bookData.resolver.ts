import * as graphql from "@nestjs/graphql";
import { BookDataResolverBase } from "./base/bookData.resolver.base";
import { BookData } from "./base/BookData";
import { BookDataService } from "./bookData.service";

@graphql.Resolver(() => BookData)
export class BookDataResolver extends BookDataResolverBase {
  constructor(protected readonly service: BookDataService) {
    super(service);
  }
}
