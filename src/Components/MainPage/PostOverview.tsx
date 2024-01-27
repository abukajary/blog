import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import SideBar from "../SideBar/SideBar";
import SmallPost from "../SideBar/SmallPost";

interface PostData {
  title: string;
  description: string;
  image_url: string;
  pubDate: string;
  creator: string;
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
      "https://newsdata.io/api/1/news?apikey=pub_3716449ad1adac7966ed0d4d11084c81c81fa&q=cryptocurrency"
    )
      .then((response) => response.json())
      .then((data) => {
        const { results } = data; // Assuming the API returns an object with a 'results' key
        setPosts(
          results.map((post: PostData) => ({
            ...post,
            image_url: post.image_url || "defaultImageURL",
            title: post.title || "No Title",
            description: post.description || "No Description",
            pubDate: post.pubDate || "No Date",
            creator: post.creator || "Anonymous",
          }))
        );
      })
      .catch((error) => console.error("Fetching error:", error));
  }, []);

  return (
    <Overview>
      <PostBlock>
        <BigText>Discover Our Latest Posts</BigText>
        {posts.slice(1, 4).map((post, index) => (
          <Post
            key={index} // Use the index as the key
            title={post.title}
            imageUrl={post.image_url}
            description={post.description}
            publishedAt={post.pubDate}
            author={post.creator}
          />
        ))}
      </PostBlock>
      <SideBar>
        {posts.slice(5, 10).map((post, index) => (
          <SmallPost
            key={index + 5}
            title={post.title}
            imageUrl={post.image_url}
            description={post.description}
          />
        ))}
      </SideBar>
    </Overview>
  );
};
export default PostOverview;
