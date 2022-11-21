import { Height } from '@mui/icons-material';
import { Box, Typography } from '@mui/material'
import React from 'react'
import bacgroud1 from '../assets/bg/hedaer1.png'
import bacgroud2 from '../assets/bg/hedaer2.png'


const Header = () => {

  const styles = {
    paperContainer: {
      backgroundImage: `url(${bacgroud1})`,
      height: "100vh",
      width: "100%",
    }
  };
  const styles2 = {
    paperContainer2: {
      backgroundImage: `url(${bacgroud2})`,
      height: "100vh",
      width: "100%",
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "20px"}}>
      <Box style={styles.paperContainer} sx={{ height: "60vh"}}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh", color: "neutral.100", textAlign: "center"}}>
          <Typography variant="h2">
            不要在庫を何でも買い取り
            <br/>
            お客様の経営を
            <br/>
            サポートいたします！
          </Typography>
        </Box>
      </Box>
      <Box style={styles2.paperContainer2}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh", color: "neutral.100", textAlign: "center" }}>
          <Typography variant="h2">
          不要在庫を何でも買い取り
            <br/>
            お客様の経営を
            <br/>
            サポートいたします！
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Header