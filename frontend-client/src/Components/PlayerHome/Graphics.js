import React from "react";
import { Grid, Box, Image } from "grommet";
import { getPlayerImageUrl, getTeamLogoUrl } from "../GetLogos";
import { Heading } from "grommet";

const data = {
  playerID: 977,
  firstName: "KOBE",
  lastName: "BRYANT",
  jersey: "24",
  TeamID: 1610612747,
};

export default function Graphics(props) {
  const styles = {
    container: {
      position: "relative",
      },
      
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${getTeamLogoUrl(data.TeamID)})`,
      backgroundSize: "contain",
      opacity: 0.1,
      zIndex: -1,
    },
    main: {
      maxHeight: "30vh",
    },
    image: {
      width: "100%",
      maxHeight: "40vh",
      height: "auto",
    },
    info: {
      width: "100%",
      height: "auto",
      maxHeight: "20vh",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}></div>

      <Grid
        columns={["1/2", "1/2"]}
        gap="xsmall"
        extend={{ className: styles.main }}
      >
        <Box pad="medium">
          <Image
            style={styles.image}
            fit="contain"
            src={getPlayerImageUrl(data.playerID)}
          />
        </Box>

        <Box pad="medium" justify="center">
          <Grid
            columns={["1/2", "1/2"]}
            gap="xsmall"
            extend={{ className: styles.main }}
          >
            <Box pad="xsmall">
              <Image
                style={styles.info}
                fit="contain"
                src={getTeamLogoUrl(data.TeamID)}
              />
            </Box>
            <Box pad="xsmall" justify="center">
              <Heading level="2" margin="none">
                {data.firstName}
              </Heading>
              <Heading level="2" margin="none">
                {data.lastName}
              </Heading>
              <Heading level="1" margin="none">
                #{data.jersey}
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
