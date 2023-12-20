import React from "react";
import { Box, DataTable, Image, Text } from "grommet";
import { generateColumns } from "../../../EspnAPI/GlobalFunctions";

export default function SeasonsStandings(props) {


  const dataArray = props.standings.children;
  const first = dataArray[0];

  const entries = first.entries;
  const stats = entries[1];
  const columns = generateColumns(stats);
  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="large" margin="medium" alignSelf="start">
        {props.standings.name} Standings
      </Text>



      { /** MAP This later on */}
      <Text size="medium" margin="medium" alignSelf="start">
        {first.name} - {first.standings.displayName}
      </Text>


      <DataTable
        columns={columns}
        data={stats}
        pad={{ horizontal: "medium", vertical: "xsmall" }}
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
