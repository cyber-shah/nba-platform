import React from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsCard from "./NewsCard";

export default function Home() {
  return (
    <div>
      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Grid columns={["3/4", "1/4"]} gap="xsmall">
          <Box pad="medium"></Box>

          <Box pad="medium">
            <Text >
            News
            </Text>
            <NewsCard
              imageUrl="https://example.com/image.jpg"
              title="Card Title"
              description="This is a description for the card."
            />
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
