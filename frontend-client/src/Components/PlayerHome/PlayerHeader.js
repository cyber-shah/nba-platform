import React from "react";
import { Box, Image, Grid, Text } from "grommet";
import { fetchPlayerData } from "../../API/MySQL/PlayerAPI";
import { getPlayerImageUrl, getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";

const result = {
  playerID: 977,
  firstName: "KOBE",
  lastName: "BRYANT",
  jersey: "24",
  TeamID: 1610612747,
};

export default function PlayerHeader(props) {
  const [playerData, setPlayerData] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (playerId) => {
    // const result = await fetchPlayerData(playerId);
    setPlayerData(result);
  };

  return (
    <Box elevation="large" justify="end" align="start" >
      {/* Main grid */}
      <Grid columns={["1/2", "1/2"]}>

        {/* First component in the main grid */}
        <Grid columns={["1/2", "1/2"]}>
          {playerData !== null && (
            <>
              <Box>
                <Image 
                  src={getPlayerImageUrl(props.playerId)} />
                
              </Box>

              <Box pad="xsmall" justify="center">
                <Text size="xxlarge" margin="none">
                  {playerData.firstName}
                </Text>
                <Text size="xxlarge" margin="none" weight="bold">
                  {playerData.lastName}
                </Text>
                <Text level="1" margin="none">
                  #{playerData.jersey}
                </Text>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
