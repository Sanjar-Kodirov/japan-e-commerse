import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import imgCard from "../assets/product1.jpg";
import { Container } from "@mui/system";

export default function ActionAreaCard() {
  return (
    <Box>
      <Container>
        <Card
          sx={{
            maxWidth: 345,
            border: "none",
            borderRadius: "0",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={imgCard}
              alt="green iguana"
            />
            <CardContent sx={{ backgroundColor: "none", padding: "10px" }}>
              <Typography gutterBottom variant="h6" component="div">
                商品名商品名商品名
              </Typography>
              <Typography variant="p" color="secondary">
                ￥0,000( 税込 )
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Box>
  );
}
