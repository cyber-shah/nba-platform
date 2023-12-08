import React from "react";
import { Box, Image, Grid, Text } from "grommet";
import { get_player_details } from "../../API/MySQL/PlayerAPI";
import { getPlayerImageUrl, getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";

export default function PlayerHeader(props) {
  const [playerData, setPlayerData] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

    async function fetchData() {
    try {
      const result = await get_player_details(props.season, props.player_id);
      setPlayerData(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box elevation="large" >
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
                {/* <Text level="1" margin="none">
                  #{playerData.jersey}
                </Text> */}
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
