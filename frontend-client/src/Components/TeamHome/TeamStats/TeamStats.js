import React from "react";
import { Box, DataTable } from "grommet";
import { generateColumns } from "../../GlobalFunctions";
import { getTeamStats } from "../../../API/MySQL/TeamAPI";

export default function TeamStats(props) {
  const [teamStats, setTeamStats] = React.useState(null);

  async function fetchData() {
    const results = await getTeamStats(props.season, props.team_id);
    setTeamStats(results);
    if (teamStats !== undefined && teamStats !== null) {
      setTeamStats(teamStats[0]);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (teamStats !== null && teamStats !== undefined) {
    {console.log(teamStats)}
    return (
      <Box
        align="center"
        elevation="large"
        pad="large"
        round="large"
        width="30%"
        margin="auto"
      >
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
