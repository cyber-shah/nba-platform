import { React } from "react";
import { Text, Box } from "grommet";
import NewsBox from "./NewsBox";


const NewsSideBar = (props) => {

  return (
    <Box elevation="xlarge" round="medium">
      <Text weight="bold" margin="small">
        NBA League News
      </Text>

      <Box border="top">
        {/* TODO : learn more here */}
        { 
          props.newsData.results.count > 0 &&
          props.newsData.results.items.map((article, index) => (
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
