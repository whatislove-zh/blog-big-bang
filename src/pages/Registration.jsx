import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import bg from "../Assets/bg.jpg";
import { StyledButton } from "../components/StyledButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import { Link } from "react-router-dom";

const styleInput = { m: "20px", width: "calc(100% - 30px)" };

export const Registration = () => {
  return (
    <Grid
      container
      sx={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={6}
        lg={4}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h2" sx={{ mt: "20px" }}>
          Sign Up
        </Typography>
        <TextField sx={styleInput} label="Username" variant="outlined" />
        <TextField sx={styleInput} label="Email" variant="outlined" />
        <TextField sx={styleInput} label="Password" variant="outlined" />
        <StyledButton type="submit" title="Sign Up" sx={{ my: "20px" }} />
        <Typography variant="body1">Or Sign Up Using</Typography>
        <Box sx={{ m: "20px" }}>
          <IconButton
            sx={{
              background: "rgb(234, 67, 53)",
              "&:hover, &.Mui-focusVisible": {
                backgroundColor: "rgb(234, 67, 53)",
              },
            }}
          >
            <GoogleIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <IconButton sx={{ p: 0, ml: "30px" }}>
            <FacebookIcon sx={{ color: "#4267B2", fontSize: "40px" }} />
          </IconButton>
        </Box>
        <Typography>Already have an account </Typography>
        <Link to="/login" style={{ textDecoration: "none", marginBottom:"50px" }}>
          <Typography>Login here</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
