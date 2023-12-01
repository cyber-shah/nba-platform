import React from "react";
import { Box, Text } from "grommet";
import TListBox from "./TListBox";

export default function TeamList(props) {
  // const league = props.teamData.sports[0].leagues[0];

  return (
    <div>
      <Box elevation="xlarge" round="large">
        {console.log(props.teamData)}
        <Text size="large" margin="medium">
          NBA Teams <br />
          2024 Year
        </Text>
      </Box>

      
      <Box>
        {props.teamData.map((team) => (
          <TListBox 
            key={team.id}
            team={team}
          />
        ))}
      </Box>
    </div>
  );
}

// {/* TITLE */}
// <Text size="large" margin="medium">
//   {console.log(league)}
//   {league.name} Teams <br />
//   {league.season.year} Year
// </Text>

// {/* create the list */}
// <Box >
// {league.teams.map((team, index) => (
//   <TListBox
//     teamLinks={league.teams[index].team.links.slice(1)}
//     league={league}
//     team={team}
//   />
// ))}
//   </Box>
