import { UserInputWhereInput } from "./UserInputWhereInput";
import { UserInputOrderByInput } from "./UserInputOrderByInput";

export type UserInputFindManyArgs = {
  where?: UserInputWhereInput;
  orderBy?: Array<UserInputOrderByInput>;
  skip?: number;
  take?: number;
};
