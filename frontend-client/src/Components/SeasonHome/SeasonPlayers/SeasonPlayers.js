import React from 'react';
import { useState, useEffect } from 'react';
import { getSeasonPlayers } from '../../../API/MySQL/LeagueAPI';
import SeasonPTable from './SeasonPTable';
import { Box, Text } from 'grommet';

export default function SeasonPlayers() {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getSeasonPlayers();
    setPlayers(result.resultSets);
  }


  return (
    <div>
      <Box elevation="xlarge" round="large"  align="center">
        <Text size="xxlarge" margin="medium" alignSelf='start'>
          Season Leaders
        </Text>

      {players !== null && players.map((season, index) => (
        <SeasonPTable
          margin="medium"
            key={index}
            headers={season.headers}
            data={season.rowSet}
          />
        ))} 
          </Box>
    </div>
  )
}
