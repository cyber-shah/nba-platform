import React from "react";
import { useParams } from "react-router-dom";
import PlayerHeader from "./PlayerHeader";

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
