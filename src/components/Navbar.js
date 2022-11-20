import React from "react";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Facebook, Instagram } from "@mui/icons-material";
const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "primary.contrastText",
            padding: "sizeLarge",
          }}
        >
          <Box variant="h1">
            <Facebook sx={{ color: "primary.light" }} />
            <Instagram />
          </Box>
          <Typography variant="h1">Navbar</Typography>
          <Typography variant="h1">Navbar</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
