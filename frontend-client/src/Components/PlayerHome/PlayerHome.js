import React from "react";
import { Image } from "grommet";
import { getTeamLogoUrl, getPlayerImageUrl } from "../GetLogos";
import Graphics from "./Graphics";
import BasicData from "./BasicData";

export default function PlayerHome(props) {
  const style = {
    main: {
      maxWidth: "1200px",
    }
  }
  return (
    <div style={style.main}>
      {/* // pass all the props in here */}
      <Graphics data = {props} />
      <BasicData basicData={props}  />
    </div>
    
  );
}
