import { Grid, Typography } from "@mui/material";

import React from "react";
import { PostCard } from "../components/PostCard";

const mostPopularPosts = [
  {
    title: "Test title 1",
    publishTime: "Test time",
    id: 1,
    summary:
      "Test summary sdjhfks sdfsdsfd sdfjsdkjfhs dsjfsdhfksdf sdsdfsdf sdfsdfsd fsdf sd fsd f sdfsdfsdfsd fsdfsdfsd fsdfsdfs dfsdf sdfsd dkfhsdkjf hskdfhskdjf skdfhskdjf fdjshfauef hedfsdfs dfsdfds fsdfdsfsdfd jfhksdfjhsdk fjsdhfksdjfhsdkfjsfd",
    image: "https://source.unsplash.com/random",
  },
  {
    title: "Test title 2",
    publishTime: "Test time",
    id: 2,
    summary: "Test summary sdjhfksdjf hksdfj sdkfjsd hfk djfh dkfjsfd",
    image: "https://source.unsplash.com/random",
  },
  {
    title: "Test title 3",
    publishTime: "Test time",
    id: 3,
    summary: "Test summary sdjhfksd jfhksdfjh sdkfjsd hfksdjf hsdkfjsfd",
    image: "https://source.unsplash.com/random",
  },
  {
    title: "Test title 3",
    publishTime: "Test time",
    id: 4,
    summary: "Test summary sdjhfk sdjfhksd fjhsdk fjsdh fksdj fhsdkf jsfd",
    image: "https://source.unsplash.com/random",
  },
];
export const Home = () => {
  return (
    <>
    <Typography align="center" variant="h3" sx={{mt:"30px"}}>The most popular posts</Typography>
      <Grid container justifyContent="center" spacing={4} sx={{mt:"1px", mb: "20px" }}>
        {mostPopularPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
};
