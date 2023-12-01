import { React, useState, useEffect } from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsSideBar from "./SeasonNews/NewsSideBar";
import TeamList from "./TeamList/TeamList";
// import GET from "../../API/EspnAPI/LeagueData/Route";
import { getTeamsData } from "../../API/MySQL/TeamsDataAPI";

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

  return (
    <div>
      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Grid columns={["3/4", "1/4"]}>
          {data !== null && (
            <Box pad="small">
              <TeamList teamData={data.teamList} />
            </Box>
          )}

          {/* News side bar */}
          {data !== null && (
            <Box pad="small">
              {/* pass league news here */}
              {/* <NewsSideBar newsData={data.LeagueNews} /> */}
            </Box>
          )}
        </Grid>
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
