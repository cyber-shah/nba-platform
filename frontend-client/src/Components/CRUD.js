import React from "react";
import { Box, Select, Grid, Text } from "grommet";

export default function CRUD() {
  return (
    <Box pad="medium" elevation="large" round="small">
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
        <Text textAlign="end" size="medium" color="brand" alignSelf="center">
          Create
        </Text>

        <Select
          options={[
            "Create new game",
            "Create new player",
            "Create new season",
            "Create new team",
          ]}
          value={"Create operations"}
          onChange={() => {}}
        />

        <Text textAlign="end" size="medium" color="brand" alignSelf="center">
          Read
        </Text>

        <Select
          options={[
            "Update game",
            "Update player",
            "Update season",
            "Update team",
          ]}
          value={"Update operations"}
          onChange={() => {}}
        />

        <Text textAlign="end" size="medium" color="brand" alignSelf="center">
          Update
        </Text>
        <Select
          options={[
            "Delete game",
            "Delete player",
            "Delete season",
            "Delete team",
          ]}
          value={"Delete operations"}
          onChange={() => {}}
        />

        <Text textAlign="end" size="medium" color="brand" alignSelf="center">
          Delete
        </Text>
        <Select
          options={["Read game", "Read player", "Read season", "Read team"]}
          value={"Read operations"}
          onChange={() => {}}
        />
      </Grid>
    </Box>
  );
}
