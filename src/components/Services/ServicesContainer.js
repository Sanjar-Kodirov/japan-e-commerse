import { Box } from "@mui/system";
import React from "react";
import ServicesCard from "./ServicesCard";
import Sell1 from "../../assets/sell_step1.png";
import Sell2 from "../../assets/sell_step2.png";
import Sell3 from "../../assets/sell_step3.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
const ServicesContainer = ({ data = [], title }) => {
  const services = data.map((item) => {
    const { img, title } = item;
    return (
      <ServicesCard key={title} img={img} title="STEP1" subTitle={title} />
    );
  });
  return (
    <Box sx={{ py: 8 }}>
      <Typography sx={{ textAlign: "center", pb: 2 }} variant="h5">
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {services}
        {/* <ServicesCard
          img={Sell1}
          title="STEP1"
          subTitle="セール品や処分品を売却す ることで高利益商品に集中 できる!"
        />
        <ArrowForwardIosIcon sx={{ fontSize: 40, color: "error.light" }} />
        <ServicesCard
          img={Sell2}
          title="STEP1"
          subTitle="セール品や処分品を売却す ることで高利益商品に集中 できる!"
        />
        <ArrowForwardIosIcon sx={{ fontSize: 40, color: "error.light" }} />
        <ServicesCard
          img={Sell3}
          title="STEP1"
          subTitle="セール品や処分品を売却す ることで高利益商品に集中 できる!"
        /> */}
      </Box>
    </Box>
  );
};

export default ServicesContainer;
