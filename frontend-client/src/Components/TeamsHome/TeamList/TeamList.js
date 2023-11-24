import React from "react";
import { Box, Text, Anchor, Image } from "grommet";

export default function TeamList(props) {
  const league = props.teamData.sports[0].leagues[0];
  const teamLinks = league.teams[0].team.links;

  return (
    <div>
      <Box>
        <Text size="large">
          {console.log(league)}
          {league.name} Teams <br />
          {league.season.year} Year
        </Text>

        <Text size="medium">{league.teams[0].team.displayName}</Text>

        <Image
          src={league.teams[0].team.logos[0].href}
          width="100"
          height="100"
        />
        
              {/* Links */}
        {teamLinks.map((link, index) => (
          <Anchor key={index} size="xsmall" href={link.href}>
            {link.text}
          </Anchor>
        ))}
              
      </Box>
    </div>
  );
}
