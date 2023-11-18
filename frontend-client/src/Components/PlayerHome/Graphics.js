import React from "react";
import { Grid, Box, Image } from "grommet";
import { getPlayerImageUrl, getTeamLogoUrl } from "../GetLogos";
import { Heading } from "grommet";

export default function Graphics(props) {
  const styles = {
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

  const data = {
    playerID: 977,
    firstName: "KOBE",
    lastName: "BRYANT",
    jersey: "24",
    TeamID: 1610612737,
    TeamName: "Atlanta Hawks",
  };

  return (
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

      <Box pad="medium" flex="grow" align="center" justify="center">
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
          <Box pad="xsmall">
            <Heading level="2" margin="none">
              {data.firstName}
            </Heading>
            <Heading level="2" margin="none">
              {data.lastName}
            </Heading>
            <Heading level="1">#{data.jersey} </Heading>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}

//   const styles = {
//     container: {
//           display: "flex",
//         padding: "medium",
//     },
//     playerColumn: {
//       flex: 1, // Take up 50% of the width
//       alignItems: "center",
//     },

//     header: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   };
// {/* Player Column */}
//       <div style={styles.playerColumn}>

//       </div>

//       {/* Information Column */}
//       <Box style={styles.playerColumn}>
//         <div>

//         </div>

//         <div style={styles.header}>

//         </div>
//       </Box>
