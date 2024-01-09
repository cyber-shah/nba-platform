import ScoreBlock from './ScoreBlock.js';
import { Paper, Divider, Box } from '@mantine/core';
import DateSelector from './DateSelector.js';
import { useState, useEffect } from 'react';
import { GETScores } from '../../../EspnAPI/SeasonData/SeasonAPI.js';


export default function Scores(props) {
  const [selectedDate, setSelectedDate] = useState("20231217");
  const [scores, setScores] = useState(null);

  useEffect(() => {
    fetchData();
    console.log(scores);
  }, [selectedDate]);

  const fetchData = async () => {
    const result = await GETScores({ date: selectedDate });
    setScores(result.LeagueScoreboard);
  };

  return (
    <Paper shadow="xl" radius="xl" p={10}>

      <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {
        scores !== undefined && scores !== null && (
          scores.events.map((event, index) => {
            return (
              <Box key={index}>
                < ScoreBlock key={index + 1} event={event} />
                <Divider my="md" />
              </Box>
            );
          })
        )
      }

    </Paper>
  );

}
