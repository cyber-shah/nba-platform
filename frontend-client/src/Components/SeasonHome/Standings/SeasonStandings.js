import React from "react";
import { Box, DataTable, Text, grommet, Grommet } from "grommet";



const generateColumns = (props) => {
  const conferences = props.standings.children;

  // Define arrays to store columns and data for each conference
  const columnsByConference = {};
  const dataByConference = {};

  // Iterate through conferences
  conferences.forEach((conference) => {
    const conferenceName = conference.name;
    const entries = conference.standings.entries;

    // Define columns for the current conference
    const columns = [
      { property: "team", header: "Team", primary: true },
      ...entries[0].stats.map((stat) => ({
        // just use the first team's stats to define columns
        property: stat.name,
        header: stat.shortDisplayName,
      })),
    ];

    // Initialize data array for the current conference
    const data = [];

    // Iterate through teams in the current conference
    entries.forEach((teamStanding) => {
      const team = teamStanding.team;
      const stats = teamStanding.stats;

      // Extract data for the current team
      const teamData = {
        team: team.displayName,
        ...stats.reduce((acc, stat) => {
          acc[stat.name] = stat.displayValue;
          return acc;
        }, {}),
      };

      // Add the current team's data to the data array
      data.push(teamData);
    });

    // Store columns and data in the respective arrays
    columnsByConference[conferenceName] = columns;
    dataByConference[conferenceName] = data;
  });


  return { columnsByConference, dataByConference };
};


export default function SeasonsStandings(props) {
  const { columnsByConference, dataByConference } = generateColumns(props);

  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="large" margin="medium" alignSelf="start">
        {props.standings.name} standings
      </Text>

      <Box align="center" round="medium">
        {/*  */}
        {Object.keys(columnsByConference).map((conferenceName) => (
          <Box key={conferenceName} margin={{ bottom: "medium" }} >
            <Text size="large">{conferenceName} standings</Text>

            <DataTable
              columns={columnsByConference[conferenceName]}
              data={dataByConference[conferenceName]}
            />

          </Box>
        ))}
      </Box>
    </Box >
  );
}


