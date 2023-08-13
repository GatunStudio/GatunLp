import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ScrollContent from "./components/ScrollContent";


function App() {
  const theme = createTheme({
    typography: {
      "fontFamily": ` Vina Sans , sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 500,
      "fontWeightRegular": 700,
      "fontWeightMedium": 1000
     },
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
        <div style={{marginTop:"64px", width:'100%'}}>
          <ScrollContent />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
