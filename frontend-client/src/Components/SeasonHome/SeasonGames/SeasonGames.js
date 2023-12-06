import React from "react";
import { DataTable, Box, Text } from "grommet";
import { getSeasonGames } from "../../../API/MySQL/LeagueAPI";

export default function SeasonGames(props) {
  const [seasonGames, setSeasonGames] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getSeasonGames(props.seasonYear);
    setSeasonGames(result);
  };

  return (
    <div>
      <Box elevation="xlarge" round="large" align="center">
        <Text size="xxlarge" margin="medium" alignSelf="start">
          Season Games
        </Text>
      </Box>

      <DataTable
        margin="medium"
        columns={null}
        data={null}
        pad={{ horizontal: "medium", vertical: "xsmall" }}
        background={{
          header: { color: "white", opacity: "strong" },
          body: ["light-1", "white"],
          footer: { color: "dark-1", opacity: "strong" },
        }}
        border={{ body: "bottom" }}
      />
    </div>
  );
}
