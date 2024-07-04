import { SortOrder } from "../../util/SortOrder";

export type CustomDataOrderByInput = {
  createdAt?: SortOrder;
  extractedEntityType?: SortOrder;
  extractionDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userProvidedText?: SortOrder;
};
