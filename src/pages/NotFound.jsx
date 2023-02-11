import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import notFound404 from "../Assets/404-error.svg";

const errorMassage = {
  title: "Oops, This Page Could Not Be Found.",
  message:
    "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
};

export const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img height="280px" src={notFound404} alt="error404" />
      <Typography sx={{ my: "35px" }} variant="h4">
        {errorMassage.title}
      </Typography>
      <Typography variant="body1">{errorMassage.message}</Typography>
      <Link to="/" style={{textDecoration:"none"}}>
        <Button variant="outlined" sx={{ my: "35px" }}>
          Back to the Home page
        </Button>
      </Link>
    </Box>
  );
};
