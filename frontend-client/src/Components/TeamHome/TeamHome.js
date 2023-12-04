import React, { useEffect } from "react";
import { Box } from "grommet";
import TeamHeader from "./TeamHeader";
import { useState } from "react";
import { getTeamDetails, getTeamRoster } from "../../API/MySQL/TeamAPI";
import TeamSchedule from "./TeamSchedule/TeamSchedule";
import TeamStats from "./TeamStats/TeamStats";
import TeamRoster from "./TeamRoster/TeamRoster";
import { useParams } from "react-router-dom";

/**
 * 
 * @param {*} No Props needed, extracts teamId from the url and passes it into the all the components
 * 1. ID is passed into the TeamHeader component to display the team logo and name
 * 2. Season and ID is passed into the TeamRoster component to display the team roster
 * 3. Season and ID is passed into the TeamStats component to display the team stats
 * 4. Season and ID is passed into the TeamSchedule component to display the team schedule
 * @returns 
 */
export default function TeamHome(props) {
  const { teamId } = useParams();
  console.log(teamId);

  // tabs --------------------------------------------------------------------
  const [selectedTab, setTab] = useState(1);
  const onActive = (index) => setTab(index);
  // tabs --------------------------------------------------------------------

  return (
    <div>
      {/* TODO: extract season year from this to be able to pass it into props */}
      {
        <TeamHeader
          teamID ={teamId}
          selectedTab={selectedTab}
          onActive={onActive}
          setTab={setTab}
        />
      }

      <Box width="1500px" justify="center" margin="auto" pad="medium">
        {selectedTab === 1 && <TeamRoster teamId={teamId} season={2024} />}
        {selectedTab === 2 && <TeamStats />}
        {selectedTab === 3 && <TeamSchedule />}
      </Box>
    </div>
  );
}
