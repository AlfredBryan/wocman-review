import { Button, Flex, Image, Input, Link, Text } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import { Nav } from "../../components/nav/nav";
import "./register.css";
import AuthBgImage from "../../assets/images/auth.jpg";
import google from "../../assets/icons/google.svg";
import { Link as ReactLink } from "react-router-dom";

const Register = () => {
  return (
    <Flex
      minH={"100vh"}
      bgImage={`url(${AuthBgImage})`}
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
      py={4}
      flexDirection="column"
      backgroundColor="rgba(0, 0, 0, 0.05)"
    >
      <Nav isAuth />
      <Zoom top duration={1000}>
        <Flex flex={1} justify="center" align="center">
          <Flex
            align="center"
            width={["96%", "90%", "90%", "80%", "50%"]}
            justify="center"
            h="auto"
          >
            <Flex
              flexDirection="column"
              backgroundColor="white"
              height={["95%", "95%", "95%", "83%", "83%"]}
              width={["100%", "100%", "70%", "80%", "80%"]}
              borderRadius="10px"
              align="center"
              py={8}
            >
              <Text
                fontFamily="OverPass"
                color="wocman.contact"
                mb={6}
                fontSize="2.5rem"
                lineHeight="34px"
                letterSpacing="-0.55px"
              >
                Sign Up
              </Text>
              <Text fontFamily="Gilroy-Medium" fontSize="1rem" mb={6}>
                Kindly sign into your workstation
              </Text>
              <Flex
                mb={6}
                overflow="hidden"
                borderRadius="4.56667px"
                w="100%"
                justify="center"
              >
                <Button
                  backgroundColor="wocman.contact"
                  color="white"
                  h="50px"
                  w={["80%", "80%", "75%", "60%", "60%"]}
                  borderRadius="4.56667px"
                  _hover={{ opacity: "0.7" }}
                  _active={{ transform: "scale(0.98)" }}
                  _focus={{ outline: "none" }}
                >
                  <Flex
                    borderRightStyle="solid"
                    borderRightWidth="0.1px"
                    borderRightColor="#D8E3FE"
                    height="100%"
                    align="center"
                    justify="center"
                    pr={2}
                    flex="0.5"
                  >
                    <Image src={google} alt="google" />
                  </Flex>
                  <Flex flex="5" px="8" textAlign="center">
                    <Text
                      fontFamily="OverPass"
                      fontWeight="bold"
                      fontSize="0.9rem"
                      lineHeight="18px"
                      letterSpacing="-0.380556px"
                      textAlign="center"
                      margin="0 auto"
                    >
                      Sign up via Gmail
                    </Text>
                  </Flex>
                </Button>
              </Flex>
              <Flex w="100%" mb={6}>
                <div className="divider">
                  <Text
                    as="span"
                    fontFamily="OverPass"
                    fontWeight="bold"
                    lineHeight="24px"
                  >
                    or
                  </Text>
                </div>
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text
                  as="small"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.9rem"
                  lineHeight="28px"
                >
                  Email Address
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Input
                  placeholder="Email"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  px={6}
                  width="100%"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                />
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text
                  as="small"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.9rem"
                  lineHeight="28px"
                >
                  Password
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Input
                  placeholder="Email"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  px={6}
                  width="100%"
                  type="password"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                />
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text
                  as="small"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.9rem"
                  lineHeight="28px"
                >
                  Confirm Password
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]}>
                <Input
                  placeholder="Password"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  px={6}
                  type="password"
                  width="100%"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                />
              </Flex>
              <Flex mt={12} w="100%" justify="center" align="center">
                <Button
                  backgroundColor="wocman.contact"
                  color="white"
                  h="50px"
                  w={["70%", "65%", "50%", "40%", "40%"]}
                  borderRadius="4.56667px"
                  _hover={{ opacity: "0.7" }}
                  _active={{ transform: "scale(0.98)" }}
                  _focus={{ outline: "none" }}
                >
                  <Text
                    fontFamily="OverPass"
                    fontWeight="bold"
                    fontSize="0.9rem"
                    lineHeight="18px"
                    letterSpacing="-0.380556px"
                    textAlign="center"
                    margin="0 auto"
                  >
                    Sign Up
                  </Text>
                </Button>
              </Flex>
              <Flex mt={8} justify="center" align="center">
                <Text
                  textTransform="uppercase"
                  as="span"
                  display="inline-block"
                  mr={4}
                  fontFamily="OverPass"
                  fontWeight="bold"
                  fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem", "1rem"]}
                  lineHeight="20px"
                  letterSpacing="1.08333px"
                >
                  Already have an account ?
                </Text>
                <Link
                  as={ReactLink}
                  textTransform="uppercase"
                  fontFamily="OverPass"
                  to="/login"
                  fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem", "1rem"]}
                  color="wocman.typography4"
                  lineHeight="20px"
                  letterSpacing="1.08333px"
                  fontWeight="bold"
                  _hover={{ opacity: "0.7" }}
                  _focus={{ outline: "none" }}
                  cursor="pointer"
                >
                  Sign in
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Zoom>
    </Flex>
  );
};

export default Register;