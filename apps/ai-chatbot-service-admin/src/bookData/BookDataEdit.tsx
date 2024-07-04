import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BookDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bookTitle" source="bookTitle" />
        <TextInput label="contentSummary" multiline source="contentSummary" />
        <DateTimeInput label="integrationDate" source="integrationDate" />
      </SimpleForm>
    </Edit>
  );
};
