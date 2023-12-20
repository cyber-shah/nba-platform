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
    setTeamData(result[0]);
    console.log("Team Data: ", result[0]);
  };

  return (
    <div>
      <Box elevation="xlarge" round="large" width="50%" margin="auto">
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
