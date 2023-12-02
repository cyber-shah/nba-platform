import React from "react";
import { Data, DataTable, Toolbar, DataTableColumns } from "grommet";
import TeamHeader from "./TeamHeader";
import { useState } from "react";
import { getTeamDetails } from "../../API/MySQL/TeamAPI";

export default function TeamHome(props) {
  const [teamDetails, setTeamDetails] = React.useState(null);
  const [teamSchedule, setTeamSchedule] = React.useState({});
  const [teamRoster, setTeamRoster] = React.useState({});
  const [teamStats, setTeamStats] = React.useState({});

  // tabs --------------------------------------------------------------------
  const [selectedTab, setTab] = useState(1);
  const onActive = (index) => setTab(index);
  // tabs --------------------------------------------------------------------

  React.useEffect(() => {
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

      {teamRoster !== null && selectedTab === 0 && GameContent()}
      {teamStats !== null && selectedTab === 1 && TeamContent()}
      {teamSchedule !== null && selectedTab === 2 && StandingsContent()}
    </div>
  );
}
