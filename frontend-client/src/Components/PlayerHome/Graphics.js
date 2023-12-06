import React from "react";
import { Grid, Box, Image, Heading, Text } from "grommet";
import { getPlayerImageUrl, getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";

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

  console.log(props.playerId);
  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      {/* nested grids starts the main grid */}
      <Grid
        columns={["1/2", "1/2"]}
        gap="xsmall"
        extend={{ className: styles.main }}
      >
        {/* first component in the main grid -- 1 */}
        <Box pad="medium">
          <Image
            style={styles.image}
            fit="contain"
            src={getPlayerImageUrl(props.playerId)}
          />
        </Box>

        {/* second component which is a grid -- 2 */}
        <Box pad="medium" justify="center">
          <Grid
            columns={["1/2", "1/2"]}
            gap="xsmall"
            extend={{ className: styles.main }}
          >
            {/* 2.1 --  */}
            <Box pad="xsmall">
              <Image
                style={styles.info}
                fit="contain"
                src={getTeamLogoUrl(data.TeamID)}
              />
            </Box>

            {/* 2.2 -- */}
            <Box pad="xsmall" justify="center">
              <Text size="xxlarge" margin="none"  >
                {data.firstName}
              </Text>
              <Text size="xxlarge" margin="none" weight="bold">
                {data.lastName}
              </Text>
              <Text level="1" margin="none">
                #{data.jersey}
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
