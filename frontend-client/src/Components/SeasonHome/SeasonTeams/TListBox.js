import React from "react";
import { Text, Anchor, Image, Box } from "grommet";
import { getTeamLogoUrl } from "../../../API/EspnAPI/GetLogos";
import { useNavigate } from "react-router-dom";

export default function TListBox(props) {
  const navigate = useNavigate();

  const handleTeamClick = () => {
    navigate(`/TeamHome/${props.team.id}`);
  };

  return (
    <Box pad="small">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Logo on the left with fixed size */}
        <Image src={getTeamLogoUrl(props.team.id)} width="75" height="75" />

        {/* The other half */}
        <div>
          {/* Team Name */}
          <Anchor
            color="black"
            size="medium"
            margin="xxsmall"
            onClick={handleTeamClick}
          >
            {props.team.full_name}
          </Anchor>
          <div>
            <Text size="small">
              {props.team.year_founded} | {props.team.city}, {props.team.state}
            </Text>
          </div>
        </div>
      </div>
    </Box>
  );
}