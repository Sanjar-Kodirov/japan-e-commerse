import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
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
          {/* <Outlet sx={{ flexGrow: 1 }} /> */}
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
