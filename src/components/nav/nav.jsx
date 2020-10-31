import { Button, Flex, Image, List, ListItem } from "@chakra-ui/core";
import logo from "../../assets/icons/logo.svg";

export const Nav = () => {
  return (
    <Flex justify="space-evenly" bg="transparent" color="white" h="10vh">
      <Flex flex="1" bg="transparent" justify="center" align="center">
        <Image
          objectFit="cover"
          alt="wocman logo"
          src={logo}
          fallbackSrc="https://via.placeholder.com/150"
          size="3rem"
        />
      </Flex>
      <Flex flex="4" justifyContent="center" align="center">
        <List
          styleType="none"
          display="flex"
          justifyContent="space-evenly"
          w="80%"
          fontFamily="Gilroy-SemiBold"
          align="center"
        >
          <ListItem className="mr-2 text-sm">Home</ListItem>
          <ListItem className="mr-2 text-sm">About Us</ListItem>
          <ListItem className="mr-2 text-sm">Product</ListItem>
          <ListItem className="mr-2 text-sm">Services</ListItem>
          <ListItem className="mr-2 text-sm">Contact us</ListItem>
        </List>
      </Flex>
      <Flex flex="2" align="center" justify="center">
        <Button
          className="mr-4"
          variant="outline"
          borderColor="wocman.navBtn"
          fontSize="0.7rem"
          borderRadius="2px"
          _hover={{ bg: "transparent", opacity: "0.7" }}
          _active={{transform: "scale(0.98)" }}
          _focus={{ borderColor: "wocman.navBtn", outline: "none" }}
        >
          HIRE WOCMAN
        </Button>
        <Button
          fontSize="0.7rem"
          backgroundColor="wocman.navOutlineBtn"
          borderRadius="2px"
          _hover={{ bg: "wocman.navOutlineBtn", opacity: "0.7" }}
          _active={{transform: "scale(0.98)" }}
          _focus={{ borderColor: "wocman.navOutlineBtn", outline: "none" }}
        >
          REGISTER AS A WOCMAN
        </Button>
      </Flex>
    </Flex>
  );
};
