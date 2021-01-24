import { Box, Button, Flex, Image, Input, Switch, Text } from "@chakra-ui/core";
import React from "react";
import secureAccount from "../../../assets/images/secure-account.svg";

export const SettingsLogin = () => {
  return (
    <Box pt={{ base: 4, md: 8 }} w="100%">
      <Text fontFamily="Poppins" fontWeight="bold" letterSpacing="0.5px">
        Securing Account
      </Text>
      <Flex
        backgroundColor="white"
        borderRadius="10px"
        py={{ base: 4, md: 8 }}
        px={{ base: 4, md: 8 }}
        my={{ base: 6, md: 12 }}
        flex={3}
      >
        <Box>
          <SwitchTextPair
            label="Two-Factor Authentication (2FA)"
            message="When you log in, you will be required to enter a code, which will be sent to your registered phone Number."
          />
          <SwitchTextPair
            isLast
            label="Check IP Address"
            message="When Someone tries to Log in to your Account from a new IP Address, you will receive an email to confirm if it was you."
          />
        </Box>
        <Flex flex={1} justify="flex-end">
          <Image src={secureAccount} alt="purse" />
        </Flex>
      </Flex>
      <Text
        fontFamily="Poppins"
        fontWeight="bold"
        letterSpacing="0.5px"
        d="inline-block"
      >
        Password
      </Text>
      <Text
        as="small"
        fontFamily="Poppins"
        letterSpacing="0.5px"
        fontSize={{ base: "0.5rem", md: "0.7rem" }}
        ml={{ base: 2, md: 4 }}
      >
        (Last Updated 2 Weeks ago)
      </Text>
      <Flex
        backgroundColor="white"
        borderRadius="10px"
        py={{ base: 4, md: 8 }}
        px={{ base: 4, md: 8 }}
        my={{ base: 6, md: 12 }}
        flex={3}
        flexDir="column"
      >
        <CustomInput placeholder="New Password" />
        <CustomInput placeholder="Confirm Password" />
        <Button
          _focus={{ outline: "none" }}
          h="70px"
          w={{ base: "90%", md: "45%", xl: "25%" }}
          borderRadius="5px"
          border="0.789223px solid #552D1E"
          backgroundColor="white"
          color="wocman.typography1"
        >
          <Text
            fontFamily="Poppins"
            textTransform="capitalize"
            lineHeight="138.6%"
          >
            Update Password
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

const SwitchTextPair = (props) => {
  return (
    <Flex w="100%" mb={props.isLast ? 0 : 8}>
      <Box mr={{ base: 2, md: 12 }}>
        <Switch size="lg" color="wocman.checkedGreen" />
      </Box>
      <Box flex="1">
        <Text
          mb={{ base: 2, md: 4 }}
          d="block"
          fontFamily="Poppins"
          fontSize={{ base: "0.8rem", md: "1rem" }}
        >
          {props.label}
        </Text>
        <Text as="small" fontFamily="Poppins" color="wocman.typography2">
          {props.message}
        </Text>
      </Box>
    </Flex>
  );
};

const CustomInput = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      minHeight="4rem"
      px={4}
      mb={props.isLast ? 0 : 8}
      w={{ base: "100%", md: "60%" }}
      value={props.value}
      fontFamily="Gilroy-Medium"
      fontSize="1rem"
      color="black"
      _focus={{ bg: "white" }}
      borderWidth="0.789223px"
      borderRadius="5px"
      borderColor="black"
      borderStyle="solid"
    />
  );
};
