import { Box, Divider, Link, List, ListItem, Text } from "@chakra-ui/core";
import { useLocation } from "react-router";
import { NavLink as ReactLink } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { Fragment } from "react";

const PREPEND_LINK = "/wocman/messaging";

const MOCK_AVATAR =
  "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1439.1439a/s150x150/116583025_659529457982256_6712328410517649834_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_-0yCFguyhwAX-59hkb&tp=1&oh=648e6d321031117ac7c492410ee56fbb&oe=602BE246";

const RegularContactNav = (props) => {
  const [minHeight, setMinHeight] = useState(window.innerHeight);
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
      name: "Tayo Olajide",
      to: "/contact/1",
      image: MOCK_AVATAR,
      latestMessage: "When will you come in",
    },
    {
      name: "Musa Hassan",
      to: "/contact/2",
      image: MOCK_AVATAR,
      latestMessage: "When will you come in",
    },
    {
      name: "Joshua Maina",
      to: "/contact/3",
      image: MOCK_AVATAR,
      latestMessage: "When will you come in",
    },
  ];

  return (
    <Box
      ref={props.node}
      d={{ base: props.open ? "flex" : "none", lg: "flex" }}
      w={{ base: "100%", lg: "35%" }}
      h="100vh"
      minH={minHeight}
      flexDirection="column"
      backgroundColor="wocman.dashboard"
      pt={{ base: 6, md: 12 }}
      zIndex="8"
      overflowY="auto"
      position={{ base: "fixed", lg: "sticky" }}
      //   transform={{ base: "translateX(-2000px)", lg: "translateX(0)" }}
      transition="translate ease-in 1s"
    >
      <Box px={{ base: 4, md: 8 }}>
        <Text
          fontFamily="Poppins"
          fontSize={{ base: "1.6rem", md: "2.4rem" }}
          fontWeight="900"
          fontStyle="italic"
        >
          Contacts
        </Text>
      </Box>
      <List
        styleType="none"
        display="flex"
        w="100%"
        fontFamily="Poppins"
        flexDir="column"
        align="center"
        pt={8}
      >
        {dashboardLinks.map((item, index) => {
          return (
            <Fragment key={index}>
              <ListItem
                color={
                  location.pathname !== PREPEND_LINK + item.to
                    ? "#778899"
                    : "#000000"
                }
                backgroundColor={
                  location.pathname !== PREPEND_LINK + item.to
                    ? "transparent"
                    : "#FFFFFF"
                }
                px={{ base: 4, md: 8 }}
                py={{ base: 2, md: 4 }}
                w="100%"
                d="flex"
                alignItems="center"
                _hover={{
                  opacity:
                    location.pathname === PREPEND_LINK + item.to ? "" : "0.7",
                }}
                opacity={
                  location.pathname === PREPEND_LINK + item.to ? "" : "0.7"
                }
              >
                <Avatar image={item.image} />
                <Link
                  as={ReactLink}
                  to={PREPEND_LINK + item.to}
                  lineHeight="27px"
                  onClick={props.close}
                  ml={{ base: 2, md: 4 }}
                  _focus={{ outline: "none" }}
                  _hover={{ textDecor: "none " }}
                  // className={`link ${
                  //   props.location.pathname === item.to ? "active" : ""
                  // }`}
                >
                  <Text
                    fontFamily="Poppins"
                    fontSize={{ base: "0.7rem", md: "1rem" }}
                    fontWeight="bold"
                  >
                    {item.name}
                  </Text>
                  <Text fontFamily="Poppins" as="small">
                    {item.latestMessage}
                  </Text>
                </Link>
              </ListItem>
              <Divider borderColor="#778899" w="100%" d="block" my={0} />
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

const Avatar = (props) => (
  <Box
    bgImage={`url(${props.image})`}
    bgPos="center"
    bgRepeat="no-repeat"
    bg="transparent"
    bgSize="cover"
    marginLeft="-10px"
    border="2px solid #552D1E"
    //   mr={8}
    //   ml={8}
    h={{ base: "25px", xl: "40px" }}
    width={{ base: "25px", xl: "40px" }}
    borderRadius="50%"
  ></Box>
);

// https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1439.1439a/s150x150/116583025_659529457982256_6712328410517649834_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_-0yCFguyhwAX-59hkb&tp=1&oh=648e6d321031117ac7c492410ee56fbb&oe=602BE246

const ContactNav = memo(RegularContactNav);

export { ContactNav };
