import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 50px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 50%;
  max-height: 400px;
  object-fit: cover; 
  display: block;
`;

const CardContent = styled.div`
  padding: 15px;
  width: 50%;
`;

const CardTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5em;
  text-transform: uppercase;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #666;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 20px;
`;

const CardAuthor = styled.div`
  font-size: 0.9em;
  color: #666;
`;

const CardPublishedDate = styled.div`
  font-size: 0.8em;
  color: #999;
`;

const PostCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
}> = ({ title, description, imageUrl, author, publishedAt }) => {
  return (
    <Card>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <CardAuthor>{author}</CardAuthor>
          <CardPublishedDate>
            {new Date(publishedAt).toLocaleDateString()}
          </CardPublishedDate>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default PostCard;
