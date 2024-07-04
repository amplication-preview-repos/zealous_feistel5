import { UserInput as TUserInput } from "../api/userInput/UserInput";

export const USERINPUT_TITLE_FIELD = "id";

export const UserInputTitle = (record: TUserInput): string => {
  return record.id?.toString() || String(record.id);
};
