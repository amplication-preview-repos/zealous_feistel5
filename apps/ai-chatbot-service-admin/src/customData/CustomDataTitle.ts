import { CustomData as TCustomData } from "../api/customData/CustomData";

export const CUSTOMDATA_TITLE_FIELD = "id";

export const CustomDataTitle = (record: TCustomData): string => {
  return record.id?.toString() || String(record.id);
};
