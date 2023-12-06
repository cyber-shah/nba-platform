import React from "react";
import { Box, DataTable, Image, Text } from "grommet";
import { useState, useEffect } from "react";
import { getSeasonStandings } from "../../../API/MySQL/LeagueAPI";
import { generateColumns } from "../../GlobalFunctions";

export default function SeasonsStandings(props) {
  // use state to store and set the standings data
  const [standingsData, setStandingsData] = useState(null);

  // use effect to fetch data once
  useEffect(() => {
    fetchData();
  }, []);

  // fetch data from the API
  const fetchData = async () => {
    const result = await getSeasonStandings(props.seasonYear);
    setStandingsData(result);
  };

  return (
    <Box align="center" elevation="large" round="medium">
      <Text size="xxlarge" margin="medium" alignSelf="start">
        Season Standings
      </Text>


       { standingsData !== null &&
        <DataTable
          columns={generateColumns(standingsData)}
          data={standingsData}
          pad={{ horizontal: "medium", vertical: "xsmall" }}
          background={{
            header: { color: "white", opacity: "strong" },
            body: ["light-1", "white"],
            footer: { color: "dark-1", opacity: "strong" },
          }}
          border={{ body: "bottom" }}
      />
        }
    </Box>
  );
}
