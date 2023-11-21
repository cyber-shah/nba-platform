import { React, useState, useEffect } from "react";
import { Box, Grid, Image, Text } from "grommet";
import NewsCard from "./NewsCard";
import GET from "../Api/LeagueData/Route";

export default function Home(props) {
  // data initally set to null
  const [data, setData] = useState(null);

  // TODO : learn more here
  useEffect(() => {
    const fetchData = async () => {
      const result = await GET();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Box style={{ height: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Grid columns={["3/4", "1/4"]} gap="xsmall">
          <Box pad="medium"></Box>

          {/* News side bar */}
          <Box pad="small">
            {/* TODO : learn more here */}
            {data &&
              data.LeagueNews &&
              data.LeagueNews.articles &&
              data.LeagueNews.articles.length > 0 &&
              data.LeagueNews.articles.map((article, index) => (
                <NewsCard
                  key={index}
                  imageUrl={article.images[0].url}
                  title={article.headline}
                  description={article.description}
                  publishedDate={new Date(article.published).toLocaleString()}
                  linkUrl={article.links.web.href}
                />
              ))}
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
