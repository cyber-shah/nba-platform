import React from "react";
import Graphics from "./Graphics";
import BasicData from "./BasicData";
import { DataTableExample } from "../DataTableExample";
import { useParams } from "react-router-dom";

export default function PlayerHome(props) {
  const { playerId } = useParams();
  console.log(playerId);

  props = "../../jsons/career_stats.json";
  const style = {
    main: {
      maxWidth: "1200px",
      margin: "auto",
    }
  }
  return (
    <div style={style.main}>
      {/* // pass all the props in here */}
      <Graphics data = {props} />
      <BasicData basicData={props} />
      <DataTableExample/>
    </div>
    
  );
}
