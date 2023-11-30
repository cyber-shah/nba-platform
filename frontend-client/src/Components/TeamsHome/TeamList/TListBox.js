import React from 'react'
import { Text, Anchor, Image, Box } from "grommet";

export default function TListBox(props) {
  return (
      <Box pad="medium">
          <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Logo on the left with fixed size */}
          <Image
            src={props.team.team.logos[0].href}
            width="50"
            height="50"
          />

          <div>
            <Text size="medium" margin="xsmall">{props.team.team.displayName}</Text>
            <div>
              {/* Links */}
              {props.teamLinks.map((link, index) => (
                <Anchor key={index} size="xsmall" href={link.href} margin="xsmall">
                  {link.text}
                  </Anchor>
              ))}
            </div>
          </div>
        </div>
    </Box>
  )
}
