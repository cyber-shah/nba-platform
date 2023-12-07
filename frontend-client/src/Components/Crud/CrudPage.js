import React from "react";
import { FormField, TextInput, Button, Box, Form } from "grommet";
import {
  getUpdateForm,
  getDeleteForm,
  getCreateForm,
} from "../../API/MySQL/CrudAPI";
import { useParams } from "react-router-dom";

export default function CrudPage(props) {
  // 1. Get the label and option from the URL
  const { label, option } = useParams();
  console.log(label, option);

  // 2. Use the label and option to get the correct form data
    const [labelsArray, setLabelsArray] = React.useState(null);
    
    // 3. Refresh the form data whenever the label or option changes
  React.useEffect(() => {
    fetchData();
  }, [label, option]);

  const fetchData = async () => {
    var crudData = null;
    if (label === "Create") {
      crudData = await getCreateForm(option);
    } else if (label === "Update") {
      crudData = await getUpdateForm(option);
    } else {
      crudData = await getDeleteForm(option);
    }
      setLabelsArray(crudData);
      console.log(crudData)
  };

  return (
        <Box pad="medium">
      {labelsArray !== null && (
        <Form>
          {labelsArray.map((label, index) => (
            <FormField key={index} label={label}>
              <TextInput />
            </FormField>
          ))}
          <Button primary label="Submit" />
        </Form>
      )}
    </Box>
  );
}
