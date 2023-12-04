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

  // TODO: set this inside the TeamHeader component
  const [teamDetails, setTeamDetails] = React.useState(null);

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
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* TODO: extract season year from this to be able to pass it into props */}
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
        {selectedTab === 2 && <TeamStats />}
        {selectedTab === 3 && <TeamSchedule />}
      </Box>

    </div>
  );
}
