import React from "react";
import { Box, Grid } from "grommet";

// DataBox component representing an attribute box
const DataBox = ({ attribute, value }) => (
  <Box
    align="center"
    justify="center"
    background="light-2"
    round="small"
    pad="medium"
  >
    <strong>{attribute}</strong>
    <div>{value}</div>
  </Box>
);

// BasicData component containing a grid of DataBoxes
export default function BasicData(props) {
  const columns = "small";
  const rows = "xsmall";
  const gap = "small";

  // Sample data
  const data = [
    { attribute: "PPG", value: 25.5 },
    { attribute: "APG", value: 5.8 },
    { attribute: "RPG", value: 8.2 },
    { attribute: "Age", value: 28 },
    { attribute: "PPG", value: 25.5 },
    { attribute: "APG", value: 5.8 },
    { attribute: "RPG", value: 8.2 },
    { attribute: "Age", value: 28 },

    // Add more attributes as needed
  ];

  return (
    <Grid columns={columns} rows={rows} gap={gap}>
          {
              data.map((item) => (
                  <DataBox
                      attribute={item.attribute}
                      value={item.value}
                  />
      ))}
    </Grid>
  );
}
