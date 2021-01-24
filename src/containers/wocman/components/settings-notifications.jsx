import { Box, Flex, Input, Switch, Text } from "@chakra-ui/core";
import React from "react";

export const SettingsNotifications = () => {
  return (
    <Box w="100%">
      <Text fontFamily="Poppins" color="wocman.typography2" my={2}>
        Get notified based on your preference
      </Text>
      <Box
        backgroundColor="white"
        borderRadius="10px"
        w="100%"
        p={{ base: 4, md: 8 }}
      >
        <SwitchInputPair label="SMS Notifications" value="090 989 565 8989" />
        <SwitchInputPair
          label="Email Notifications"
          value="stephenjude@gmail.com"
        />
        <SwitchInputPair
          label="Service Notification (News and Special offers)"
          value="stephenjude@gmail.com"
        />
        <SwitchInputPair
          label="Technical Notification (Updates and Security)"
          value="stephenjude@gmail.com"
        />
      </Box>
    </Box>
  );
};

const SwitchInputPair = (props) => {
  return (
    <Flex w="100%" mb={8}>
      <Box mr={{ base: 2, md: 12 }}>
        <Switch size="lg" color="wocman.checkedGreen" />
      </Box>
      <Box flex="1">
        <Text
          mb={{ base: 2, md: 4 }}
          d="block"
          fontFamily="Poppins"
          fontSize={{ base: "0.8rem", md: "1rem" }}
          color="wocman.typography2"
        >
          {props.label}
        </Text>
        <Input
          placeholder="Name*"
          minHeight="4rem"
          px={4}
          w={{ base: "100%", md: "70%" }}
          disabled
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
      </Box>
    </Flex>
  );
};
