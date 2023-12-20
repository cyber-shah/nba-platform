import React from "react";
import { Text, Anchor, Image, Box } from "grommet";

export default function TListBox(props) {
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
        <Image src={props.team.team.logos[0].href} width="100" height="100" />

        {/* The other half */}
        <div>
          {/* Team Name */}
          {/* TODO : add href here */}
          <Anchor color="black" size="medium" margin="xxsmall">
            {props.team.team.displayName}
          </Anchor>

          {/* Links */}
          <div>
            {props.teamLinks.map((link, index) => (
              <Anchor
                key={index}
                size="xsmall"
                href={link.href}
                margin="xxsmall"
                color="dark-3"
              >
               ○ {link.text} 
              </Anchor>
            ))}
          </div>

        </div>
      
      </div>
    </Box>
  );
}
