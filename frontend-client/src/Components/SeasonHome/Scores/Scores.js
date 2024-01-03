import ScoreBlock from './ScoreBlock.js';
import { Paper, Divider } from '@mantine/core';
import DateSelector from './DateSelector.js';


export default function Scores(props) {

  return (
    <Paper shadow="xl" radius="xl" p={10}>

      <DateSelector props={props} />
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
