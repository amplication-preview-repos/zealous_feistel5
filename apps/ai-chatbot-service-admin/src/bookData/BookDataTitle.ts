import { BookData as TBookData } from "../api/bookData/BookData";

export const BOOKDATA_TITLE_FIELD = "id";

export const BookDataTitle = (record: TBookData): string => {
  return record.id?.toString() || String(record.id);
};
