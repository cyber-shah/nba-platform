import React from "react";
import { Box, DataTable, Image, Text, Data, Toolbar, DataSort, grommet, Grommet } from "grommet";
import { generateColumns } from "../../../EspnAPI/GlobalFunctions";

export default function SeasonsStandings(props) {
  const dataarray = props.standings.children;
  const conference = dataarray[0];
  const standings = conference.standings.entries;
  const team = standings[0].team;
  const stats = standings[0].stats;

  // Extract team info
  const teamDisplay = team.displayName;
  const teamLogo = team.logos[0].href;

  // Define columns
  const columns = [
    { property: 'teamName', header: 'Team' }, // You can customize this header
    ...stats.map(stat => ({ property: stat.name, header: stat.shortDisplayName })),
  ];

  // Extract data for the first team
  const data = [{
    teamName: team.displayName,
    ...stats.reduce((acc, stat) => {
      acc[stat.name] = stat.value;
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
            size="medium"
            pad={{ horizontal: "small", vertical: "xsmall" }}
            background={{
              header: { color: "white", opacity: "strong" },
              body: ["light-1", "white"],
              footer: { color: "dark-1", opacity: "strong" },
            }}
            border={{ body: "bottom" }}
            theme={{
              dataTable: {
                header: {
                  // Customize header text color
                  font: { weight: "bold" },
                  extend: () => `
                  color: black;
                `,
                },
                primary: {
                  // Customize primary (data) text color
                  font: { weight: "normal" },
                  extend: () => `
                  color: black;
                `,
                },
              },
            }}
          />
        </Box>
      </Grommet>    </Box>
  );
}


