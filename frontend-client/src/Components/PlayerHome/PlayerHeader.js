import React from 'react';
import { Box, Image} from 'grommet';
import { fetchPlayerData } from '../../API/MySQL/PlayerAPI';
import { getPlayerImageUrl
 } from '../../API/EspnAPI/GetLogos';

export default function PlayerHeader(playerId) {
  const [playerData, setPlayerData] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (playerId) => {
    const playerData = await fetchPlayerData(playerId);
    setPlayerData(playerData);
  };



  return (
      <div>
          <Box>
        <Image
          src= {getPlayerImageUrl(playerId)}
        />
          
              </Box>
    </div>
  )
}
