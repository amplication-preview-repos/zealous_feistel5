import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserInputCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" source="text" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
