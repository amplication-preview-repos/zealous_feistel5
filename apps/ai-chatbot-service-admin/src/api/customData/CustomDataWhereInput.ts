import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomDataWhereInput = {
  extractedEntityType?: StringNullableFilter;
  extractionDate?: DateTimeNullableFilter;
  id?: StringFilter;
  userProvidedText?: StringNullableFilter;
};
