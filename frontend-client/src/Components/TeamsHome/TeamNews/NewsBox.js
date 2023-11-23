import React from "react";
import { Box, Image, Text, Anchor } from "grommet";

export default function NewsBox(props) {
  return (
    <Box margin="xsmall" border="bottom">
      <Image src={props.imageURL} margin="xsmall" />

      <Anchor
        href={props.linkURL}
        size="small"
        weight="bold"
        margin={{ top: "none", left: "xsmall", right: "xsmall"}}
        color="black"
      >
        {props.title}
      </Anchor>

      <Text size="xsmall" margin={{ top: "none", left: "xsmall", right: "xsmall"}}>
        {props.description}
      </Text>

      <Text
        size="xsmall"
        margin={{ top: "none", left: "xsmall", right: "xsmall"}}
        textAlign="start"
        color="dark-4"
      >
        {/* {props.publishedDate} */}
      </Text>
    </Box>
  );
}
