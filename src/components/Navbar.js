import React from "react";
import { Box, Container } from "@mui/system";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo_color.png";
import contact from "../assets/contact.png";
import favorite from "../assets/favorite.png";
import shopping from "../assets/shoppingcart.png";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

// redux
import { useSelector, useDispatch } from "react-redux";
import { openDrawer } from "../features/siteFeatures/localFeaturesSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  console.log(openDrawer);
  const drawer = useSelector((state) => state.localFeatures.isDrawerOpen);
  console.log(drawer);
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <IconButton
              onClick={() => dispatch(openDrawer())}
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "gray.dark" }}
            >
              <MenuIcon />
              <IconButton />
            </IconButton>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
          <Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={logo}
              alt="Live from space album cover"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image={favorite}
              alt="Live from space album cover"
            />
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image={contact}
              alt="Live from space album cover"
            />
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image={shopping}
              alt="Live from space album cover"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
