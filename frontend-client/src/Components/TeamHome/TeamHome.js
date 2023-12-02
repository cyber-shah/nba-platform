import React, { useEffect } from "react";
import { Data, DataTable, Toolbar, DataTableColumns } from "grommet";
import TeamHeader from "./TeamHeader";
import { useState } from "react";
import { getTeamDetails } from "../../API/MySQL/TeamAPI";
import TeamSchedule from "./TeamSchedule/TeamSchedule";
import TeamStats from "./TeamStats/TeamStats";
import TeamRoster from "./TeamRoster/TeamRoster";


export default function TeamHome(props) {
  const [teamDetails, setTeamDetails] = React.useState(null);
  const [teamSchedule, setTeamSchedule] = React.useState(null);
  const [teamRoster, setTeamRoster] = React.useState(null);
  const [teamStats, setTeamStats] = React.useState(null);

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

        setTeamSchedule(teamSchedule);
        setTeamRoster(teamRoster);
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

      {teamRoster !== null && selectedTab === 1 && TeamRoster()}
      {teamStats !== null && selectedTab === 2 && TeamStats()}
      {teamSchedule !== null && selectedTab === 3 && TeamSchedule()}
    </div>
  );
}
