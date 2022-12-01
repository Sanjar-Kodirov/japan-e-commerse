import React from "react";
import { Box, Typography } from "@mui/material";
import ProductsContainer from "../components/Products/ProductsContainer";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";
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
      <Typography variant="h4" sx={{ py: 2, textAlign: "center" }}>
        商品一覧
      </Typography>

      <Layout>
        <Box
          sx={{
            width: "100%",
          }}
          variant="div"
        >
          <ProductsContainer data={productsData} status={status} />
          <Stack spacing={2} sx={{ width: "20%", mx: "auto", py: 4 }}>
            <Pagination
              count={2}
              align="center"
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default Products;
