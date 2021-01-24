import { Flex, Text } from "@chakra-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../../utils/hooks";
import { Redirect, Route, Switch, useLocation } from "react-router";
import { CSSTransition } from "react-transition-group";
import { ContactNav } from "../components/contact-nav";
import { Messaging } from "../components/messaging";

const MessagePage = (props) => {
  const [openSideNav, setSideNav] = useState(false);
  const node = useRef();
  const location = useLocation();

  const routes = [
    {
      path: "/",
      name: "Contact",
      Component: DefaultMessage,
    },
    {
      path: "/contact/:id",
      name: "Contact",
      Component: Messaging,
    },
  ];

  useEffect(() => {
    if (location.pathname === "/wocman/messaging") {
      setSideNav(true);
    }
  }, [location]);

  useOnClickOutside(node, () => setSideNav(false));

  const toggleSideNav = () => setSideNav(!openSideNav);
  const closeSideNav = () => setSideNav(false);

  return (
    <Flex
      backgroundColor="wocman.dashboard"
      h="100%"
      position="relative"
      flex={1}
    >
      <ContactNav
        open={openSideNav}
        toggle={toggleSideNav}
        close={closeSideNav}
        node={node}
      />
      <Flex flex={1} flexDir="column" position="relative" overflowY="scroll">
        <Flex flex={1} h="auto">
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={"/wocman/messaging" + path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={{ enter: 300, exit: 150 }}
                    unmountOnExit
                  >
                    <Component
                      isMessageScreen
                      {...props}
                      toggle={toggleSideNav}
                    />
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Redirect from="/wocman" to="/wocman/messaging" />
            <Route
              render={() => (
                <Flex justify="center" align="center" h="100%" w="100%">
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
      </Flex>
    </Flex>
  );
};

const DefaultMessage = () => (
  <Flex
    h="100%"
    w="100%"
    align="center"
    flexDir="column"
    textAlign="center"
    px={4}
    backgroundColor="white"
  >
    <Text fontFamily="Poppins" mt={48}>
      You currently have no messages selected
    </Text>
    <Text as="small" fontFamily="Poppins" mt={4}>
      Please choose from existing messages or start a new one
    </Text>
  </Flex>
);

export default MessagePage;
