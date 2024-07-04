import { BookData as TBookData } from "../api/bookData/BookData";

export const BOOKDATA_TITLE_FIELD = "bookTitle";

export const BookDataTitle = (record: TBookData): string => {
  return record.bookTitle?.toString() || String(record.id);
};
