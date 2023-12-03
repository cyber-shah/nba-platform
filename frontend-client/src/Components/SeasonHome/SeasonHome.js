import { React, useState, useEffect } from "react";
import { Box, Grid, Select } from "grommet";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import TeamList from "./TeamList/TeamList";
// import GET from "../../API/EspnAPI/LeagueData/Route";
// import { getSeasonsData } from "../../API/MySQL/LeagueAPI";
import { getSeasonNews, getSeasonStandings, getSeasonsTeams } from "../../API/MySQL/LeagueAPI";
import SeasonHeader from "./SeasonHeader";
import SeasonsStandings from "./SeasonStandings/SeasonsStandings";

export default function SeasonHome(props) {
  // for Team List --------------------------------------------------------------------------------------------------------------------
  const [teamData, setTeamData] = useState(null);
  const [leagueNews, setLeagueNews] = useState(null);
  const [standingsData, setStandingsData] = useState(null);

  const fetchData = async () => {
    const result = await getSeasonsTeams();
    setTeamData(result);

    const newsResult = await getSeasonNews();
    setLeagueNews(newsResult);

    const standingsResult = await getSeasonStandings();
    setStandingsData(standingsResult);
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
      <TeamList teamData={teamData} seasonYear={seasonYear} />
    </Box>
  );

  const StandingsContent = () => (
    <Box pad="small">
      <SeasonsStandings standingsData={null} seasonYear={standingsData} />
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
            {teamData !== null && selectedTab === 0 && GameContent()}
            {teamData !== null && selectedTab === 1 && TeamContent()}
            {teamData !== null && selectedTab === 2 && StandingsContent()}

            {/* News side bar */}
            {leagueNews !== null && (
              <Box pad="small">
                {/* pass league news here */}
                <NewsSideBar newsData={leagueNews} />
              </Box>
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
