import { BookDataWhereUniqueInput } from "./BookDataWhereUniqueInput";
import { BookDataUpdateInput } from "./BookDataUpdateInput";

export type UpdateBookDataArgs = {
  where: BookDataWhereUniqueInput;
  data: BookDataUpdateInput;
};
