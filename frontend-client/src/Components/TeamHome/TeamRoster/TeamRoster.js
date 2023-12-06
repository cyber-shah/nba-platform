import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable, Box, Text, Image, Anchor } from "grommet";
import { getTeamRoster } from "../../../API/MySQL/TeamAPI";
import { generateColumns, renderPlayer } from "../../GlobalFunctions";



export default function TeamRoster(props) {
  const [teamRoster, setTeamRoster] = React.useState(null);


  async function fetchData() {
    const teamRoster = await getTeamRoster(props.season, props.teamId);
    setTeamRoster(teamRoster);
  }

  useEffect(() => {
    fetchData();
  }, []);

    const navigate = useNavigate();
    const handlePlayerClick = (playerId) => {
      navigate(`/PlayerHome/${playerId}`);
    };

  if (teamRoster !== null) {
    const players = teamRoster.resultSets[0].rowSet;

    // translate the data from the API into a format that we want to use
    const transformedData = players.map((player) => ({
      id: player[14],
      fullName: player[3],
      position: player[7],
      height: player[8],
      weight: player[9],
      birthDate: player[10],
      age: player[11],
      experience: player[12],
      college: player[13],
    }));


    
    return (
      <Box align="center" elevation="large" pad="large" round="large">
        <DataTable
          columns= {generateColumns(transformedData, handlePlayerClick)}
          data={transformedData}
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
