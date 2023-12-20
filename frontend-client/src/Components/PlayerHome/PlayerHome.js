import React from "react";
import { useParams } from "react-router-dom";
import PlayerHeader from "./PlayerHeader";
import { Box, DataTable } from "grommet";
import { get_player_stats_per_year } from "../../API/MySQL/PlayerAPI";
import { generateColumns } from "../GlobalFunctions";

export default function PlayerHome(props) {
  // NOTE: single source to edit the season
  // NOTE: DATA table is directly added here instead of a separate component
  const season = "2023-24";

  const { player_id } = useParams();
  console.log(player_id);
  const [playerData, setPlayerData] = React.useState(null);
  console.log("From Player Home: " + player_id);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await get_player_stats_per_year(season);
      setPlayerData(result[0]);
      // console.log(result[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <PlayerHeader season={season} player_id={player_id} />
      <br />
      <Box
        align="center"
        elevation="large"
        pad="large"
        round="large"
        width="30%"
        margin="auto"
      >
        {playerData !== null && playerData !== undefined && (
          <DataTable
            columns={generateColumns(playerData)}
            data={playerData}
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
