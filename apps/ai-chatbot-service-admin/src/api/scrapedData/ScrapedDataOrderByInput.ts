import { SortOrder } from "../../util/SortOrder";

export type ScrapedDataOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  retrievalDate?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
};
