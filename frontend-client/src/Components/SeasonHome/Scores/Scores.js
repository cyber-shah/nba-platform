import ScoreBlock from './ScoreBlock.js';
import { Paper, Divider } from '@mantine/core';


export default function Scores(props) {

  return (
    <Paper shadow="xl" radius="xl" p={10}>
      {
        props.scores.events.map((event, index) => {
          return (
            <>
              < ScoreBlock key={index + 1} event={event} />
              <Divider my="md" />
            </>
          );
        })
      }

    </Paper>
  );

}
