import React from "react";
import { Box, DataTable, Image, Text, Data, Toolbar, DataSort, grommet, Grommet } from "grommet";

export default function SeasonsStandings(props) {
  const dataarray = props.standings.children;
  const conference = dataarray[0];
  const standings = conference.standings.entries;
  const team = standings[0].team;
  const stats = standings[0].stats;



  // Define columns
  const columns = [
    { property: "team", header: "Team", primary: true },
    ...stats.map(stat => ({ property: stat.name, header: stat.shortDisplayName, })),
  ];

  // Extract data for the first team
  const data = [{
    team: team.displayName,
    ...stats.reduce((acc, stat) => {
      acc[stat.name] = stat.displayValue;
      return acc;
    }, {}),
  }];

  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="large" margin="medium" alignSelf="start">
        {props.standings.name} standings
      </Text>

      {/* Additional information */}
      <Text size="medium" margin="medium" alignSelf="start">
        {conference.name} - {conference.standings.displayname}
      </Text>

      {/* Display Team and Stats in DataTable */}
      <Grommet theme={grommet}>
        <Box align="center" elevation="large" round="medium">
          {/* ... (previous code) */}

          {/* Display Team and Stats in DataTable */}
          <DataTable
            columns={columns}
            data={data}
            pad={{ horizontal: "small", vertical: "xsmall" }}
            background={{
              header: { color: "white", opacity: "strong" },
              body: ["light-2", "white"],
              footer: { color: "dark-1", opacity: "strong" },
            }}
            border={{ body: "bottom" }}
          />
        </Box>
      </Grommet>    </Box>
  );
}


