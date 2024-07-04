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
import { BookData } from "./BookData";
import { BookDataCountArgs } from "./BookDataCountArgs";
import { BookDataFindManyArgs } from "./BookDataFindManyArgs";
import { BookDataFindUniqueArgs } from "./BookDataFindUniqueArgs";
import { DeleteBookDataArgs } from "./DeleteBookDataArgs";
import { BookDataService } from "../bookData.service";
@graphql.Resolver(() => BookData)
export class BookDataResolverBase {
  constructor(protected readonly service: BookDataService) {}

  async _bookDataItemsMeta(
    @graphql.Args() args: BookDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BookData])
  async bookDataItems(
    @graphql.Args() args: BookDataFindManyArgs
  ): Promise<BookData[]> {
    return this.service.bookDataItems(args);
  }

  @graphql.Query(() => BookData, { nullable: true })
  async bookData(
    @graphql.Args() args: BookDataFindUniqueArgs
  ): Promise<BookData | null> {
    const result = await this.service.bookData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BookData)
  async deleteBookData(
    @graphql.Args() args: DeleteBookDataArgs
  ): Promise<BookData | null> {
    try {
      return await this.service.deleteBookData(args);
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
