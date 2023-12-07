import React from "react";
import { Box, Select, Grid, Text } from "grommet";

const CRUDOperation = ({ label, options, value, onChange }) => (
  <>
    <Text textAlign="end" size="medium" color="brand" alignSelf="center">
      {label}
    </Text>
    <Select options={options} value={value} onChange={onChange} />
  </>
);

export default function CRUD() {
  const operations = [
    { label: "Create", options: ["new game", "new player", "new arena", "new team"], value: "Create operations" },
    { label: "Read", options: ["game", "player", "standings", "team"], value: "Read operations" },
    { label: "Update", options: ["game", "player", "arena", "team"], value: "Update operations" },
    { label: "Delete", options: ["game", "player", "arena", "team"], value: "Delete operations" },
  ];

  return (
    <Box pad="medium" elevation="large" round="small" align="center">
      <Grid columns={["xsmall", "small", "xsmall", "small", "xsmall", "small", "xsmall", "small"]} gap="small">
        {operations.map((operation, index) => (
          <CRUDOperation key={index} {...operation} onChange={() => {}} />
        ))}
      </Grid>
    </Box>
  );
}
