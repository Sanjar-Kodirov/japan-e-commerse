import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography backgroundColor="" color="">
          {/* <Navbar /> */}
          <Footer/>
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
