import React from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsCard from "./NewsCard";
import GET from "../Api/LeagueData/Route";

export default function Home(props) {
  const data = GET();

  return (
    <div>
      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Grid columns={["3/4", "1/4"]} gap="xsmall">
          <Box pad="medium"></Box>

          {/* News side bar */}
          <Box pad="small" >

            <Box pad="small" border="all">
              <Text >Media</Text>
              <NewsCard
                imageUrl="https://example.com/image.jpg"
                title="Card Title"
                description="This is a description for the card."
              />
            </Box>

            <Box pad="small" border="all">
              <Text>Recap</Text>
              <NewsCard
                imageUrl="https://example.com/image.jpg"
                title="Card Title"
                description="This is a description for the card."
              />
            </Box>
            
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
