import { React } from "react";
import { Text, Box } from "grommet";
import NewsBox from "./NewsBox";
import { useState, useEffect } from "react";
import { getSeasonNews } from "../../../API/MySQL/LeagueAPI";


const NewsSideBar = (props) => {
  const [leagueNews, setLeagueNews] = useState(null);
  
  const fetchData = async () => {
    const newsResult = await getSeasonNews();
    setLeagueNews(newsResult);
  }

  useEffect(() => {
    fetchData();
  } , []);

  return (
    <Box elevation="xlarge" round="medium">
      <Text weight="bold" margin="small">
        NBA League News
      </Text>

      <Box border="top">
        {/* TODO : learn more here */}
        { leagueNews !== null &&
          leagueNews.results.count > 0 &&
          leagueNews.results.items.map((article, index) => (
            <NewsBox
              key={index}
              imageURL={article.featuredImage}
              title={article.title}
              description={article.seo.description}
              readTime = {article.seo.estimated_reading_time_minutes}
              publishedDate={new Date(article.date).toLocaleString()}
              linkURL={article.permalink}
          />
          ))
        }
        </Box>
      </Box>
  );
};

export default NewsSideBar;
