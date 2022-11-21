import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Sidebar />
          <Outlet sx={{ flexGrow: 1 }} />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
