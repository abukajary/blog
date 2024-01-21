import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import SideBar from "../SideBar/SideBar";
import SmallPost from "../SideBar/SmallPost";

interface PostData {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
}

const BigText = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: 500;
  font-size: 41px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  padding-left: 50px;
`;
const Overview = styled.div`
  display: grid;
  margin: 50px 0 0 0px;
  grid-template-columns: 1fr 600px;
`;

const PostBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const PostOverview: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=06e19489ce094755aff113cfc07c5aa3`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.articles);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Overview>
      <PostBlock>
        <BigText>Discover Our Latest Posts</BigText>
        {posts.slice(0, 5).map((post, index) => (
          <Post
            key={0}
            title={post.title}
            imageUrl={post.urlToImage}
            description={post.description}
            publishedAt={post.publishedAt}
            author={post.author}
          />
        ))}
      </PostBlock>
      <SideBar>
        {posts.slice(5, 10).map((post, index) => (
          <SmallPost
            key={0}
            title={post.title}
            imageUrl={post.urlToImage}
            description={post.description}
            // publishedAt={post.publishedAt}
            // author={post.author}
          />
        ))}
      </SideBar>
    </Overview>
  );
};

export default PostOverview;
