import { Box } from "@mui/material";
import React from "react";
import CenteredTabs from "../components/Tabs";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "", flexGrow: 2, pl: "2rem", pt: "20px" }}>
        <CenteredTabs />
      </Box>
    </>
  );
};

export default Home;
