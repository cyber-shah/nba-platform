import React from "react";
import { Card, CardBody, Image, Text, Anchor } from "grommet";

const NewsCard = ({ imageURL,
  title, description,
  publishedDate, linkURL }) => {
  
  
  
  
  return (
    <Card margin="xsmall">
      <Image src={imageURL}
        alt="Card Image" />

      <CardBody>
        <Anchor
          href={linkURL}
          size="small"
          weight="bold"
          margin="small"
          color="black"
        >
          {title}
        </Anchor>
        <Text size="xsmall" margin="small">
          {description}
        </Text>
      </CardBody>

      <Text size="xsmall" textAlign="center">
        {publishedDate}
      </Text>
    </Card>
  );
};

export default NewsCard;
