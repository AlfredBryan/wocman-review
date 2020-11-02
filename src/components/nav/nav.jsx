import { useState, useRef } from "react";
import { Button, Flex, Image, List, ListItem } from "@chakra-ui/core";
import logo from "../../assets/icons/logo.svg";
import Burger from "../burger/burger";
import Menu from "../menu/menu";
import "./nav.css";
import { useOnClickOutside } from "../../utils/hooks";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Flex justify="space-evenly" bg="transparent" color="white" h="10vh">
      <Flex flex="1" bg="transparent" justify="center" align="center" d="flex">
        <Image
          objectFit="cover"
          alt="wocman logo"
          src={logo}
          fallbackSrc="https://via.placeholder.com/150"
          size="3rem"
        />
      </Flex>
      <Flex flex="4" justifyContent="center" align="center" className="nav">
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
      <Flex flex="2" align="center" justify="center" className="nav">
        <Button
          className="mr-4"
          variant="outline"
          borderColor="wocman.navBtn"
          fontSize="0.7rem"
          borderRadius="2px"
          _hover={{ bg: "transparent", opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ borderColor: "wocman.navBtn", outline: "none" }}
        >
          HIRE WOCMAN
        </Button>
        <Button
          fontSize="0.7rem"
          backgroundColor="wocman.navOutlineBtn"
          borderRadius="2px"
          _hover={{ bg: "wocman.navOutlineBtn", opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ borderColor: "wocman.navOutlineBtn", outline: "none" }}
        >
          REGISTER AS A WOCMAN
        </Button>
      </Flex>
      <div className="mobile-nav">
        <div ref={node}>
        <Flex flex="1" bg="transparent" justify="center" align="center" d="flex">
        <Image
          objectFit="cover"
          alt="wocman logo"
          src={logo}
          fallbackSrc="https://via.placeholder.com/150"
          size="3rem"
        />
      </Flex>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} className="w-full">
            <div className="flex flex-col">
              <List
                styleType="none"
                w="100%"
                color="black"
                fontFamily="Gilroy-SemiBold"
                align="center"
              >
                <ListItem className="mt-2 text-sm">Home</ListItem>
                <ListItem className="mt-2 text-sm">About Us</ListItem>
                <ListItem className="mt-2 text-sm">Product</ListItem>
                <ListItem className="mt-2 text-sm">Services</ListItem>
                <ListItem className="mt-2 text-sm">Contact us</ListItem>
              </List>
              <Button
                className="mr-4"
                variant="outline"
                color="black"
                borderColor="wocman.navBtn"
                fontSize="0.7rem"
                my={4}
                w="200px"
                borderRadius="2px"
                _hover={{ bg: "transparent", opacity: "0.7" }}
                _active={{ transform: "scale(0.98)" }}
                _focus={{ borderColor: "wocman.navBtn", outline: "none" }}
              >
                HIRE WOCMAN
              </Button>
              <Button
                fontSize="0.7rem"
                backgroundColor="wocman.navOutlineBtn"
                borderRadius="2px"
                w="200px"
                _hover={{ bg: "wocman.navOutlineBtn", opacity: "0.7" }}
                _active={{ transform: "scale(0.98)" }}
                _focus={{
                  borderColor: "wocman.navOutlineBtn",
                  outline: "none",
                }}
              >
                REGISTER AS A WOCMAN
              </Button>
              {/* {[].map((item, index) => {
                return (
                  <div className="list" key={index}>
                    <span>
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <span>{item.title}</span>
                  </div>
                );
              })} */}
            </div>
          </Menu>
        </div>
      </div>
    </Flex>
  );
};
