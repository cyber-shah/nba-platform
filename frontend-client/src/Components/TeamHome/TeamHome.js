import React from "react";
import { Data, DataTable, Toolbar, DataTableColumns } from "grommet";
import TeamHeader from "./TeamHeader";
import { getTeamDetails } from "../../API/MySQL/TeamAPI";


export default function TeamHome(props) {

  const [teamDetails, setTeamDetails] = React.useState({});
  const [teamSchedule, setTeamSchedule] = React.useState({});
  const [teamRoster, setTeamRoster] = React.useState({});
  const [teamStats, setTeamStats] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      try {
        // TODO : pass the team id and season from the props
        const teamData = await getTeamDetails(2024, 1610612744);
        setTeamDetails(teamData.teamDetails);
        setTeamSchedule(teamData.teamSchedule);
        setTeamRoster(teamData.teamRoster);
        setTeamStats(teamData.teamStats);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  } ,[]);
  

  return (
    <div>
      {teamDetails != null && <TeamHeader team={teamDetails} />}
      {teamDetails != null && console.log(teamDetails)}
    </div>
  );
}
