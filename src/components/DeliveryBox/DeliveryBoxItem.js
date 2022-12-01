import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

const DeliveryBoxItem = ({ item }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Card sx={{ maxWidth: "100%", minHeight: "100%" }}>
        <CardActionArea>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography
              gutterBottom
              variant="h5"
              color="secondary.light"
              component="div"
            >
              {item.title}
            </Typography>
            <Box sx={{ borderBottom: "1px dotted gray", mb: 2 }}></Box>

            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default DeliveryBoxItem;
