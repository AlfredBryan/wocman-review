import { ThemeProvider, CSSReset, Box, Text, Flex } from "@chakra-ui/core";
import { Home } from "./containers/home/home";
import customTheme from "./theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "./history";
import { About } from "./containers/about/about";
import { Services } from "./containers/services/services";
import { Contact } from "./containers/contact/contact";
import { Login } from "./containers/login/login";
import { Register } from "./containers/register/register";
import { SearchPage } from "./containers/search/search";
import { Provider } from "react-redux";
import { configureStore } from "./state/store";
import { CSSTransition } from "react-transition-group";
import { VerifyEmail } from "./containers/verify-email/verify-email";
import { AccountSetUp } from "./containers/account-setup/account-setup";
import { Wocman } from "./containers/wocman";
import { PrivacyPolicy } from "./containers/privacy-policy/privacy-policy";

const store = configureStore();

function App() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/services", name: "Contact", Component: Services },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/privacy-policy", name: "Privacy Policy", Component: PrivacyPolicy },
    { path: "/login", name: "Contact", Component: Login },
    { path: "/register", name: "Contact", Component: Register },
    { path: "/verify-email", name: "Contact", Component: VerifyEmail },
    { path: "/search", name: "Contact", Component: SearchPage },
    { path: "/account-setup", name: "Contact", Component: AccountSetUp },
    { path: "/wocman", name: "Contact", Component: Wocman },
  ];
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Box className="App">
          <BrowserRouter history={history}>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact={path !== "/wocman"} path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={{ enter: 300, exit: 150 }}
                      unmountOnExit
                    >
                      <Component />
                    </CSSTransition>
                  )}
                </Route>
              ))}
              <Route
                render={() => (
                  <Flex
                    justify="center"
                    align="center"
                    h="100vh"
                    backgroundColor="wocman.contact"
                  >
                    <Text fontFamily="Poppins" fontWeight="bold" color="white">
                      Oops, this page does not exist
                    </Text>
                  </Flex>
                )}
              />
            </Switch>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
