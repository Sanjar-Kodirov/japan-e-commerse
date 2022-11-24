import { Box, Typography, ImageListItem } from "@mui/material";
import React from "react";

const ServicesCard = ({ img, title, subTitle }) => {
  return (
    <Box sx={{ width: 180 }}>
      <Typography variant="p" sx={{ pt: 2, textAlign: "center" }}>
        {/* {title} */}
      </Typography>
      <ImageListItem sx={{ width: 200, mx: "auto", mb: 2 }}>
        <img src={img} alt={title} loading="lazy" />
      </ImageListItem>
      <Typography variant="p" sx={{ pt: 2, textAlign: "center" }}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default ServicesCard;
