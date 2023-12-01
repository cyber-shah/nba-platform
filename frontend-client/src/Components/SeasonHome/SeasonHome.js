import { React, useState, useEffect } from "react";
import { Box, Grid, Select } from "grommet";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import TeamList from "./TeamList/TeamList";
// import GET from "../../API/EspnAPI/LeagueData/Route";
import { getTeamsData } from "../../API/MySQL/TeamsDataAPI";
import SeasonHeader from "./SeasonHeader";
import SeasonsStandings from "./SeasonStandings/SeasonsStandings";

export default function SeasonHome(props) {
  // for Team List --------------------------------------------------------------------------------------------------------------------
  const [teamData, setTeamData] = useState(null);

  const fetchData = async () => {
    const result = await getTeamsData();
    setTeamData(result);
  };
  // useEffect fires on mount due to the empty dependency array
  useEffect(() => {
    fetchData();
  }, []);
  // <-- Empty dependency array means it runs once, similar to componentDidMount;
  // for Team List --------------------------------------------------------------------------------------------------------------------

  // For Season Header --------------------------------------------------------------------------------------------------------------------
  // seasons
  const [seasonYear, setYear] = useState("2023");
  // tabs
  const [selectedTab, setTab] = useState(1);
  const onActive = (index) => setTab(index);
  // For Season Header --------------------------------------------------------------------------------------------------------------------

  // Contents --------------------------------------------------------------------------------------------------------------------
  const TeamContent = () => (
    <Box pad="small">
      <TeamList teamData={teamData.teamList} seasonYear={seasonYear} />
    </Box>
  );

  const StandingsContent = () => (
    <Box pad="small">
      <SeasonsStandings standingsData={null} seasonYear={seasonYear} />
    </Box>
  );

  const GameContent = () => <Box pad="small"></Box>;
  // Contents --------------------------------------------------------------------------------------------------------------------

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
            {teamData !== null && selectedTab === 1 && TeamContent()}
            {teamData !== null && selectedTab === 1 && TeamContent()}

            {/* News side bar */}
            {teamData !== null && (
              <Box pad="small">
                {/* pass league news here */}
                <NewsSideBar newsData={teamData.LeagueNews} />
              </Box>
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
