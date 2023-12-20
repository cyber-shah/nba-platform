import React from "react";
import { Box, Image, Anchor, Text } from "grommet";
import { getPlayerImageUrl } from "../EspnAPI/GetLogos";

// TODO: understand all of these better
// TODO: how to generate columns with images?
/**
 * Dynamically generates columns for the table based
 * on the query results
 * @param {*} queryResults
 * @returns array of columns(objects)
 */
function generateColumns(queryResults, handleClick) {
  if (queryResults.length > 0) {
    const firstObjectKeys = Object.keys(queryResults[1]);
    return firstObjectKeys.map((key, index) => ({
      property: key,
      header: key,
    }));
  } else {
    return [];
  }
}


/**
 * Renders
 * @param {*} player
 * @param {*} handleClick
 * @returns
 */
function renderPlayer(player, handleClick) {
  return (
    <Box direction="row" align="center">
      <Image
        src={getPlayerImageUrl(player.player_id)}
        alt={`${player.fullName}'s Headshot`}
        height="60px"
        width="80px"
        margin={{ right: "small" }}
      />
    </Box>
  );
}

export { generateColumns };
