import { Box, Grid } from "grommet";
import { React, useEffect, useState } from "react";
import { GET } from "../../EspnAPI/SeasonData/SeasonAPI";
import SeasonHeader from "./SeasonHeader";
import TeamList from "./TeamList/TeamList";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import StandingsTable from "./Standings/StandingsTable";
import Stats from "./Leaderboard";
import Scores from "./Scores/Scores.js";


export default function TeamHome() {
  const [data, setData] = useState(null);

  // for Season Header
  const [selectedTab, setTab] = useState(2);
  const onActive = (nextIndex) => setTab(nextIndex);


  const fetchData = async () => {
    const result = await GET({ seasonYear: 2024 });
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <SeasonHeader
        setTab={setTab}
        onActive={onActive}
        selectedTab={selectedTab}
      />


      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Grid columns={["3/4", "1/4"]}>

          {data !== null && (
            <Box pad="small">
              {selectedTab === 0 && <Scores />}
              {selectedTab === 4 && <div>Schedule</div>}
              {selectedTab === 1 && <Stats players={data.LeagueLeadersPlayers} />}
              {selectedTab === 2 && < StandingsTable standings={data.LeagueStandings} />}
              {selectedTab === 3 &&
                <TeamList teamData={data.LeagueTeams} />}
            </Box>
          )}


          {/* News side bar */}
          {data !== null && (
            <Box pad="small" >
              <NewsSideBar newsData={data.LeagueNews} />
            </Box>
          )}
        </Grid>
      </Box>
    </div>
  );
}
