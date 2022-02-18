import { Box, Image, Link, List, ListItem, Text } from "@chakra-ui/core";
import { useHistory, useLocation } from "react-router";
import { NavLink as ReactLink } from "react-router-dom";
import logo from "../../assets/icons/logo-colored.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import wocstation from "../../assets/icons/wocstation.svg";
import wallet from "../../assets/icons/wallet.svg";
import messaging from "../../assets/icons/messaging.svg";
import profile from "../../assets/icons/profile.svg";
import settings from "../../assets/icons/settings.svg";
import dashboardActive from "../../assets/icons/dashboard-white.svg";
import wocstationActive from "../../assets/icons/wocstation-white.svg";
import walletActive from "../../assets/icons/wallet-white.svg";
import messagingActive from "../../assets/icons/messaging-white.svg";
import profileActive from "../../assets/icons/profile-white.svg";
import settingsActive from "../../assets/icons/settings-white.svg";
import { useEffect, useState } from "react";

export const CustomerSideNav = (props) => {
  const history = useHistory();
  const [minHeight, setMinHeight] = useState(window.innerHeight);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      setMinHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  });

  // const location = useLocation();

  const dashboardLinks = [
    {
      name: "Job",
      to: "/job",
      icon: dashboard,
      icon_active: dashboardActive,
    },
    {
      name: "Wocstation",
      to: "/wocstation",
      icon: wocstation,
      icon_active: wocstationActive,
    },
    {
      name: "Messaging",
      to: "/messaging",
      icon: messaging,
      icon_active: messagingActive,
    },
    {
      name: "Profile",
      to: "/profile",
      icon: profile,
      icon_active: profileActive,
    },
    {
      name: "Settings",
      to: "/settings",
      icon: settings,
      icon_active: settingsActive,
    },
  ];
  return (
    <Box
      ref={props.node}
      d={{ base: props.open ? "flex" : "none", lg: "flex" }}
      w={{ base: "50%", sm: "40%", md: "35%", lg: "30%", xl: "20%" }}
      h={minHeight}
      flexDirection="column"
      backgroundColor="wocman.sideNav"
      py={{ base: 6, md: 12 }}
      zIndex="10"
      overflowY="auto"
      position={{ base: "fixed", lg: "static" }}
      //   transform={{ base: "translateX(-2000px)", lg: "translateX(0)" }}
      transition="translate ease-in 1s"
    >
      <Box px={{ base: 8, md: 16 }}>
        <Image
          // objectFit="cover"
          // alt="wocman logo"
          overflow="hidden"
          src={logo}
          outline="none"
          cursor="pointer"
          border="none"
          // fallbackSrc="https://via.placeholder.com/30"
          onClick={() => history.push("/")}
          d={!loaded ? "none" : "block"}
          onLoad={() => setLoaded(true)}
          h={{ base: "40px", md: "60px", lg: "70px" }}
          w={{ base: "40px", md: "60px", lg: "70px" }}
          transform="scale(3.8)"
        />
      </Box>
      <List
        styleType="none"
        display="flex"
        w="100%"
        fontFamily="Poppins"
        flexDir="column"
        align="center"
        py={8}
      >
        {dashboardLinks.map((item, index) => {
          return (
            <ListItem
              key={index}
              color={
                location.pathname.startsWith("/customer" + item.to)
                  ? "white"
                  : "#778899"
              }
              px={{ base: 8, md: 16 }}
              py={{ base: 4, md: 8 }}
              w="100%"
              d="flex"
              alignItems="center"
              _hover={{
                opacity: location.pathname.startsWith("/customer" + item.to)
                  ? ""
                  : "0.7",
              }}
              backgroundColor={
                location.pathname.startsWith("/customer" + item.to)
                  ? "wocman.contact"
                  : "inherit"
              }
            >
              <Image
                src={
                  location.pathname.startsWith("/customer" + item.to)
                    ? item.icon_active
                    : item.icon
                }
                color="currentColor"
              />
              <Link
                as={ReactLink}
                to={"/customer" + item.to}
                lineHeight="27px"
                onClick={props.close}
                ml={{ base: 4, md: 8 }}
                _focus={{ outline: "none" }}
                _hover={{ textDecor: "none " }}
                // className={`link ${
                //   props.location.pathname === item.to ? "active" : ""
                // }`}
              >
                <Text
                  fontFamily="Poppins"
                  fontSize={{ base: "0.7rem", md: "1rem" }}
                >
                  {item.name}
                </Text>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
