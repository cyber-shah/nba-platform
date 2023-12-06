import { React, useState, useEffect } from "react";
import { Box, Grid, Select } from "grommet";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import TeamList from "./SeasonTeams/SeasonTList";
import SeasonHeader from "./SeasonHeader";
import SeasonsStandings from "./SeasonStandings/SeasonsStandings";
import SeasonPlayers from "./SeasonPlayers/SeasonPlayers";




export default function SeasonHome(props) {
  // For Season Header --------------------------------------------------------------------------------------------------------------------
  // seasons
  const [seasonYear, setYear] = useState("2023");
  // tabs
  const [selectedTab, setTab] = useState(1);
  const onActive = (index) => setTab(index);
  // use effect so that whenver seasonYear changes, it will update the data


  return (
    <div>
      <SeasonHeader
        seasonYear={seasonYear}
        setYear={setYear}
        selectedTab={selectedTab}
        onActive={onActive}
        setTab={setTab}
      />

      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Box>
          <Grid columns={["2/3", "1/3"]}>
            <Box pad="small">
              {selectedTab === 0 }
              {selectedTab === 1 && <TeamList seasonYear={seasonYear} />}
              {selectedTab === 2 && <SeasonsStandings seasonYear={seasonYear} />}
              {selectedTab === 3 && <SeasonPlayers seasonYear={seasonYear} />}
            </Box>

            {/* News side bar */}
            <Box pad="small">
              {/* pass league news here */}
              <NewsSideBar />
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
