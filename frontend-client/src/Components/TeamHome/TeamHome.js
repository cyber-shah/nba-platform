import React, { useEffect } from "react";
import { Box } from "grommet";
import TeamHeader from "./TeamHeader";
import { useState } from "react";
import { getTeamDetails, getTeamRoster } from "../../API/MySQL/TeamAPI";
import TeamSchedule from "./TeamSchedule/TeamSchedule";
import TeamStats from "./TeamStats/TeamStats";
import TeamRoster from "./TeamRoster/TeamRoster";
import { useParams } from "react-router-dom";

export default function TeamHome(props) {
  const { teamId } = useParams();

  console.log(teamId);

  const [teamDetails, setTeamDetails] = React.useState(null);
  const [teamStats, setTeamStats] = React.useState(null);
  const [teamSchedule, setTeamSchedule] = React.useState(null);

  // tabs --------------------------------------------------------------------
  const [selectedTab, setTab] = useState(1);
  const onActive = (index) => setTab(index);
  // tabs --------------------------------------------------------------------

  useEffect(() => {
    async function fetchData() {
      try {
        // TODO : pass the team id and season from the props
        const teamDetails = await getTeamDetails(2024, 1610612744);
        setTeamDetails(teamDetails);

        // TODO : pass the team id and season from the props
        setTeamSchedule(teamSchedule);

        // TODO : pass the team id and season from the props
        setTeamStats(teamStats);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {teamDetails != null && (
        <TeamHeader
          team={teamDetails}
          selectedTab={selectedTab}
          onActive={onActive}
          setTab={setTab}
        />
      )}

      <Box width="1500px" justify="center" margin="auto" pad="medium">
        {selectedTab === 1 && <TeamRoster teamId={teamId} season={2024} />}
        {teamStats !== null && selectedTab === 2 && TeamStats()}
        {teamSchedule !== null && selectedTab === 3 && TeamSchedule()}
      </Box>
      
    </div>
  );
}
