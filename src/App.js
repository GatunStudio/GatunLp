import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ScrollContent from "./components/ScrollContent";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4E63D9",
        dark: "#051a3b",
        text: "#FFFFFF",
      },
      secondary: {
        main: "#1E2759",
        text: "#ffe5fd",
      },
      text : {
        primary: "#FFFFFF",
        secondary: "#c6c6c6",
      },
      background: {
        default: "#020914",
        paper: "#101222",
      },
    },
  });

  document.body.style.backgroundColor = theme.palette.background.default;
  // set text color
  document.body.style.color = theme.palette.primary.text;
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#020914",
      }}
    >
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Box style={{marginTop:"64px"}}>
          <ScrollContent />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
