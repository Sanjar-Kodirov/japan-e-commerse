import { Box, Typography } from "@mui/material";
import React from "react";
import DeliveryBoxItem from "./DeliveryBoxItem";
import { Grid } from "@mui/material";
const DeliveryBox = ({ data = [], children }) => {
  const boxes = data.map((item) => {
    return <DeliveryBoxItem key={item.id} item={item} />;
  });
  return (
    <Box sx={{ textAlign: "center", backgroundColor: "divider", p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Yorozuya 通販サイトの
      </Typography>
      <Box sx={{ borderBottom: "1px dotted gray", mb: 2 }}></Box>
      <Grid container spacing={2}>
        {boxes}
        {children}
      </Grid>
    </Box>
  );
};

export default DeliveryBox;
