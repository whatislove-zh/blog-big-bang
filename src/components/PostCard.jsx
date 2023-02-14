import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const PostCard = (props) => {
  const { title, image, summary, publishTime } = props.post;
  const isWidthLessSm = useMediaQuery("(min-width:600px)");

  return (
    <Grid item lg={6} md={8} sm={12} xs={12} >
      <Card sx={isWidthLessSm ? { display: "flex", boxShadow:6 } : {}}>
        <CardMedia
          sx={
            isWidthLessSm
              ? { height: 250, minWidth: 200, maxWidth: 200 }
              : { height: 250 }
          }
          component="img"
          alt={title}
          image={image}
        />
        <Box sx={isWidthLessSm? { height: 200 } : {height:250}}>
          <CardContent>
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: "15px" }}>
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
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box;",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "100px",
              }}
            >
              {summary}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Like</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};
