import { Avatar, Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const CardMain = ({ title, description, body, status, color, id, view }) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      p="2rem"
      mb="2rem"
      borderRadius="5px"
      bg="#fff"
      w={{ base: "100%", lg: "32%" }}
      as={id ? Link : Box}
      to={`/wocman/projects/${id}`}
    >
      <Flex w="100%" justify="space-between" mb="35px">
        <Text wordBreak="break-all" fontWeight="regular" fontSize="19px">
          {title}
        </Text>
        <Avatar
          src="https://e7.pngegg.com/pngimages/102/318/png-clipart-black-gear-logo-computer-icons-gear-maintenance-miscellaneous-maintenance.png"
          boxSize="6rem"
        />
      </Flex>
      <Text mb="16px" fontSize="16px" fontWeight="300">
        {description}
      </Text>
      <Text mb="16px" fontSize="10px" fontWeight="300">
        {body}
      </Text>
      <Text fontWeight="bold" fontSize="12px">
        Status:
        <Text
          ml="1rem"
          as="span"
          color={color}
          fontSize="10px"
          fontWeight="300"
        >
          {status}
        </Text>
      </Text>
    </Box>
  );
};

export { CardMain };
