import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Typography from "@mui/material/Typography";
const Layout = () => {
  let match = useMatch("/");
  let matchProduct = useMatch("/products");
  return (
    <>
      {match?.pathname ? <Header /> : ""}
      {matchProduct?.pathname == "/products" ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 4,
          }}
        >
          <Typography variant="h4">商品一覧</Typography>
        </Box>
      ) : (
        ""
      )}
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
