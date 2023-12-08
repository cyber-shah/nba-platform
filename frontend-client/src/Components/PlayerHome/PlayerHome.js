import React from "react";
import Graphics from "./Cards/Graphics";
import { generateColumns } from "../GlobalFunctions";
import { useParams } from "react-router-dom";
import { DataTable, Box } from "grommet";
import PlayerHeader from "./PlayerHeader";
import { get_player_details } from "../../API/MySQL/PlayerAPI";

export default function PlayerHome(props) {
  const { player_id } = useParams();
  console.log(player_id);

  // NOTE: single source to edit the season
  const season = "2023-24";

  return (
    <div >
      <PlayerHeader season={season} player_id={player_id} />

    </div>
  );
}
