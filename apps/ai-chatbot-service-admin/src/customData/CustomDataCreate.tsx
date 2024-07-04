import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="extractedEntityType" source="extractedEntityType" />
        <DateTimeInput label="extractionDate" source="extractionDate" />
        <TextInput
          label="userProvidedText"
          multiline
          source="userProvidedText"
        />
      </SimpleForm>
    </Create>
  );
};
