import React from "react";
import { DataTable, Grommet, Text, Box, Image } from "grommet";
import { getPlayerImageUrl } from "../../../API/EspnAPI/GetLogos";

export default function TeamRoster(props) {
  const players = props.resultSets[0].rowSet;

  // TODO : display all the columns that are in the data set
  const columns = [
    {
      property: "fullName",  
      header: "Full Name",
      render: (player) => (
        <Box direction="row" align="center">
          <Image
            src={getPlayerImageUrl(player.id)}
            alt={`${player.fullName}'s Headshot`}
            height="60px"
            width="80px"
            margin={{ right: "small" }}
          />
          <Text>{player.fullName}</Text>
        </Box>
      ),
    },
    { property: "position", header: "Position" },
    { property: "height", header: "Height" },
    { property: "weight", header: "Weight" },
    { property: "birthDate", header: "Birth Date" },
    { property: "age", header: "Age" },
    { property: "experience", header: "Experience" },
    { property: "college", header: "College" },
    { property: "Acquired", header: "Acquired via" },
  ];

  return (
    <Box
      align="center"
      elevation="large"
      pad="large"
      round="large"
    >
      <DataTable
        columns={columns}
        data={players.map((player) => ({
          id: player[14],
          fullName: player[3],
          position: player[7],
          height: player[8],
          weight: player[9],
          birthDate: player[10],
          age: player[11],
          experience: player[12],
          college: player[13],
          Acquired: player[15],
        }))}
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
