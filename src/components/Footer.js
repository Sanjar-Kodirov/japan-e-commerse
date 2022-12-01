import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import logo from "../assets/logo_color.png";
import ImageListItem from "@mui/material/ImageListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block" } }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "3rem 0",
            }}
          >
            <Box>
              <Typography variant="h3">R.ホールディングス株式会社</Typography>
              <Typography variant="p">
                〒266-0031 千葉県千葉市緑区おゆみ野2-15-9
                <Typography variant="span" sx={{ display: "block" }}>
                  TEL 000-000-0000
                </Typography>
                <Typography variant="span">
                  営業時間 00:00 - 00:00　(●●●を除く)
                </Typography>
              </Typography>
            </Box>
            <ImageListItem sx={{ width: 200, height: 20 }}>
              <img src={`${logo}`} alt="" />
            </ImageListItem>
            <Box>
              <Typography variant="p">メールによるお問い合わせ</Typography>
              <TextField
                id="outlined-basic"
                label="コチラから"
                variant="outlined"
                sx={{
                  display: "block",
                  color: "primary.dark",
                  borderColor: "primary.dark",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "text.primary" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem 0",
              color: "neutral.100",
            }}
          >
            <Box
              sx={{
                display: { sm: "block", md: "flex" },
                alignItems: "center",
                gap: "3rem",
                lineHeight: "60px",
              }}
            >
              <Typography variant="subtitle1">
                <Link to="/about">会社概要</Link>
              </Typography>
              <Typography variant="subtitle1">ご利用ガイド</Typography>
              <Typography variant="subtitle1">
                特定商取引法に基づく表記
              </Typography>
              <Typography variant="subtitle1">プライバシーポリシー</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginTop: 2,
                }}
              >
                <Button variant="contained" sx={{ borderRadius: "0" }}>
                  公式 SNS
                </Button>
                <FacebookOutlinedIcon />
                <InstagramIcon />
                <TwitterIcon />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
