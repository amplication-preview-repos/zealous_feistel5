import { ScrapedDataWhereInput } from "./ScrapedDataWhereInput";
import { ScrapedDataOrderByInput } from "./ScrapedDataOrderByInput";

export type ScrapedDataFindManyArgs = {
  where?: ScrapedDataWhereInput;
  orderBy?: Array<ScrapedDataOrderByInput>;
  skip?: number;
  take?: number;
};
