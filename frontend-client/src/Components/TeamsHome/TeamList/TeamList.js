import React from 'react';
import { Box, Text } from 'grommet';

export default function TeamList(props) {
    const league = props.teamData.sports[0].leagues[0];
  return (
      <div>
          <Box>
              <Text size='large'>
                  {console.log(league)}  
                  {league.name} Teams <br />
                  {league.season.year} Year
              </Text>

          </Box>
    </div>
  )
}
