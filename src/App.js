import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from './components/ProductCard';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography backgroundColor="" color="">
          {/* <Navbar />
          <ProductCard/>
          <Footer/> */}
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
