import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ScrapedDataWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  retrievalDate?: DateTimeNullableFilter;
  source?: StringNullableFilter;
};
