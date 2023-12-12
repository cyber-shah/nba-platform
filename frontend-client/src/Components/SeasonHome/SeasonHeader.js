import React from "react";
import { Tab, Tabs, Box, Grid, Image } from "grommet";

export default function SeasonHeader(props) {
  return (
    <Box elevation="large">
      <Grid columns={["1/4", "1/2"]}>
        <Box pad="small">
          {/* 1. NBA Logo */}
          <Image
            src="https://cdn.nba.com/manage/2020/10/NBA_Logoman_2017-horizontal-1-1568x923.jpg"
            alt="NBA Logo"
            width="80px"
          />
        </Box>

              <Box justify="end" align="center">
          {/* 2. Tabs */}
          <Tabs
            activeIndex={props.selectedTab}
            onActive={props.onActive}
            margin="small"
          >
            <Tab title="Scoreboard" />
            <Tab title="Teams" />
            <Tab title="Standings" />
            <Tab title="Leaderboard" />
          </Tabs>
        </Box>
      </Grid>
    </Box>
  );
}
