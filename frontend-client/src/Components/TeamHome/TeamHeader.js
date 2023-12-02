import React from "react";
import { getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";
import { Image, Grid, Box, Text, Tabs, Tab, Button } from "grommet";

export default function TeamHeader(props) {
  const teamID = props.team.resultSets[0].rowSet[0][0];
  const teamName = props.team.resultSets[0].rowSet[0][4];

  return (
    <Box
      style={{ maxWidth: "500px", margin: "auto" }}
      align="start"
      pad="small"
      justify="between"
    >
      <Grid columns={["150px", "flex"]} gap="small">
        <Box>
          <Image src={getTeamLogoUrl(teamID)} width="150" height="150" />
        </Box>
        <Box justify="center">
          <Text size="xlarge">{teamName}</Text>
          
        </Box>
      </Grid>

      

      <Tabs
        activeIndex={props.selectedTab}
        onActive={props.onActive}
        alignControls="start"
        margin="small"
      >
        <Tab title="Home"></Tab>
        <Tab title="Roster"></Tab>
        <Tab title="Stats"></Tab>
        <Tab title="Schedule"></Tab>
      </Tabs>
    </Box>
  );
}
