import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Home } from "./containers/home/home";
import customTheme from "./theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "./history";
import { About } from "./containers/about/about";
import { Services } from "./containers/services/services";
import { Contact } from "./containers/contact/contact";
import { Login } from "./containers/login/login";
import { Register } from "./containers/register/register";
import { SearchPage } from "./containers/search/search";
import { Provider } from "react-redux";
import { configureStore } from "./state/store";
import { TransitionGroup, Transition } from "react-transition-group";
import { exit, play } from "./utils/animations";
import { VerifyEmail } from "./containers/verify-email/verify-email";
import { AccountSetUp } from "./containers/account-setup/account-setup";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Box className="App">
          <BrowserRouter history={history}>
            <Route
              render={({ location }) => {
                const { pathname, key } = location;
                return (
                  <TransitionGroup component={null}>
                    <Transition
                      unmountOnExit
                      key={key}
                      appear={true}
                      onEnter={(node, appears) => play(pathname, node, appears)}
                      onExit={(node, appears) => exit(node, appears)}
                      timeout={{ enter: 750, exit: 150 }}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/verify-email" component={VerifyEmail} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/account-setup" component={AccountSetUp} />
                      </Switch>
                    </Transition>
                  </TransitionGroup>
                );
              }}
            />
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
