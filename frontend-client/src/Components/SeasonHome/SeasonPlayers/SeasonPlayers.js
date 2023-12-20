import React from "react";
import { useState, useEffect } from "react";
import { getSeasonPlayers } from "../../../API/MySQL/LeagueAPI";
import SeasonPTable from "./SeasonPTable";
import { Box, Text } from "grommet";
import { DataTable } from "grommet";
import { generateColumns } from "../../GlobalFunctions";

export default function SeasonPlayers(props) {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getSeasonPlayers(props.season);
    setPlayers(result[0]);
    console.log(players);
  };

  return (
    <div>
      <Box margin="auto" elevation="xlarge" round="large" align="center" width="50%">
        <Text size="xxlarge" margin="medium" alignSelf="start" >
          Active Players
        </Text>

        {players !== null && players.length > 1 && (
          <DataTable
            columns={generateColumns(players)}
            data={players}
            pad={{ horizontal: "medium", vertical: "xsmall" }}
            background={{
              header: { color: "white", opacity: "strong" },
              body: ["light-1", "white"],
              footer: { color: "dark-1", opacity: "strong" },
            }}
            border={{ body: "bottom" }}
          />
        )}
      </Box>
    </div>
  );
}
