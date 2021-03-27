import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React, { lazy, Suspense, useRef, useState } from "react";
import { AdminHeader } from "../../components/admin-header/admin-header";
import { SideNav } from "../../components/sidenav/sidenav";
import { useOnClickOutside } from "../../utils/hooks";
import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from '../../utils/PrivateRoute';
import { CSSTransition } from "react-transition-group";
import loader from "../../assets/images/wocman.gif";

const Wocman = () => {
  const [openSideNav, setSideNav] = useState(false);
  const node = useRef();

  const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      Component: lazy(() => import("./pages/dashboard")),
    },
    {
      path: "/wocstation",
      name: "WocStation",
      Component: lazy(() => import("./pages/wocstation")),
    },
    {
      path: "/wallet",
      name: "Wallet",
      Component: lazy(() => import("./pages/wallet")),
    },
    {
      path: "/messaging",
      name: "Contact",
      Component: lazy(() => import("./pages/messaging")),
    },
    {
      path: "/profile",
      name: "Contact",
      Component: lazy(() => import("./pages/profile")),
    },
    {
      path: "/settings",
      name: "Contact",
      Component: lazy(() => import("./pages/settings")),
    },
  ];

  useOnClickOutside(node, () => setSideNav(false));

  const toggleSideNav = () => setSideNav(!openSideNav);
  const closeSideNav = () => setSideNav(false);

  return (
    <Flex backgroundColor="wocman.dashboard" h="100vh" position="relative">
      <SideNav
        open={openSideNav}
        toggle={toggleSideNav}
        close={closeSideNav}
        node={node}
      />
      <Flex flex={1} flexDir="column" position="relative" overflowY="scroll">
        <Box position="relative" w="100%" h="100%">
          <AdminHeader toggle={toggleSideNav} />
          <Flex flex={1} h="100%">
            <Suspense
              fallback={
                <Flex w="100vw" h="100vh" align="center" justify="center">
                  <Image src={loader} />
                </Flex>
              }
            >
              <Switch>
                {routes.map(({ path, Component }) => (
                  <PrivateRoute key={path} component={Component} exact path={"/wocman" + path} />
                  //   {/* {({ match }) => (
                  //     <CSSTransition
                  //       in={match != null}
                  //       timeout={{ enter: 300, exit: 150 }}
                  //       unmountOnExit
                  //     >
                  //       <Component />
                  //     </CSSTransition>
                  //   )}
                  // </PrivateRoute> */}
                ))}
                <Redirect from="/wocman" to="/wocman/dashboard" />
                <Route
                  render={() => (
                    <Flex justify="center" align="center" h="100vh" w="100%">
                      <Text
                        fontFamily="Poppins"
                        fontWeight="bold"
                        color="wocman.newsLetter"
                      >
                        Oops, this page does not exist
                      </Text>
                    </Flex>
                  )}
                />
              </Switch>
            </Suspense>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Wocman;
