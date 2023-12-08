import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable, Box, Text, Image, Anchor } from "grommet";
import { getTeamRoster } from "../../../API/MySQL/TeamAPI";
import { generateColumns, renderPlayer } from "../../GlobalFunctions";

export default function TeamRoster(props) {
  const [teamRoster, setTeamRoster] = React.useState(null);

  async function fetchData() {
    const teamRoster = await getTeamRoster(props.season, props.team_id);
    setTeamRoster(teamRoster[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handlePlayerClick = (playerId) => {
    navigate(`/PlayerHome/${playerId}`);
  };

  if (teamRoster !== null && teamRoster.length > 0 ) {
    const players = teamRoster;

    return (
<Box align="center" elevation="large" pad="large" round="large" width="50%" margin="auto">
        <DataTable
    columns={generateColumns(teamRoster, handlePlayerClick)}
    data={teamRoster}
    pad={{ horizontal: "medium", vertical: "xsmall" }}
    background={{
      header: { color: "white", opacity: "strong" },
      body: ["light-1", "white"],
      footer: { color: "dark-1", opacity: "strong" },
    }}
    border={{ body: "bottom" }}
  />
</Box>

    );
  }
}
