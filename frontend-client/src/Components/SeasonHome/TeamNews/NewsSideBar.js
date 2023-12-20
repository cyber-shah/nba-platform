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
          props.newsData.articles &&
          props.newsData.articles.length > 0 &&
          props.newsData.articles.map((article, index) => (
            <NewsBox
              key={index}
              imageURL={article.images[0].url}
              title={article.headline}
              description={article.description}
              publishedDate={new Date(article.published).toLocaleString()}
              linkURL={article.links.web.href}
          />
          ))
        }
        </Box>
      </Box>
  );
};

export default NewsSideBar;
