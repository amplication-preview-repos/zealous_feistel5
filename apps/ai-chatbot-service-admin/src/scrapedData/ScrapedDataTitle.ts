import { ScrapedData as TScrapedData } from "../api/scrapedData/ScrapedData";

export const SCRAPEDDATA_TITLE_FIELD = "source";

export const ScrapedDataTitle = (record: TScrapedData): string => {
  return record.source?.toString() || String(record.id);
};
