import { React, useState, useEffect } from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsSideBar from "./TeamNews/NewsSideBar";
import TeamList from "./TeamList/TeamList";
import GET from "../../EspnAPI/LeagueData/Route";

export default function TeamHome(props) {
  // data initally set to null
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await GET();
    setData(result);
  }

  // TODO : learn more here
  // useEffect fires on mount due to the empty dependency array
  useEffect(() => {
    fetchData();
  }, []); 
  // <-- Empty dependency array means it runs once, similar to componentDidMount;

  
  return (
    <div>
      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto"}}>
        <Grid columns={["3/4", "1/4"]}>
          
          {data !== null && (
            <Box pad="small">
              <TeamList teamData={data.LeagueTeams} />
            </Box>
          )}

          {/* News side bar */}
          {data !== null && (
            <Box pad="small" >
              {/* pass league news here */}
              <NewsSideBar newsData={data.LeagueNews} />
            </Box>
          )}
        </Grid>
      </Box>
    </div>
  );
}
