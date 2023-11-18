import React from "react";
import { getTeamLogoUrl, getPlayerImageUrl } from "../GetLogos";
import { Image, Box, Heading } from "grommet";

export default function Graphics(props) {
  const styles = {
    container: {
      display: "flex",
    },
    playerColumn: {
      flex: 1, // Take up 50% of the width
    },
    playerImage: {
      width: "100%",
      height: "auto",
    },
    teamLogo: {
      position: "absolute",
      alignItems: "center",
      width: "20%",
      maxWidth: "200px",
      height: "auto",
    },
    infoColumn: {
      flex: 1,
      padding: "20px",
      alignItems: "end",
    },
  };

  const data = {
    playerID: 977,
    playerName: "Kobe Bryant",
    jersey: "24",
    TeamID: 1610612737,
    TeamName: "Atlanta Hawks",
  };

  return (
    <div style={styles.container}>
      {/* Player Column */}
      <div style={styles.playerColumn}>
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

      {/* Information Column */}
      <Box style={styles.infoColumn}>
        <Heading level="1">{data.playerName}</Heading>
        <p>
          Jersey: {data.jersey} | Team: {data.TeamName}
        </p>
        <p></p>
        {/* Add more information as needed */}
      </Box>
    </div>
  );
}
