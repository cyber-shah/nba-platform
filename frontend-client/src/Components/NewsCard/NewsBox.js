import React from "react";
import { Box, Image, Text, Anchor } from "grommet";

export default function NewsBox(props) {
  return (
    <Box margin="xsmall">
      <Image src={props.ImageURL} />

      <Anchor
        href={props.linkURL}
        size="small"
        weight="bold"
        margin="small"
        color="black"
      >
        {props.title}
      </Anchor>

      <Text size="xsmall" margin="small">
        {props.description}
      </Text>

      <Text size="xsmall" margin="small" textAlign="center">
        {props.publishedDate}
      </Text>
    </Box>
  );
}
