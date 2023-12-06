import React from "react";
import { Box, DataTable, Image, Text } from "grommet";
import { useState, useEffect } from "react";
import { getSeasonStandings } from "../../../API/MySQL/LeagueAPI";

export default function SeasonsStandings(props) {
  // use state to store and set the standings data
  const [standingsdata, setStandingsData] = useState(null);

  // use effect to fetch data once
  useEffect(() => {
    fetchData();
  }, []);
    
  // fetch data from the API
  const fetchData = async () => {
    const result = await getSeasonStandings(props.seasonYear);
    setStandingsData(result);
  };
  
  // TODO: get this from MYSQL as well
  const columns = [
    { property: "rank", header: "Rank" },
    { property: "team", header: "Team"},
    { property: "wins", header: "Wins" },
    { property: "losses", header: "Losses" },
    { property: "winPercentage", header: "Win %" },
    { property: "gamesBehind", header: "Games Behind" },
  ];


  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="xxlarge" margin="medium" alignSelf="start">
          Season Standings
      </Text>
      
      <DataTable
          columns={columns}
          data={standingsdata}
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
