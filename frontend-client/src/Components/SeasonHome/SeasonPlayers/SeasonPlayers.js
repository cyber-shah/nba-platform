import React from "react";
import { useState, useEffect } from "react";
import { getSeasonPlayers } from "../../../API/MySQL/LeagueAPI";
import SeasonPTable from "./SeasonPTable";
import { Box, Text } from "grommet";

export default function SeasonPlayers(props) {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getSeasonPlayers(props.season);
    setPlayers(result);
  };

  return (
    <div>
      <Box elevation="xlarge" round="large" align="center">
        <Text size="xxlarge" margin="medium" alignSelf="start">
          Season Leaders
        </Text>

        {players !== null && players.length === 0 && 
          players.map((table, index) => (
            <SeasonPTable
              key={index}
              headers={table.headers}
              data={table.rowSet}
            />
          ))}
      </Box>
    </div>
  );
}
