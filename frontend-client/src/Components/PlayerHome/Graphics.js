import React from 'react';
import { getTeamLogoUrl, getPlayerImageUrl } from "../GetLogos";
import { Image } from "grommet";

export default function Graphics(props) {
  const playerID = 977;
  const TeamID = 1610612737;

  const styles = {
    container: {
    },
    playerImage: {
        width: '50%', // Adjust the width as needed
        maxWidth: "600px",
      height: 'auto', // Maintain aspect ratio
    },
    teamLogo: {
      position: 'absolute',
      top: 0,
      left: 0,
        width: '20%', // Adjust the width as needed
      maxWidth: "200px",
      height: 'auto', // Maintain aspect ratio
    },
  };

  return (
    <div style={styles.container}>
      <Image style={styles.playerImage} fit="cover" src={getPlayerImageUrl(playerID)} />
      <Image style={styles.teamLogo} fit="cover" src={getTeamLogoUrl(TeamID)} />
    </div>
  );
}
