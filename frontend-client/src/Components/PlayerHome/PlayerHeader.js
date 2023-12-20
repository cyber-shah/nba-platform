import React from "react";
import { Box, Image, Grid, Text } from "grommet";
import { get_player_details } from "../../API/MySQL/PlayerAPI";
import { getPlayerImageUrl, getTeamLogoUrl } from "../../API/EspnAPI/GetLogos";

export default function PlayerHeader(props) {
  const [playerData, setPlayerData] = React.useState(null);
  console.log("From Player Header: " + props.player_id);
  console.log("From Player Header: " + props.season);
  React.useEffect(() => {
    fetchData();
  }, []);

    async function fetchData() {
    try {
      const result = await get_player_details(props.season, props.player_id);
      setPlayerData(result[0]);
      // console.log(result[0]);
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
                  src={getPlayerImageUrl(props.player_id)} />
                
              </Box>

              <Box pad="xsmall" justify="center">
                <Text size="xxlarge" margin="none">
                  {playerData.first_name}
                  
                </Text>
                <Text size="xxlarge" margin="none" weight="bold">
                  {playerData.last_name}
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
