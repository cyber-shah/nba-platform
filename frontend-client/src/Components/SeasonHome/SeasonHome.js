import { React, useState, useEffect } from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsSideBar from "./TeamNews/NewsSideBar";
import TeamList from "./TeamList/TeamList";
import GET from "../../EspnAPI/LeagueData/Route";
import SeasonHeader from "./SeasonHeader";

export default function TeamHome(props) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await GET({seasonYear: 2024});
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []); 

  
  return (
    <div>
      <SeasonHeader>
        
      </SeasonHeader>
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
