import React from "react";
import { Box } from "grommet";
import TeamHeader from "./TeamHeader";
import { useState } from "react";
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
  const { team_id } = useParams();
  // NOTE: single source to edit the season
  const season = "2023-24";

  console.log("From Team Home: " + team_id);



  // tabs --------------------------------------------------------------------
  const [selectedTab, setTab] = useState(0);
  const onActive = (index) => setTab(index);
  // tabs --------------------------------------------------------------------

  return (
    <div>
      {
        <TeamHeader
          team_id ={team_id}
          selectedTab={selectedTab}
          onActive={onActive}
          setTab={setTab}
          season = {season}
        />
      }

      <Box width="1500px" justify="center" margin="auto" pad="medium">
        {selectedTab === 0 && <TeamRoster team_id={team_id} season={season} />}
        {selectedTab === 1 && <TeamStats team_id={team_id} season={season} />}
        {/* {selectedTab === 3 && <TeamSchedule teamId={team_id} season={2024}/>} */}
      </Box>
    </div>
  );
}
