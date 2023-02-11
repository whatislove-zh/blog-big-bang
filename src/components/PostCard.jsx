import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const PostCard = (props) => {
  const { title, image, summary, publishTime } = props.post;

  return (
    <Grid item>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          sx={{ height: 250, width: 250 }}
          component="img"
          alt={title}
          image={image}
        />
        <Box sx={{ height: 200, width: 300 }}>
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
                height: "100px"
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
