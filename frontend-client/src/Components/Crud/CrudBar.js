import React from "react";
import { Box, Select, Grid, Text, Button } from "grommet";
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
      options: ["Game", "Player", "Season", "Team"],
      value: "Create operations",
    },
    {
      label: "Read",
      options: ["Game", "Player", "Standings", "Team"],
      value: "Read operations",
    },
    {
      label: "Update",
      options: ["Game", "Player", "Arena", "Team"],
      value: "Update operations",
    },
    {
      label: "Delete",
      options: ["Game", "Player", "Arena", "Team"],
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
          "xsmall",
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
        <Button primary label="Home" pad="small" href="/SeasonHome" />
        <Button secondary label="Login Page" pad="small" href="/"/>

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
