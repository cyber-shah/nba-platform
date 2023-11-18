import React from "react";
import { getTeamLogoUrl, getPlayerImageUrl } from "../GetLogos";
import { Image } from "grommet";

export default function Graphics(props) {
  const styles = {
    container: {
      display: "flex",
    },
    playerImage: {
      width: "50%", // Adjust the width as needed
      maxWidth: "600px",
      height: "auto", // Maintain aspect ratio
    },
    teamLogo: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "20%", // Adjust the width as needed
      maxWidth: "200px",
      height: "auto", // Maintain aspect ratio
    },
  };

  // data about the player, must all be derived
  const data = {
    playerID: 977,
    playerName: "Kobe Bryant",
    jersey: "24",
    TeamID: 1610612737,
    TeamName: "Atlanta Hawks",
  };

  return (
      <div>
          
      <div style={styles.container}>
        <Image
          style={styles.playerImage}
          fit="cover"
          src={getPlayerImageUrl(data.playerID)}
        />
        <Image
          style={styles.teamLogo}
          fit="cover"
          src={getTeamLogoUrl(data.TeamID)}
        />
          </div>
          
          <div style= {styles.Info}>
              
      </div>
    </div>
  );
}
