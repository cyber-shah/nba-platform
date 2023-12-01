import { React, useState, useEffect } from "react";
import { Box, Grid, Select } from "grommet";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import TeamList from "./TeamList/TeamList";
// import GET from "../../API/EspnAPI/LeagueData/Route";
import { getTeamsData } from "../../API/MySQL/TeamsDataAPI";
import SeasonHeader from "./SeasonHeader";

export default function SeasonHome(props) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await getTeamsData();
    setData(result);
  };

  // useEffect fires on mount due to the empty dependency array
  useEffect(() => {
    fetchData();
  }, []);
  // <-- Empty dependency array means it runs once, similar to componentDidMount;

  // seasons
  const [seasonYear, setYear] = useState("2023");

  // tabs
  const [selectedTab, setTab] = useState();
  const onActive = (index) => setTab(index);

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
            {data !== null && (
              <Box pad="small">
                <TeamList teamData={data.teamList} />
              </Box>
            )}

            {/* News side bar */}
            {data !== null && (
              <Box pad="small">
                {/* pass league news here */}
                <NewsSideBar newsData={data.LeagueNews} />
              </Box>
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

// // This is all ESPN DATA ----------------------------------------------------------
// // data initally set to null
// const [data, setData] = useState(null);

// const fetchData = async () => {
//   const result = await GET({seasonYear: 2024});
//   setData(result);
// }

// // TODO : learn more here
// // useEffect fires on mount due to the empty dependency array
// useEffect(() => {
//   fetchData();
// }, []);
// // <-- Empty dependency array means it runs once, similar to componentDidMount;
// // This is all ESPN DATA ----------------------------------------------------------
