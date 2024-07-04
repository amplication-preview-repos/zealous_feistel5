import { CustomData as TCustomData } from "../api/customData/CustomData";

export const CUSTOMDATA_TITLE_FIELD = "extractedEntityType";

export const CustomDataTitle = (record: TCustomData): string => {
  return record.extractedEntityType?.toString() || String(record.id);
};
