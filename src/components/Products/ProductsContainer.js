import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";

import { Grid, Typography } from "@mui/material";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ProductsContainer = ({ status, data = [] }) => {
  const products = data.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  if (status === "loading") {
    return <LinearProgress />;
  }



  return (
    <>
      <Grid container spacing={2} sx={{ pl: 2, pt: 2 }}>
        {products}
        <Stack spacing={2} sx={{ m: "auto", py: 4 }}>
          <Pagination count={2} align="center" variant="outlined" shape="rounded"/>
        </Stack>
      </Grid>
    </>
  );
};

export default ProductsContainer;
