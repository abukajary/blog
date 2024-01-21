import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 50px;
  height: 100px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h2`
  margin: 0 0 5px 0;
  font-size: 1em;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.8em;
`;

type PostCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const SmallPost: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
    </Card>
  );
};

export default SmallPost;
