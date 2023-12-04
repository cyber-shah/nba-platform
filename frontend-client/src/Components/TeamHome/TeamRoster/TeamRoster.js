import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable, Box, Text, Image, Anchor } from "grommet";
import { getPlayerImageUrl } from "../../../API/EspnAPI/GetLogos";
import { getTeamRoster } from "../../../API/MySQL/TeamAPI";

export default function TeamRoster(props) {
  const [teamRoster, setTeamRoster] = React.useState(null);
  const navigate = useNavigate();

  async function fetchData() {
    const teamRoster = await getTeamRoster(props.season, props.teamId);
    setTeamRoster(teamRoster);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      Acquired: player[15],
    }));



    const columns = [
      {
        property: "fullName",
        header: "Full Name",
        // function that takes in the player object and renders the an image of the player
        render: (player) => (
          <Box direction="row" align="center">
            <Image
              src={getPlayerImageUrl(player.id)}
              alt={`${player.fullName}'s Headshot`}
              height="60px"
              width="80px"
              margin={{ right: "small" }}
            />
            <Anchor
              color="black"
              onClick={() => {
                handlePlayerClick(player.id);
              }}
            >
              {player.fullName}
            </Anchor>
          </Box>
        ),
      },
      { property: "position", header: "Position" },
      { property: "height", header: "Height" },
      { property: "weight", header: "Weight" },
      { property: "birthDate", header: "Birth Date" },
      { property: "age", header: "Age" },
      { property: "experience", header: "Experience" },
      { property: "college", header: "College" },
      { property: "Acquired", header: "Acquired via" },
    ];
    console.log(columns);

    return (
      <Box align="center" elevation="large" pad="large" round="large">
        <DataTable
          columns={columns}
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
