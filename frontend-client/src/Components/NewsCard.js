import React from "react";
import { Card, CardBody, CardFooter, Image, Text } from "grommet";

const NewsCard = ({ imageUrl, title, description }) => {
  return (
    <Card elevation="medium" margin="small">
      <Image src={imageUrl} alt="Card Image" />

      <CardBody>
        <Text size="small" weight="bold">
          {title}
        </Text>
        <Text size="small">{description}</Text>
      </CardBody>

      <CardFooter>
        {/* Add any additional content for the card footer */}
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
