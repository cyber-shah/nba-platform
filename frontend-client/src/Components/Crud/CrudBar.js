import React from "react";
import { Box, Select, Grid, Text } from "grommet";
import { useNavigate } from "react-router-dom";

const CRUDOperation = ({ label, options, value, onSelect }) => (
  <>
    <Text textAlign="end" size="medium" color="brand" alignSelf="center">
      {label}
    </Text>
    <Select
      options={options}
      value={value}
      onChange={({ option }) => onSelect(option, label)}
    />
  </>
);

const CrudBar = () => {
  const navigate = useNavigate();

  const operations = [
    {
      label: "Create",
      options: ["game", "player", "arena", "team"],
      value: "Create operations",
    },
    {
      label: "Read",
      options: ["game", "player", "standings", "team"],
      value: "Read operations",
    },
    {
      label: "Update",
      options: ["game", "player", "arena", "team"],
      value: "Update operations",
    },
    {
      label: "Delete",
      options: ["game", "player", "arena", "team"],
      value: "Delete operations",
    },
  ];

  const handleSelect = (option, label) => {
    navigate(`/CrudPage/${label}/${option}`);
  };

  return (
    <Box pad="medium" elevation="large" round="small" align="center">
      <Grid
        columns={[
          "xsmall",
          "small",
          "xsmall",
          "small",
          "xsmall",
          "small",
          "xsmall",
          "small",
        ]}
        gap="small"
      >
        {operations.map((operation, index) => (
          <CRUDOperation
            key={index}
            label={operation.label}
            options={operation.options}
            value={operation.value}
            onSelect={(selectedOption, selectedLabel) =>
              handleSelect(selectedOption, selectedLabel)
            }
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CrudBar;
