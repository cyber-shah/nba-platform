import React from "react";
import { Box, DataTable, Image, Text } from "grommet";
import { useState, useEffect } from "react";
import { getSeasonStandings } from "../../../API/MySQL/LeagueAPI";

export default function SeasonsStandings(props) {
  const [standingsdata, setStandingsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {
    const result = await getSeasonStandings();
    setStandingsData(result);
  }

  
  const columns = [
    { property: "rank", header: "Rank" },
    { property: "team", header: "Team", render: (datum) => <TeamCell datum={datum} /> },
    { property: "wins", header: "Wins" },
    { property: "losses", header: "Losses" },
    { property: "winPercentage", header: "Win %" },
    { property: "gamesBehind", header: "Games Behind" },
  ];

  const data = [
    { rank: 1, team: "Dallas Mavericks", wins: 20, losses: 5, winPercentage: "80%", gamesBehind: 0, logo: "url_to_lakers_logo"  },
    { rank: 2, team: "Los Angeles Lakers", wins: 18, losses: 7, winPercentage: "72%", gamesBehind: 2, logo: "url_to_lakers_logo" },
    // Add more rows as needed
  ];

  const TeamCell = ({ datum }) => (
    <Box direction="row" align="center">
      <Image src={datum.logo} alt={`${datum.team} Logo`} height="24px" width="24px" margin={{ right: "small" }} />
      <Text>{datum.team}</Text>
    </Box>
  );

  return (
    <Box align="center" pad="large" elevation="large" round="medium">
      <DataTable
        columns={columns}
        data={data}
        step={10}
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
