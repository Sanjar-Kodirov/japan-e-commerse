import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function ActionAreaCard({ product }) {
  const { title, price, image } = product;
  return (
    <Grid
      justifyContent="center"
      // alignItems="center"
      item
      xs={12}
      sm={12}
      md={6}
      lg={4}
    >
      <Link underline="none" to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <Box sx={{ mx: "auto" }} variant="div">
          <Card
            sx={{
              maxWidth: 345,
              mx: "auto",
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
                image={image}
                alt="green iguana"
              />
              <CardContent sx={{ backgroundColor: "none", padding: "10px" }}>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="p" color="secondary">
                  ￥{price}( 税込 )
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Link>
     
    </Grid>
  );
}
