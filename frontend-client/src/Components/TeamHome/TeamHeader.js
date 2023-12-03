import React from "react";
import { getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";
import { Image, Grid, Box, Text, Tabs, Tab, Select } from "grommet";

export default function TeamHeader(props) {
  const teamID = props.team.resultSets[0].rowSet[0][0];
  const teamName = props.team.resultSets[0].rowSet[0][4];

  return (
    <Box elevation="large" justify="end" align="start">
      <Box
        style={{ maxWidth: "1500px", margin: "auto" }}
        align="center"
        pad="small"
        justify="between"
      >
        <Grid columns={["150px", "flex"]} gap="small">
          {/* First half IMAGE */}
          <Box>
            <Image src={getTeamLogoUrl(teamID)} width="150" height="150" />
          </Box>
          {/* Second half team name */}
          <Box justify="center">
            <Text size="xlarge">{teamName}</Text>
          </Box>
        </Grid>

        {/* Tabs */}
        <Box direction="row" justify="center" gap="small">
          <Tabs
            activeIndex={props.selectedTab}
            onActive={props.onActive}
            alignControls="center"
            margin="auto"
          >
            <Tab title="Home"></Tab>
            <Tab title="Roster"></Tab>
            <Tab title="Stats"></Tab>
            <Tab title="Schedule"></Tab>
          </Tabs>

          {/* push this to the extreme right but horizontally in the same row as tabs */}
          {/* <Box direction="row" justify="end" gap="small">
          <Select
            size="xsmall"
            options={["2023", "2022", "2021"]}
            value={props.seasonYear}
            onChange={({ seasonYear }) => props.setYear(seasonYear)}
          />
      </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
