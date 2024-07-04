import { CustomDataWhereInput } from "./CustomDataWhereInput";
import { CustomDataOrderByInput } from "./CustomDataOrderByInput";

export type CustomDataFindManyArgs = {
  where?: CustomDataWhereInput;
  orderBy?: Array<CustomDataOrderByInput>;
  skip?: number;
  take?: number;
};
