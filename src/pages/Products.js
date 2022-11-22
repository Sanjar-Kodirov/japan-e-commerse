import React from "react";
import { Typography } from "@mui/material";
import ProductsContainer from "../components/Products/ProductsContainer";
import { Container } from "@mui/system";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductStatus,
} from "../features/api/productsSlice";
const Products = () => {
  const productsData = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);
  return (
    <>
      <Typography variant="h4" sx={{ pt: 2, textAlign: "center" }}>
        商品一覧
      </Typography>
      <Layout>
        <ProductsContainer data={productsData} status={status} />
      </Layout>
    </>
  );
};

export default Products;
