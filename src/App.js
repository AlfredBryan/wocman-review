import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Home } from "./containers/home/home";
import customTheme from "./theme";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { About } from "./containers/about/about";
import { Services } from "./containers/services/services";
import { Contact } from "./containers/contact/contact";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box className="App">
        <Router history={history}>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
