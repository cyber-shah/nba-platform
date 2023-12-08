import React, { useEffect, useState } from "react";
import { FormField, TextInput, Button, Box, Form, Text } from "grommet";
import { CrudForms } from "./CrudForms";
import { useParams } from "react-router-dom";

export default function CrudPage(props) {
  // State to store the array of labels
  const [labelsArray, setLabelsArray] = useState([]);

  // Get the label and option from the URL
  const { label, option } = useParams();
  console.log(label);
  console.log(option);

  // Fetch the array of labels from CrudForms when label or option changes
  useEffect(() => {
    const fetchData = () => {
        const labels = CrudForms[label][option];
        setLabelsArray(labels);
        console.log(labelsArray);
    };
    fetchData();
  }, [option]);

  return (
    <>
      <Box
        pad="large"
        width="medium"
        margin={{
          top: "xlarge",
          bottom: "large",
          left: "auto",
          right: "auto",
        }}
        elevation="medium"
        round="medium"
      >
        <Text size="xxlarge" margin="medium" color="brand" alignSelf="center">
          {label} {option}
        </Text>

        {labelsArray.length > 0 && (
          <Form>
            <br />

            {labelsArray.map((field, index) => (
              <FormField key={index} label={field.label}>
                <TextInput name={field.name} type={field.type} />
              </FormField>
            ))}
            <Button primary label="Submit" />
          </Form>
        )}
      </Box>
    </>
  );
}
