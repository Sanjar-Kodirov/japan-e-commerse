import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "", flexGrow: 2, pl: "2rem", pt: "20px" }}>
        <Layout>
          <Tabs />
        </Layout>
      </Box>
    </>
  );
};

export default Home;
