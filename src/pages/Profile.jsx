import { Avatar, Paper, Typography, Box, Grid } from "@mui/material";

import { PostCard } from "../components/PostCard";

const userInfo = {
  userName: "TestName",
  userAvatar: "https://source.unsplash.com/random",
  userSummary:
    "dfdsjf sdjkfdshfkj sdkfjhsdkfds fkdsjfhsdkf sdkfjsdhfksd sdkjfhsdkfjhs ksdfjhsdkjf ksdfhskdfjhs sdkdfhsd fsdkjfhsdkfjh sdfjdshkfjsdhf s",
  userPosts: [
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
  ],
};
const headImg = "https://source.unsplash.com/random";

export const Profile = () => {
  const { userAvatar, userName, userSummary, userPosts } = userInfo;
  return (
    <>
      <Paper
        sx={{
          height: 350,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${headImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
            border: "1px solid white",
            borderRadius: "50px",
          }}
        >
          <Avatar sx={{ width: "100px", height: "100px" }} src={userAvatar} />
          <Typography variant="h6">{userName}</Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", m: "15px" }}>
            {userSummary}
          </Typography>
        </Box>
      </Paper>

      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{ mt: "1px", mb: "20px" }}
      >
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
};
