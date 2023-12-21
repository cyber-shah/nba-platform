import React from "react";
import { Box, DataTable, Text, grommet, Grommet } from "grommet";



export default function SeasonsStandings(props) {

  // Assuming props.standings.children is an array of conferences
  const conferences = props.standings.children;

  // Define arrays to store columns and data for each conference
  const columnsByConference = {};
  const dataByConference = {};

  // Iterate through conferences
  conferences.forEach((conference) => {
    const conferenceName = conference.name;
    const standings = conference.standings.entries;

    // Define columns for the current conference
    const columns = [
      { property: "team", header: "Team", primary: true },
      ...standings[0].stats.map((stat) => ({
        property: stat.name,
        header: stat.shortDisplayName,
      })),
    ];

    // Initialize data array for the current conference
    const data = [];

    // Iterate through teams in the current conference
    standings.forEach((teamStanding) => {
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


  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="large" margin="medium" alignSelf="start">
        {props.standings.name} standings
      </Text>

      {/* Additional information */}
      <Text size="medium" margin="medium" alignSelf="start">
      </Text>

      {/* Display Team and Stats in DataTable */}
      {/* ... (previous code) */}

      {/* Display Team and Stats in DataTable */}

      <Box align="center" round="medium">
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


