import ScoreBlock from './ScoreBlock.js';

export default function Scores(props) {

  return (
    <ScoreBlock event={props.scores.events[0]} />
  );

}
