import { React, useEffect, useState } from "react";
import { Card, CardBody, Image, Text, Anchor, Box } from "grommet";
import GET from "../../Api/LeagueData/Route";
import NewsBox from "./NewsBox";


const NewsCard = (props) => {
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
      <Box>
        {/* TODO : learn more here */}
        {data &&
          data.LeagueNews &&
          data.LeagueNews.articles &&
          data.LeagueNews.articles.length > 0 &&
        data.LeagueNews.articles.map((article, index) => (
            <NewsBox
              key={index}
              imageURL={article.images[0].url}
              title={article.headline}
              description={article.description}
              publishedDate={new Date(article.published).toLocaleString()}
              linkURL={article.links.web.href}
          />
          ))}
      </Box>
  );
};

export default NewsCard;
