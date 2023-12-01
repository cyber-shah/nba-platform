import React from 'react';
import { getTeamLogoUrl } from '../../API/EspnAPI/GetLogos';
import { Image, Box } from 'grommet';


export default function TeamHeader(props) {
  return (
      <div>
          <Box>
                        <Image src= {getTeamLogoUrl(props.team.id)} width="150" height="150" />

          </Box>
    </div>
  )
}
