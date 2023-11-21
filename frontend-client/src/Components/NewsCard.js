import React from "react";
import { Card, CardBody, CardFooter, Image, Text, Anchor } from "grommet";

const NewsCard = ({ imageUrl, title, description, publishedDate, linkUrl }) => {
  return (
    <Card margin="xsmall">
      <Image src={imageUrl}
        alt="Card Image" />

      <CardBody>
        <Anchor
          href={linkUrl}
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
