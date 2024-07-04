import { ScrapedData as TScrapedData } from "../api/scrapedData/ScrapedData";

export const SCRAPEDDATA_TITLE_FIELD = "id";

export const ScrapedDataTitle = (record: TScrapedData): string => {
  return record.id?.toString() || String(record.id);
};
