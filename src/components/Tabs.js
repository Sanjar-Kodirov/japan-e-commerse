import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeliveryBox from "./DeliveryBox/DeliveryBox";
import { wantToSellCards, wantToBuyCards } from "../_mock_/deliveryCardInfo";

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

  return (
    <Box sx={{ width: "100%" }}>
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
        <DeliveryBox data={wantToSellCards} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DeliveryBox data={wantToBuyCards} />
      </TabPanel>
    </Box>
  );
}
