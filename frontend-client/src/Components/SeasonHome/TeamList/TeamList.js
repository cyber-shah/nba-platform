import React from "react";
import { Box, Text } from "grommet";
import TListBox from "./TListBox";

export default function TeamList(props) {

  return (
    <div>
      <Box elevation="xlarge" round="large">
        {console.log(props.teamData)}
        <Text size="large" margin="medium">
          NBA Teams <br />
          2024 Year
        </Text>

      <Box>
        {props.teamData.map((team) => (
          <TListBox 
            key={team.id}
            team={team}
          />
        ))}
        </Box>
        </Box>
    </div>
  );
}