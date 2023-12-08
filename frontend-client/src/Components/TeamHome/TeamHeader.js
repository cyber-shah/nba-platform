import React, { useEffect } from "react";
import { getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";
import { Image, Grid, Box, Text, Tabs, Tab, Select } from "grommet";
import { getTeamDetails } from "../../API/MySQL/TeamAPI";

/**
 * @param {*} props TeamID: the team id of the team that teamHome wants to display
 * selectedTab, * onActive, * setTab
 * @returns a header component that contains the team logo, team name, and tabs
 */
export default function TeamHeader(props) {
  const [teamDetails, setTeamDetails] = React.useState(null);
  console.log(props.team_id);

  async function fetchData() {
    try {
      const teamDetails = await getTeamDetails(props.season, props.team_id);
      setTeamDetails(teamDetails[0][0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // TODO: check if this is correct way to do it
  if (teamDetails !== null) {
    console.log(teamDetails);
    const teamID = teamDetails.team_id;
    const teamName = teamDetails.full_name;

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
              {/* <Tab title="Home"></Tab> */}
              <Tab title="Roster"></Tab>
              <Tab title="Stats"></Tab>
              {/* <Tab title="Schedule"></Tab> */}
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
}
