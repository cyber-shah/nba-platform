import React, { useState, useEffect } from "react";
import { Box, Text } from "grommet";
import TListBox from "./TListBox";
import { getSeasonsTeams } from "../../../API/MySQL/LeagueAPI";

export default function TeamList(props) {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getSeasonsTeams(props.season);
    setTeamData(result);
  };

  return (
    <div>
      <Box elevation="xlarge" round="large">
        <Text size="xxlarge" margin="medium">
          NBA Teams
        </Text>

        <Box>
          {teamData !== null &&
            teamData.map((team) => <TListBox key={team.team_id} team={team} />)}
        </Box>
      </Box>
    </div>
  );
}
