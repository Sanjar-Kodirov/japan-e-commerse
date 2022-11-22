import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductStatus,
} from "../../features/api/productsSlice";
import { Grid, Typography } from "@mui/material";
const ProductsContainer = ({ data }) => {
  const productsData = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);

  const products = productsData.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ pl: 2, pt: 2 }}>
        {products}
      </Grid>
    </>
  );
};

export default ProductsContainer;
