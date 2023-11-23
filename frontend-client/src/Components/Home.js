import { React, useState, useEffect } from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsCard from "./NewsCard/NewsCard";
import GET from "../Api/LeagueData/Route";

export default function Home(props) {

  return (
    <div>
      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Grid columns={["3/4", "1/4"]} gap="xsmall">
          <Box pad="medium">
            
          </Box>

          {/* News side bar */}
          <Box pad="small">
            <NewsCard/>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
