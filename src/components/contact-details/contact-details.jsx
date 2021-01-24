import { Box, Flex, Image, Text } from "@chakra-ui/core";
import address from "../../assets/icons/address.svg";
import phone from "../../assets/icons/phone.svg";
import envelope from "../../assets/icons/envelope.svg";
import Fade from "react-reveal/Fade";

export const ContactDetails = () => {
  return (
    <Box
      backgroundColor="wocman.wocmanCategories"
      px={[6, 12, 16, 32, 32]}
      py={20}
    >
      <Flex
        mx="auto"
        justify="space-evenly"
        align="center"
        flexWrap="wrap"
        backgroundColor="wocman.featuredService"
        boxShadow="0px 4px 30px rgba(0, 0, 0, 0.1)"
        borderRadius="10px 10px 0px 0px"
        px={[6, 6, 6, 6, 32]}
        py={20}
      >
        <Flex
          align="center"
          justify={["flex-start", "center"]}
          w={["100%", "50%", "50%", "33%", "33%"]}
          mb={[12, 8, 8, 0, 0]}
        >
          <Fade opposite delay={500} duration={2000}>
            <Image src={address} alt="address" />
          </Fade>
          <Fade opposite delay={500} duration={2000}>
            <Text ml={4} fontFamily="Gilroy-Medium" lineHeight="20px">
              17 Akinsanya street Ojodu Berger, Lagos state
            </Text>
          </Fade>
        </Flex>
        <Flex
          align="center"
          justify={["flex-start", "center"]}
          w={["100%", "50%", "50%", "33%", "33%"]}
          mb={[12, 8, 8, 0, 0]}
          cursor="pointer"
          onClick={() => window.open("tel:2348155419648")}
        >
          <Fade opposite delay={500} duration={2000}>
            <Image src={phone} alt="phone" />
          </Fade>
          <Fade opposite delay={500} duration={2000}>
            <Text ml={4} fontFamily="Gilroy-Medium" lineHeight="20px">
              +2348155419648
            </Text>
          </Fade>
        </Flex>
        <Flex
          align="center"
          justify={["flex-start", "center"]}
          w={["100%", "50%", "50%", "33%", "33%"]}
          cursor="pointer"
          onClick={() => window.open("mailto:hello@wocmantech.com")}
        >
          <Fade opposite delay={500} duration={2000}>
            <Image src={envelope} alt="envelope" />
          </Fade>
          <Fade opposite delay={500} duration={2000}>
            <Text ml={4} fontFamily="Gilroy-Medium" lineHeight="20px">
              hello@wocmantech.com
            </Text>
          </Fade>
        </Flex>
      </Flex>
    </Box>
  );
};
