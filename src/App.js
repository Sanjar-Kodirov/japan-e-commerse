import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import Drawer from "./components/Drawer";

function App() {
  const routers = routes.map((route) => (
    <Route key={route.name} path={route.path} element={route.component} />
  ));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>{routers}</Routes>
        <Footer />
        <Drawer />
      </ThemeProvider>
    </>
  );
}

export default App;
