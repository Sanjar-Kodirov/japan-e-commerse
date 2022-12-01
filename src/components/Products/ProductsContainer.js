import React from "react";

import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import { Grid, Typography, Box } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductsContainer = ({ status, data = [] }) => {
  const products = data.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  if (status === "loading") {
    return <LinearProgress />;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        variant="div"
      >
        <Typography
          sx={{
            textAlign: "right",
            my: 3,
            mr: 2,
            cursor: "pointer",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          variant="h6"
          おすすめ順
        >
          商品一覧 |
        </Typography>
        <Typography
          sx={{
            textAlign: "right",
            my: 3,
            mr: 2,
            cursor: "pointer",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          variant="h6"
          おすすめ順
        >
          おすすめ順 |
        </Typography>
        <Typography
          sx={{
            textAlign: "right",
            my: 3,
            mr: 2,
            cursor: "pointer",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          variant="h6"
          おすすめ順
        >
          価格が安い順
        </Typography>
        <Typography
          sx={{
            textAlign: "right",
            my: 3,
            mr: 2,
            cursor: "pointer",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          variant="h6"
          おすすめ順
        >
          | 価格が高い順
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          pl: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 2,
            xl: 2,
          },
          // pt: 2,
        }}
      >
        {products}

        <Stack spacing={2} sx={{ m: "auto", py: 4 }}>
          <Pagination count={3} align="center" variant="outlined" shape="rounded"/>
        </Stack>

      </Grid>
    </>
  );
};

export default ProductsContainer;
