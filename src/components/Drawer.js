import React from "react";

import {
  Drawer,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  ImageListItem,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import {
  openDrawer,
  closeDrawer,
} from "../features/siteFeatures/localFeaturesSlice";
import img from "../assets/black_white_logo.png";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const MuiDrawer = () => {
  const style = {
    textAlign: "center",
    width: "100%",
    maxWidth: 1000,
    color: "white",
    bgcolor: "background.black",
    height: "100vh",
  };

  const drawerData = [
    {
      id: 1,
      title: "トップページ",
      link: "/",
    },
    {
      id: 2,
      title: "商品一覧",
      link: "/products",
    },
    {
      id: 3,
      title: "ご利用ガイド",
      link: "/contact",
    },
    {
      id: 4,
      title: "特定商取引法に基づく表記",
      link: "/contact",
    },
    {
      id: 5,
      title: "お問い合わせ",
    },
  ];

  const list = drawerData.map((text) => {
    return (
      <Box variant="div" key={text.id}>
        <ListItem key="text" sx={{ textAlign: "center", p: 2 }} button>
          <Link style={{ textAlign: "center" }} to={text.link}>
            <ListItemText sx={{ textAlign: "center" }} primary={text.title} />
          </Link>
        </ListItem>
        <Divider />
      </Box>
    );
  });
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.localFeatures.isDrawerOpen);
  return (
    <Box
      sx={{
        backgroundColor: "background.black",
      }}
    >
      <IconButton
        onClick={() => dispatch(openDrawer())}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => dispatch(closeDrawer())}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "background.black",
            p: 2,
            color: "white",
          }}
        >
          <Close
            onClick={() => dispatch(closeDrawer())}
            sx={{
              fontSize: "3rem",
            }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: 300,
              md: 450,
              lg: 450,
              xl: 450,
            },
            backgroundColor: "background.black",
          }}
          role="presentation"
          textAlign="center"
        >
          <List sx={style} component="nav" aria-label="mailbox folders">
            {list}

            <Box sx={{ mt: 4, width: "90%", mx: "auto" }}>
              <TextField
                sx={{
                  width: "90%",
                  mb: 4,
                  p: 0.5,
                  color: "white",
                  backgroundColor: "white",
                }}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search
                        sx={{
                          my: 4,
                          color: "primary.main",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  width: "90%",
                  mx: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button sx={{ width: "49%" }} variant="contained">
                  新規会員登録
                </Button>
                <Button sx={{ width: "49%" }} variant="contained">
                  ログイン
                </Button>
              </Box>
            </Box>
            <ImageListItem
              sx={{
                width: "50%",
                mx: "auto",
                my: 8,
              }}
            >
              <img src={img} alt={"some title"} loading="lazy" />
            </ImageListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default MuiDrawer;
