import React from "react";
import { Box, Select, Grid, Text } from "grommet";

export default function CRUD() {
  return (
    <Box pad="medium" elevation="large" round="small">
      <Grid columns={["small", "small", "small", "small", "small"]} gap="small">
        <Text size="large" color="brand">
          CRUD Operations
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

        <Select
          options={["Read game", "Read player", "Read season", "Read team"]}
          value={"Read operations"}
          onChange={() => {}}
        />
      </Grid>
    </Box>
  );
}
