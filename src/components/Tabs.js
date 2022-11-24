import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeliveryBox from "./DeliveryBox/DeliveryBox";
import { ImageListItem } from "@mui/material";
import { wantToSellCards, wantToBuyCards } from "../_mock_/deliveryCardInfo";
import ProductsContainer from "./Products/ProductsContainer";
import ProductCategory from "./ProductCategory";
import { useSelector } from "react-redux";
import img from "../assets/buy_banner.jpg";
import free_appraisal from "../assets/free_appraisal.png";
import problem from "../assets/problem.png";
import sell_banner from "../assets/sell_banner.jpg";
import {
  selectAllProducts,
  selectProductStatus,
} from "../features/api/productsSlice";
import ServicesContainer from "./Services/ServicesContainer";
import { buySteps, howToBuy, servicesSteps } from "../_mock_/howToWork";
import Issue from "./Issue/Issue";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `indicator-${index}`,
    "aria-controls": `indicator-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(`value: ${newValue}`);
  };

  //Use handleChange on Tabs, not handleClick on Tab
  const handleClick = (event) => {
    //setValue(event);
    console.log(event);
  };
  const productsData = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);

  return (
    <Box
      sx={{
        width: "100%",
        pl: {
          xs: 0,
          sm: 0,
          md: 2,
          lg: 2,
        },
        pt: 2,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          initialSelectedIndex={0}
          aria-label="indicator example"
          TabIndicatorProps={{
            //hidden: true,
            sx: {
              backgroundColor: "secondary.main",
              height: 10,
              position: "absolute",
              bottom: "-10px",
              zIndex: 10,
              clipPath: "polygon(0 0, 48% 63%, 100% 0)",
            }, //width: "25% !important"
          }}
          sx={{
            overflow: "visible",
            width: "100%",
            "& button": {
              color: "secondary.light",
              borderRadius: {
                border: "1px solid #d84416",
              },
            },
            "& button:focus": {
              backgroundColor: "secondary.light",
              color: "white!important",
            },
          }}
        >
          <Tab
            style={{ minWidth: "50%", marginRight: 10 }}
            onClick={handleClick}
            label="買いたい"
            {...a11yProps(0)}
          />
          <Tab
            style={{ minWidth: "48.5%", color: "secondary.light" }}
            onClick={handleClick}
            label="売りたい"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel
        classes={{
          "& .MuiBox-root": {
            padding: "0px",
          },
        }}
        value={value}
        index={0}
      >
        <Box>
          <DeliveryBox data={wantToSellCards} />
          <ProductsContainer data={productsData.slice(0, 9)} status={status} />
          <ServicesContainer />
          <DeliveryBox>
            <ProductCategory />
          </DeliveryBox>
          <ServicesContainer title="ご利用ステップ" data={buySteps} />
          <ImageListItem
            sx={{
              width: "100%",
              mx: "auto",
              my: 8,
              display: { sm: "none", xs: "none" },
            }}
          >
            <img src={img} alt={"some title"} loading="lazy" />
          </ImageListItem>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DeliveryBox data={wantToBuyCards} />
        <ImageListItem sx={{ width: "100%", mx: "auto", my: 8 }}>
          <img src={free_appraisal} alt={"some title"} loading="lazy" />
        </ImageListItem>

        <ImageListItem sx={{ width: "100%", mx: "auto", my: 8 }}>
          <img src={problem} alt={"some title"} loading="lazy" />
        </ImageListItem>

        <ServicesContainer
          title="在庫買取サービスで解決!!"
          data={servicesSteps}
        />

        <DeliveryBox>
          <ProductCategory />
        </DeliveryBox>
        <ServicesContainer title="買取ステップ" data={howToBuy} />
        <ImageListItem
          sx={{
            width: "100%",
            mx: "auto",
            display: { sm: "none", xs: "none" },
          }}
        >
          <img src={free_appraisal} alt={"some title"} loading="lazy" />
        </ImageListItem>
        <ImageListItem
          sx={{
            width: "100%",
            mx: "auto",
            my: 8,
            display: { md: "block", xs: "none" },
          }}
        >
          <img src={sell_banner} alt={"some title"} loading="lazy" />
        </ImageListItem>
      </TabPanel>
    </Box>
  );
}
