import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BookDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bookTitle" source="bookTitle" />
        <TextInput label="contentSummary" multiline source="contentSummary" />
        <DateTimeInput label="integrationDate" source="integrationDate" />
      </SimpleForm>
    </Create>
  );
};
