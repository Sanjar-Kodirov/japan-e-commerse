import {
  ArrowRight,
  Facebook,
  Instagram,
  Search,
  Twitter,
} from "@mui/icons-material";
import { Typography, InputAdornment, TextField } from "@mui/material";
// import { categories, content } from "../_mock_/categories";
import { content } from "../_mock_/categories";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";

import {
  selectProductCategories,
  fetchProductsByCategory,
} from "../features/api/productsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectProductCategories);

  const handleClick = (event) => {
    dispatch(fetchProductsByCategory(event));
  };

  const sidebarItems = categories.map((item) => {
    return (
      <Box
        key={item}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "sizeLarge",
          pl: "20px",
        }}
      >
        <Typography
          sx={{
            my: "16px",
            py: "2px",
            px: "10px",
            borderRadius: "5px",
            // mx: "sizeSmall",
            cursor: "pointer",
            "&:hover": {
              color: "white",
              backgroundColor: "primary.main",
            },
          }}
          variant="p"
          onClick={() => handleClick(item)}
        >
          {item}
        </Typography>
        <ArrowRight
          sx={{
            color: "primary.main",
          }}
        />
      </Box>
    );
  });

  const contentList = content.map((item) => {
    return (
      <Box key={item}>
        <Typography
          sx={{
            py: "20px",
            mx: "sizeSmall",
            display: "flex",
            alignItems: "center",
          }}
          variant="p"
        >
          <ArrowRight
            sx={{
              color: "",
            }}
          />
          {item}
        </Typography>
      </Box>
    );
  });

  return (
    <Box sx={{ width: "20%" }}>
      <Typography
        sx={{
          my: "20px",
        }}
        variant="h5"
      >
        商品検索
      </Typography>

      <TextField
        sx={{
          mb: "40px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search
                sx={{
                  color: "primary.main",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      <Typography
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          p: "20px",
        }}
      >
        カテゴリー
      </Typography>
      {sidebarItems}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "40px",
        }}
      >
        <Typography
          sx={{
            color: "gray.main",
          }}
          variant="h6"
        >
          コンテンツ
        </Typography>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "15px",
          }}
          variant="h6"
        >
          contents
        </Typography>
      </Box>
      {contentList}

      <Box
        sx={{
          backgroundColor: "#d2145a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: "12px",
          px: "25px",
          mb: "10px",
        }}
      >
        <Instagram sx={{ fontSize: "45px" }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "10px" }} variant="p">
            Yorozuya公式
          </Typography>
          <Typography variant="h6">Instagram</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "info.main",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: "12px",
          px: "25px",
          mb: "10px",
        }}
      >
        <Twitter sx={{ fontSize: "45px" }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "10px" }} variant="p">
            Yorozuya公式
          </Typography>
          <Typography variant="h6">Twitter</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "info.dark",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: "12px",
          px: "25px",
          mb: "10px",
        }}
      >
        <Facebook sx={{ fontSize: "45px" }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "10px" }} variant="p">
            Yorozuya公式
          </Typography>
          <Typography variant="h6">Facebook</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
