import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography backgroundColor="" color="">
          <Navbar />
          hello form murat
          <h1>this one is true one</h1>
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
