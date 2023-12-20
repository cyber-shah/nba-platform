import React from "react";
import { Box, DataTable, Image, Text } from "grommet";
import { generateColumns } from "../../../EspnAPI/GlobalFunctions";

export default function SeasonsStandings(props) {


  const dataArray = props.standings.children;
  const conference = dataArray[0];

  const entries = conference.entries;
  // const team = entries.team;
  // const stats = entries.stats[1];
  //  const columns = generateColumns(stats);
  console.log(conference.standings.entries);
  const standings = conference.standings.entries;
  const team = standings[0].team;
  const stats = standings[0].stats;

  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="large" margin="medium" alignSelf="start">
        {props.standings.name} Standings
      </Text>



      { /** MAP This later on */}
      <Text size="medium" margin="medium" alignSelf="start">
        {conference.name} - {conference.standings.displayName}
      </Text>


      <DataTable
        columns={generateColumns(stats)}
        data={stats}
        size="medium"
        pad={{ horizontal: "small", vertical: "xsmall" }}
        background={{
          header: { color: "white", opacity: "strong" },
          body: ["light-1", "white"],
          footer: { color: "dark-1", opacity: "strong" },
        }}
        border={{ body: "bottom" }}
      />
    </Box>
  );
}
