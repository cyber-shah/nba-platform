import React from "react";
import { Tab, Tabs, Box, Select } from "grommet";

export default function SeasonHeader(props) {
  return (
    <div>
      <Box
        style={{ maxWidth: "500px", margin: "auto" }}
        align="start"
        pad="small"
        justify="between"
      >
        <Tabs
          flex="true"
          activeIndex={props.selectedTab}
          onActive={props.onActive}
          alignControls="start"
          margin="small"
        >
          <Tab title="Game" border="black"></Tab>
          <Tab title="Teams"></Tab>
          <Tab title="Standings">
          </Tab>
        </Tabs>

        <Box direction="row" align="center" gap="small">
          <span>Select Year:</span>
          <Select
            width="xsmall"
            options={["2023", "2022", "2021"]}
            value={props.seasonYear}
            onChange={({ seasonYear }) => props.setYear(seasonYear)}
          />
        </Box>
      </Box>
    </div>
  );
}
