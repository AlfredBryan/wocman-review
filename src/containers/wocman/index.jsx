import { Box, Flex, Text } from "@chakra-ui/core";
import React, { useRef, useState } from "react";
import { AdminHeader } from "../../components/admin-header/admin-header";
import { SideNav } from "../../components/sidenav/sidenav";
import { useOnClickOutside } from "../../utils/hooks";
import { Dashboard } from "./pages/dashboard";
import { WocStation } from "./pages/wocstation";
import { Wallet } from "./pages/wallet";
import { Profile } from "./pages/profile";
import { MessagePage } from "./pages/messaging";
import { Settings } from "./pages/settings";
import { Redirect, Route, Switch } from "react-router";
import { CSSTransition } from "react-transition-group";

export const Wocman = () => {
  const [openSideNav, setSideNav] = useState(false);
  const node = useRef();

  const routes = [
    { path: "/dashboard", name: "Dashboard", Component: Dashboard },
    { path: "/wocstation", name: "WocStation", Component: WocStation },
    { path: "/wallet", name: "Wallet", Component: Wallet },
    { path: "/messaging", name: "Contact", Component: MessagePage },
    { path: "/profile", name: "Contact", Component: Profile },
    { path: "/settings", name: "Contact", Component: Settings },
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
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={"/wocman" + path}>
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
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
