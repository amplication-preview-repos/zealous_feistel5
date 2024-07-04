import { SortOrder } from "../../util/SortOrder";

export type BookDataOrderByInput = {
  bookTitle?: SortOrder;
  contentSummary?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  integrationDate?: SortOrder;
  updatedAt?: SortOrder;
};
