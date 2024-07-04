import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="extractedEntityType" source="extractedEntityType" />
        <DateTimeInput label="extractionDate" source="extractionDate" />
        <TextInput
          label="userProvidedText"
          multiline
          source="userProvidedText"
        />
      </SimpleForm>
    </Edit>
  );
};
