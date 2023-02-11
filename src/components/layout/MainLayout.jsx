import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Box sx={{minHeight:"85vh"}}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};
