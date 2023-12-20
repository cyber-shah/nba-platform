import { React, useState, useEffect } from "react";
import { Box, Grid, Select } from "grommet";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import TeamList from "./SeasonTeams/SeasonTList";
import SeasonHeader from "./SeasonHeader";
import SeasonsStandings from "./SeasonStandings/SeasonsStandings";
import SeasonPlayers from "./SeasonPlayers/SeasonPlayers";
import SeasonGames from "./SeasonGames/SeasonGames";




export default function SeasonHome(props) {
  // For Season Header --------------------------------------------------------------------------------------------------------------------
  // tabs
  const [selectedTab, setTab] = useState(1);
  const onActive = (index) => setTab(index); 
 
  // NOTE: single source for editing season year
  const season = "2023-24";

  return (
    <div>
      <SeasonHeader
        season={season}
        // setYear={setYear}
        selectedTab={selectedTab}
        onActive={onActive}
        setTab={setTab}
      />

      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Box>
          <Grid columns={["3/3", "1/3"]}>
            <Box pad="small">
              {/* {selectedTab === 0 && <SeasonGames season={season} />} */}
              {selectedTab === 0 && <TeamList season={season} />}
              {/* {selectedTab === 2 && <SeasonsStandings season={season} />} */}
              {selectedTab === 1 && <SeasonPlayers season={season} />}
            </Box>

            {/* News side bar */}
            {/* <Box pad="small"> */}
              {/* pass league news here */}
              {/* <NewsSideBar /> */}
            {/* </Box> */}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
