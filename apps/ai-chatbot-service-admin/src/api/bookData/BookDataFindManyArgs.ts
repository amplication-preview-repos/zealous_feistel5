import { BookDataWhereInput } from "./BookDataWhereInput";
import { BookDataOrderByInput } from "./BookDataOrderByInput";

export type BookDataFindManyArgs = {
  where?: BookDataWhereInput;
  orderBy?: Array<BookDataOrderByInput>;
  skip?: number;
  take?: number;
};
