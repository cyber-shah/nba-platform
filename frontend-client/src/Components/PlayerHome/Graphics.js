import React from "react";
import { getTeamLogoUrl, getPlayerImageUrl } from "../GetLogos";
import { Image, Box, Heading } from "grommet";

export default function Graphics(props) {
  const styles = {
    container: {
          display: "flex",
        padding: "medium",
    },
    playerColumn: {
      flex: 1, // Take up 50% of the width
      alignItems: "center",
    },
    playerImage: {
      width: "100%",
      height: "auto",
    },
    teamLogo: {
      width: "100%",
      maxWidth: "200px",
      height: "auto",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const data = {
    playerID: 977,
    firstName: "KOBE",
    lastName: "BRYANT",
    jersey: "24",
    TeamID: 1610612737,
    TeamName: "Atlanta Hawks",
  };

  return (
    <Box style={styles.container} pad="medium">
      {/* Player Column */}
      <div style={styles.playerColumn}>
        <Image
          style={styles.playerImage}
          fit="cover"
          src={getPlayerImageUrl(data.playerID)}
        />
      </div>

      {/* Information Column */}
      <Box style={styles.playerColumn}>
        <div>
          <Image
            style={styles.teamLogo}
            fit="cover"
            src={getTeamLogoUrl(data.TeamID)}
          />
        </div>

        <div style={styles.header}>
          <Heading level="1" margin="none">
            {data.firstName}
          </Heading>
          <Heading level="1" margin="none">
            {data.lastName}
          </Heading>
          <Heading level="1">#{data.jersey} </Heading>
        </div>
      </Box>
    </Box>
  );
}
