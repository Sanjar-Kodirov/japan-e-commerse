import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "",
          flexGrow: 2,
          pl: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 2,
          },
          pt: "20px",
        }}
      >
        <Layout>
          <Tabs />
        </Layout>
      </Box>
    </>
  );
};

export default Home;
