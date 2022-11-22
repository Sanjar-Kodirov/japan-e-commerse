import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import About from './components/About';
import ProductCategory from './components/ProductCategory'
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Header />
        <ProductCategory/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<ProductCard />} />
          </Route>
        </Routes>
        {/* <About/> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
