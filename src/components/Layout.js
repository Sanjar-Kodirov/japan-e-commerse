import React from "react";
import { Outlet } from "@mui/icons-material";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <Sidebar />
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
