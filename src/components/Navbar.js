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

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MoreIcon from '@mui/icons-material/MoreVert';


import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';



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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <CardMedia
                            component="img"
                            sx={{ width: 50 }}
                            image={favorite}
                            alt="Live from space album cover"
                        />
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <CardMedia
                            component="img"
                            sx={{ width: 50 }}
                            image={contact}
                            alt="Live from space album cover"
                        />
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <CardMedia
                        component="img"
                        sx={{ width: 50 }}
                        image={shopping}
                        alt="Live from space album cover"
                    />
                </IconButton>
            </MenuItem>
        </Menu>
    );


    return (
        <Box sx={{ padding: "1rem 0" }}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2, color: "gray.dark" }}
                        >
                            <MenuIcon />
                            <IconButton />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: "center", gap: "1rem" } }}>
                            <FacebookOutlinedIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
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




                        <Toolbar>

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 50 }}
                                        image={favorite}
                                        alt="Live from space album cover"
                                    />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 50 }}
                                        image={contact}
                                        alt="Live from space album cover"
                                    />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 50 }}
                                        image={shopping}
                                        alt="Live from space album cover"
                                    />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                        {renderMobileMenu}
                        {renderMenu}
                    </Box>
                </Box>
            </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
