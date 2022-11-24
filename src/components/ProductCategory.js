import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeliveryBox from "./DeliveryBox/DeliveryBox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Container>
        <Grid container spacing={1}>
          {itemData.map((el) => {
            return (
              <Grid key={el.id} item xs={6} md={2.3} sm={4} sx={6}>
                <Card
                  sx={{ maxWidth: 250, borderRadius: "0", m: "auto", p: "0" }}
                >
                  <CardMedia
                    component="img"
                    image={el.img}
                    alt="green iguana"
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

const itemData = [
  {
    img: "https://i.postimg.cc/4yg7JyrR/1-home-appliance.png",
  },
  {
    img: "https://i.postimg.cc/vZ9JnmKN/2-pc.png",
  },
  {
    img: "https://i.postimg.cc/bJ6WPSGs/3-camera.png",
  },
  {
    img: "https://i.postimg.cc/xTNhrC91/4-phone.png",
  },
  {
    img: "https://i.postimg.cc/9MN8K3S9/5-game.png",
  },
  {
    img: "https://i.postimg.cc/T366Cmn6/6-hobby.png",
  },
  {
    img: "https://i.postimg.cc/85jQjbgh/7-instrument.png",
  },
  {
    img: "https://i.postimg.cc/pVJYmMkJ/8-car-bike.png",
  },
  {
    img: "https://i.postimg.cc/wTbNNqNL/9-apparel.png",
  },
  {
    img: "https://i.postimg.cc/rmJ0wMcd/10-shoes.png",
  },
  {
    img: "https://i.postimg.cc/X7hZJ2Mg/11-accessory.png",
  },
  {
    img: "https://i.postimg.cc/hvYGXGYG/12-jewelry.png",
  },
  {
    img: "https://i.postimg.cc/7Yp6Df7s/13-beauty.png",
  },
  {
    img: "https://i.postimg.cc/sgdVqbdb/14-sports-outdoor.png",
  },
  {
    img: "https://i.postimg.cc/kML6M1Pv/15-book-cd-dvd.png",
  },
  {
    img: "https://i.postimg.cc/TP2hNBnf/16-office.png",
  },
  {
    img: "https://i.postimg.cc/y8sNW2Qc/17-diy.png",
  },
];
