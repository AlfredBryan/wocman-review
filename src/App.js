import * as React from "react";
import { Box, Text, Flex, Image, useToast } from "@chakra-ui/core";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import { configureStore } from "./state/store";
import { CSSTransition } from "react-transition-group";
import { lazy, Suspense } from "react";
import { axios } from "./utils/axios";
import { ShowMessage } from "./utils/alert";
import loader from "./assets/images/wocman.gif";

const store = configureStore();

function App() {
  const toast = useToast();

  React.useEffect(() => {
    axios.interceptors.response.use(
      (res) => Promise.resolve(res),
      (error) => {
        if (!error?.response) {
          ShowMessage(
            "Error",
            "Please check your internet connection",
            "error",
            toast
          );
        }

        if (error?.response.status === 403) {
          setTimeout(() => {
            history.replace("/login");
            localStorage.clear();
            window.location.reload();
          }, 0);
        }
        if (error?.response.status === 401) {
          localStorage.clear();
        }

        return Promise.reject(error);
      }
    );
    // eslint-disable-next-line
  }, []);

  const routes = [
    {
      path: "/",
      name: "Home",
      Component: lazy(() => import("./containers/home/home")),
    },
    {
      path: "/about",
      name: "About",
      Component: lazy(() => import("./containers/about/about")),
    },
    {
      path: "/services",
      name: "Contact",
      Component: lazy(() => import("./containers/services/services")),
    },
    {
      path: "/contact",
      name: "Contact",
      Component: lazy(() => import("./containers/contact/contact")),
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      Component: lazy(() =>
        import("./containers/privacy-policy/privacy-policy")
      ),
    },
    {
      path: "/login",
      name: "Contact",
      Component: lazy(() => import("./containers/login/login")),
    },
    {
      path: "/forgot-password",
      name: "Forgot Password",
      Component: lazy(() => import("./containers/forgot-password")),
    },
    {
      path: "/reset-password",
      name: "Reset Password",
      Component: lazy(() => import("./containers/reset-password")),
    },
    {
      path: "/verify-otp",
      name: "Verify OTP",
      Component: lazy(() => import("./containers/verify-otp")),
    },
    {
      path: "/register",
      name: "Contact",
      Component: lazy(() => import("./containers/register/register")),
    },
    {
      path: "/enter-otp",
      name: "Contact",
      Component: lazy(() => import("./containers/enter-otp/otp")),
    },
    {
      path: "/search",
      name: "Contact",
      Component: lazy(() => import("./containers/search/search")),
    },
    {
      path: "/account-setup",
      name: "Contact",
      Component: lazy(() => import("./containers/account-setup/account-setup")),
    },
    {
      path: "/wocman",
      name: "Contact",
      Component: lazy(() => import("./containers/wocman")),
    },
    {
      path: "/add-bank",
      name: "Add Bank",
      Component: lazy(() => import("./containers/wocman/pages/add-bank")),
    },
    {
      path: "/customer",
      name: "Contact",
      Component: lazy(() => import("./containers/customer")),
    },
  ];
  return (
    <Provider store={store}>
      <Box className="App">
        <Suspense
          fallback={
            <Flex w="100vw" h="100vh" align="center" justify="center">
              <Image src={loader} />
            </Flex>
          }
        >
          <BrowserRouter history={history}>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  exact={path !== "/wocman" && path !== "/customer"}
                  path={path}
                >
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
        </Suspense>
      </Box>
    </Provider>
  );
}

export default App;
