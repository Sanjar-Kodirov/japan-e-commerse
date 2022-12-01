import React from "react";
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
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Sidebar />
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
