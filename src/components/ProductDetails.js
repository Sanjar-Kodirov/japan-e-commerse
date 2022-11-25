import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import CardMedia from "@mui/material/CardMedia";
import BoxBorder from "./BoxBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CircularProgress from "@mui/material/CircularProgress";

import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProduct } from "../features/api/productsSlice";
import { useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const product = useSelector(selectProduct);

  console.log(product);
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  if (!product) {
    return (
      <Layout>
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Box sx={{ my: 4 }}>
            <CardMedia
              component="img"
              // image="https://i.postimg.cc/Lssnb2TT/product1.jpg"
              image={product.image}
              alt="green iguana"
              sx={{ width: "50%", m: "auto" }}
            />
          </Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={7} sx={{ display: "flex", alignItems: "center" }}>
              <Item
                sx={{
                  background: "none",
                  boxShadow: "none",
                  borderRadius: "0",
                }}
              >
                <Box align="left">
                  <Typography variant="subtitle">
                    商品番号：123456789　　商品コード：1234abc
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "error.main", my: 1 }}
                  >
                    メーカー：テキストテキスト
                  </Typography>
                  <Typography variant="h3">
                    {product.title}
                    {/* テキストテキストテキスト */}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ my: 2 }}>
                    商品状態：良い
                  </Typography>

                  <Typography variant="p">
                    {product.description}
                    {/* テキストテキストテキストテキストテキストテキストテキストテキス
                    トテキストテキストテキストテキストテキストテキストテキストテキ
                    ストテキストテキストテキストテキストテキストテキストテキストテ
                    キストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキスト */}
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item md={5} sx={{ width: "100%" }}>
              <Item sx={{ backgroundColor: "neutral.200", borderRadius: "0" }}>
                <Box sx={{ padding: "2rem 1rem" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                      width: "300px",
                    }}
                  >
                    <Typography variant="p">価格</Typography>
                    <Typography variant="h5" sx={{ color: "error.main" }}>
                      ￥00,000（税込）
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                      padding: "1rem 0",
                    }}
                  >
                    <Typography variant="p">送料</Typography>
                    <Typography variant="h6">
                      ￥{product.price}( 税込 )
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <Typography variant="p">数量</Typography>
                    <Box sx={{ minWidth: 120, my: 2 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "0",
                        backgroundColor: "secondary.light",
                        color: "neutral.100",
                      }}
                    >
                      <ShoppingCartOutlinedIcon /> 買い物かごに入れる
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "0",
                        borderColor: "warning.dark",
                        color: "warning.dark",
                      }}
                    >
                      <StarIcon /> お気に入りに追加
                    </Button>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
          <BoxBorder />
          <Typography variant="h6">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキスト
          </Typography>
          <Box sx={{ flexGrow: 1, my: 4 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Item>
                  <CardMedia
                    component="img"
                    image="https://i.postimg.cc/Lssnb2TT/product1.jpg"
                    alt="green iguana"
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <CardMedia
                    component="img"
                    image="https://i.postimg.cc/Lssnb2TT/product1.jpg"
                    alt="green iguana"
                  />
                </Item>
              </Grid>
              <Grid item xs={16}>
                <Item>
                  <CardMedia
                    component="img"
                    image="https://i.postimg.cc/Lssnb2TT/product1.jpg"
                    alt="green iguana"
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
