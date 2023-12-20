import React, { useEffect, useState } from "react";
import { FormField, TextInput, Button, Box, Form, Text } from "grommet";
import { CrudForms } from "./CrudForms";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {createRecord, updateRecord, deleteRecord} from "../../API/MySQL/CrudAPI";

export default function CrudPage(props) {
  const [labelsArray, setLabelsArray] = useState([]);
  const { label, option } = useParams();
  const navigate = useNavigate();

  // State variables to store form data
  const [formData, setFormData] = useState({});

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (label === "Create") {
      await createRecord(option, formData);
    }
    else if (label === "Update") {
      await updateRecord(option, formData);
    }
    else if (label === "Delete") {
      await deleteRecord(option, formData);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      if (label === "Read") {
        if (option === "Team") navigate("/TeamHome/1610612737");
        else if (option === "Player") navigate("/PlayerHome/201988");
        else navigate("/SeasonHome");
      } else {
        const labels = CrudForms[label][option];
        setLabelsArray(labels);
      }
    };
    fetchData();
  }, [option]);

  // Function to handle input changes and update form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
          <Form onSubmit={handleSubmit}>
            <br />

            {labelsArray.map((field, index) => (
              <FormField key={index} label={field.label}>
                <TextInput
                  name={field.name}
                  type={field.type}
                  onChange={handleInputChange}
                />
              </FormField>
            ))}
            <Button type="submit" primary label="Submit" />
          </Form>
        )}
      </Box>
    </>
  );
}
