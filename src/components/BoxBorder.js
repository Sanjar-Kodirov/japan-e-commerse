import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const BoxBorder = () => {
  return (
    <Box>
      <Box
        sx={{
          my: 4,
          borderLeft: "5px solid",
          borderColor: "warning.dark",
          padding: "5px 10px",
          backgroundColor: "primary.light",
        }}
      >
        <Typography variant="subtitle1">商品詳細</Typography>
      </Box>
    </Box>
  );
};

export default BoxBorder;
