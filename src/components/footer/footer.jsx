import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/core";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import medium from "../../assets/icons/facebook.svg";

export const Footer = () => {
  return (
    <Flex bg="wocman.typography1" flexDir="column" py={8}>
      <Flex flexDir={["column", "column", "row", "row", "row"]}>
        <Box flex="1"></Box>
        <Box flex="2" d="flex" justifyContent="space-around" flexDir={["column", "column", "row", "row", "row"]} px={[6, 15, 0, 0, 0]} align="center">
          <List
            styleType="none"
            fontFamily="Poppins"
            color="#F6F1F1"
            fontWeight="normal"
            align="center"
            mb={[10, 8, 0, 0, 0]}
          >
            <ListItem className="mb-4 text-sm">POLICY</ListItem>
            <ListItem className="mb-4 text-sm">Terms & Conditions</ListItem>
            <ListItem className="mb-4 text-sm">Privacy Policy</ListItem>
          </List>
          <List
            styleType="none"
            fontFamily="Poppins"
            color="#F6F1F1"
            fontWeight="normal"
            align="center"
            mb={[10, 8, 0, 0, 0]}
          >
            <ListItem className="mb-4 text-sm">PAGES</ListItem>
            <ListItem className="mb-4 text-sm">Services</ListItem>
            <ListItem className="mb-4 text-sm">Products</ListItem>
          </List>
          <List
            styleType="none"
            fontFamily="Poppins"
            color="#F6F1F1"
            fontWeight="normal"
            align="center"
            mb={[10, 8, 0, 0, 0]}
          >
            <ListItem className="mb-4 text-sm">About us</ListItem>
            <ListItem className="mb-4 text-sm">How it works</ListItem>
          </List>
        </Box>
        <Box flex="1.3" d="flex" justifyContent="center">
          <Image src={facebook} alt="facebook" mr={2}/>
          <Image src={twitter} alt="twitter" mr={2}/>
          <Image src={instagram} alt="instagram" mr={2}/>
          <Image src={medium} alt="medium" mr={2}/>
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