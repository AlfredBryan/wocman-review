import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Home } from "./containers/home/home";
import customTheme from "./theme";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { About } from "./containers/about/about";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box className="App">
        <Router history={history}>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
