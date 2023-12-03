import React from "react";
import { Tab, Tabs, Box, Select, Image } from "grommet";

export default function SeasonHeader(props) {
  return (
    <Box elevation="large" justify="end" align="start">
      <Box
        style={{ maxWidth: "500px", margin: "auto" }}
        align="center"
        pad="small"
        justify="between"
      >
        {/* 1. NBA Logo */}
        <Image
          src="https://cdn.nba.com/manage/2020/10/NBA_Logoman_2017-horizontal-1-1568x923.jpg"
          alt="NBA Logo"
          width="50%"
        />

        {/* 2. Tabs */}
        <Tabs
          activeIndex={props.selectedTab}
          onActive={props.onActive}
          alignControls="start"
          margin="small"
        >
          <Tab title="Games" />
          <Tab title="Teams" />
          <Tab title="Standings" />
          <Tab title="Players" />
        </Tabs>

        {/* 3. Select Year */}
        <Box direction="row" align="center" gap="small">
          <Select
            size="small"
            options={["2023", "2022", "2021"]}
            value={props.seasonYear}
            onChange={({ seasonYear }) => props.setYear(seasonYear)}
          />
        </Box>
      </Box>
    </Box>
  );
}
