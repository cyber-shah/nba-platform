import React from "react";
import { Box, Image, Anchor, Text } from "grommet";
import { getPlayerImageUrl } from "../API/EspnAPI/GetLogos";

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
    const firstObjectKeys = Object.keys(queryResults[0]);
    return firstObjectKeys.map((key, index) => ({
      property: key,
      header: key,
      render: (datum) => {
        // Assuming 'id' is the property you want to reference
        if (index === 0 && datum.id) {
          return renderPlayer(datum, handleClick);
        } 
        else if (index === 1 && datum.id) {
          return (
            <Anchor
              color="black"
              onClick={() => {
                handleClick(datum.id);
              }}
            >
              {datum[key]}
            </Anchor>
          );
        } else {
          return <Text>{datum[key]}</Text>;
        }
      },
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
        src={getPlayerImageUrl(player.id)}
        alt={`${player.fullName}'s Headshot`}
        height="60px"
        width="80px"
        margin={{ right: "small" }}
      />
    </Box>
  );
}

export { generateColumns };
