import { UserInput as TUserInput } from "../api/userInput/UserInput";

export const USERINPUT_TITLE_FIELD = "text";

export const UserInputTitle = (record: TUserInput): string => {
  return record.text?.toString() || String(record.id);
};
