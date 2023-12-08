import React from "react";
import { Box, DataTable, Text } from "grommet";
import { generateColumns, renderPlayer } from "../../GlobalFunctions";
import { getTeamStats } from "../../../API/MySQL/TeamAPI";


export default function TeamStats(props) {
  const [teamStats, setTeamStats] = React.useState(null);

  async function fetchData() {
    const teamRoster = await getTeamStats(props.season, props.team_id);
    setTeamStats(teamRoster);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (teamStats !== null) {
    return (
      <Box align="center" elevation="large" pad="large" round="large">
        <DataTable
          columns={generateColumns(teamStats)}
          data={teamStats}
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
