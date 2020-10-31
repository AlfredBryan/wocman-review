import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Home } from "./containers/home/home";
import customTheme from "./theme";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box className="App">
        <Home/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
