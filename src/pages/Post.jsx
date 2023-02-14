import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  CardActions,
  Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const userPost = {
  title: "Test title 1",
  publishTime: "Test time",
  id: 1,
  summary:
    "Test  dfsdfds fsdfdsfsdfd jfhksdfjdfsdfds fsdfdsfsdfd jfhksdfjhsdk fjsdhfksdjfhsdkfjsfdjfhsdkfdfsdfds fsdfdsfsdfd jfhksdfjhsdk fjsdhfksdjfhsdkfjsfdjfhsdkfdfsdfds fsdfdsfsdfd jfhksdfjhsdk fjsdhfksdjfhsdkfjsfdjfhsdkfhsdk fjsdhfksdjfhsdkfjsfdjfhsdkfjsfd",
  image: "https://source.unsplash.com/random",
  userName: "Test User",
  userAvatar: "https://source.unsplash.com/random",
};

export const Post = () => {
  const { title, image, publishTime, summary, userName, userAvatar } = userPost;
  return (
    <Card sx={{ my: "20px", boxShadow: 6 }}>
      <CardContent align="center">
        <Avatar src={userAvatar} sx={{ width: "100px", height: "100px" }} />
        <Typography variant="h5">{userName}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "15px",
          }}
        >
          <AccessTimeIcon
            color={"#363636"}
            sx={{ opacity: 0.6, fontSize: "20px", mr: "10px" }}
          />
          <Typography
            variant="body2"
            color={"#363636"}
            sx={{ opacity: 0.6, mb: "0" }}
            fontSize={14}
          >
            {publishTime}
          </Typography>
        </Box>
        <Typography variant="h3" align="center">
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={{ height: 350 }}
      />
      <CardContent sx={{m:"50px"}}>
        <Typography>{summary}</Typography>
      </CardContent>
      <CardActions sx={{mx:"50px", mb:"25px"}}>
        <Button size="large">Like</Button>
        <Button size="large">Comment</Button>
        <Button size="large">Back to the homescreen</Button>
      </CardActions>
    </Card>
  );
};
