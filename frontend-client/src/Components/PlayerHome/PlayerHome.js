import React from "react";
import Graphics from "./Graphics";
import BasicData from "./Cards/Cards";
import { generateColumns } from "../GlobalFunctions";
import { useParams } from "react-router-dom";
import { DataTable } from "grommet";
import PlayerHeader from "./PlayerHeader";

export default function PlayerHome(props) {
  const { playerId } = useParams();

  const [playerData, setPlayerData] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (playerId) => {
    
  };

  console.log(playerId);

  props = "../../../../jsons/fromNBA/career_stats.json";
  const style = {
    main: {
      maxWidth: "1200px",
      margin: "auto",
    },
  };
  return (
    <div style={style.main}>
      <div>
        <Graphics data={props} />
        <PlayerHeader playerId={playerId} />
      </div>
    </div>
  );
}
