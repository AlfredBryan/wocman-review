import { Box, Flex, Image, List, Link, ListItem, Text } from "@chakra-ui/core";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { Link as ReactLink } from "react-router-dom";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";

export const FooterComponent = (props) => {
  const navStuff = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "Contact us",
      to: "/contact",
    },
  ];

  return (
    <Flex bg="wocman.typography1" flexDir="column" py={8}>
      <Flex flexDir={["column", "column", "row", "row", "row"]}>
        <Box flex="1"></Box>
        <Box
          flex="2"
          d="flex"
          justifyContent="space-around"
          flexDir={["column", "column", "row", "row", "row"]}
          px={[6, 15, 0, 0, 0]}
          align="center"
        >
          <List
            styleType="none"
            fontFamily="Poppins"
            color="#F6F1F1"
            fontWeight="normal"
            align="center"
            mb={[10, 8, 0, 0, 0]}
          >
            <Fade bottom delay={500} duration={2000}>
              <ListItem className="mb-4 text-sm">POLICY</ListItem>
            </Fade>
            {/* <ListItem className="mb-4 text-sm">Terms & Conditions</ListItem> */}
            <Fade opposite delay={500} duration={2000}>
              <ListItem className="mb-4 text-sm">
                <Link
                  as={ReactLink}
                  to={"/privacy-policy"}
                  _focus={{ outline: "none" }}
                  className={`link ${
                    props.location.pathname === "/privacy-policy"
                      ? "active"
                      : ""
                  }`}
                  textDecor={
                    props.location.pathname === "/privacy-policy"
                      ? "underline"
                      : ""
                  }
                >
                  Privacy Policy
                </Link>
              </ListItem>
            </Fade>
          </List>
          <List
            styleType="none"
            fontFamily="Poppins"
            color="#F6F1F1"
            fontWeight="normal"
            align="center"
            mb={[10, 8, 0, 0, 0]}
          >
            <Fade bottom delay={500} duration={2000}>
              <ListItem className="mb-4 text-sm">PAGES</ListItem>
            </Fade>
            {navStuff.map((item, index) => {
              return (
                <Fade opposite delay={500} key={index} duration={2000}>
                  <ListItem className="mt-2 text-sm">
                    <Link
                      as={ReactLink}
                      to={item.to}
                      _focus={{ outline: "none" }}
                      className={`link ${
                        props.location.pathname === item.to ? "active" : ""
                      }`}
                      textDecor={
                        props.location.pathname === item.to ? "underline" : ""
                      }
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                </Fade>
              );
            })}
          </List>
          <List
            styleType="none"
            fontFamily="Poppins"
            color="#F6F1F1"
            fontWeight="normal"
            align="center"
            mb={[10, 8, 0, 0, 0]}
          ></List>
        </Box>
        <Box flex="1.3" d="flex" justifyContent="center">
          <Fade right delay={100} duration={2000}>
            <Link
              href="https://web.facebook.com/wocmantech"
              isExternal
              _focus={{ outline: "none" }}
            >
              <Image src={facebook} alt="facebook" mr={2} />
            </Link>
          </Fade>
          <Fade right delay={300} duration={2000}>
            <Link
              href="https://twitter.com/WocmanT"
              isExternal
              _focus={{ outline: "none" }}
            >
              <Image src={twitter} alt="twitter" mr={2} />
            </Link>
          </Fade>
          <Fade right delay={500} duration={2000}>
            <Link
              href="https://www.instagram.com/wocmantechnology/"
              isExternal
              _focus={{ outline: "none" }}
            >
              <Image src={instagram} alt="instagram" mr={2} />
            </Link>
          </Fade>
          <Fade right delay={700} duration={2000}>
            <Link
              href="https://www.linkedin.com/company/wocmantechnology/"
              isExternal
              _focus={{ outline: "none" }}
            >
              <Image src={linkedin} alt="medium" mr={2} />
            </Link>
          </Fade>
        </Box>
      </Flex>
      <Flex justify="center" pt={5}>
        <Text className="text-sm" color="#F6F1F1" fontFamily="Poppins">
          Copyright© {new Date().getFullYear()}. All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export const Footer = withRouter(FooterComponent);
