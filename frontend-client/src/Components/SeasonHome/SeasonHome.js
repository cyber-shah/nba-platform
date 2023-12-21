import { Box, Grid } from "grommet";
import { React, useEffect, useState } from "react";
import GET from "../../EspnAPI/SeasonData/Route";
import SeasonHeader from "./SeasonHeader";
import TeamList from "./TeamList/TeamList";
import NewsSideBar from "./TeamNews/NewsSideBar";
import StandingsTable from "./Standings/StandingsTable";
import Stats from "./Stats";

export default function TeamHome(props) {
  const [data, setData] = useState(null);

  // for Season Header
  const [selectedTab, setTab] = useState(1);
  const onActive = (nextIndex) => setTab(nextIndex);


  const fetchData = async () => {
    const result = await GET({ seasonYear: 2024 });
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);


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
              {selectedTab === 0 && <div>Scoreboard</div>}
              {selectedTab === 1 &&
                <TeamList teamData={data.LeagueTeams} />}
              {selectedTab === 2 && < StandingsTable standings={data.LeagueStandings} />}
              {selectedTab === 3 && <Stats players={data.LeagueLeadersPlayers} />}
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
