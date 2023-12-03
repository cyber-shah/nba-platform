import React from "react";
import { Box, Text } from "grommet";
import TListBox from "./TListBox";

export default function TeamList(props) {

  return (
    <div>
      <Box elevation="xlarge" round="large">
        <Text size="xxlarge" margin="medium">
          NBA Teams
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