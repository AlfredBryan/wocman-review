import { Flex, Text } from "@chakra-ui/core";

export const Card = ({ text, number, sub, noMargin }) => {
  return (
    <Flex
      flexDirection="column"
      justify="space-between"
      backgroundColor="white"
      w="100%"
      flex={1}
      mr={{ base: 0, md: noMargin ? 0 : 8 }}
      mb={{ base: 8, md: 0 }}
      p={4}
      minH="170px"
    >
      <Text
        fontFamily="Poppins"
        color="wocman.newsLetter"
        letterSpacing="1px"
        lineHeight="22px"
      >
        {text}
      </Text>
      <Flex align="baseline">
        <Text
          fontFamily="Poppins"
          color="wocman.contact"
          fontSize="2.7rem"
          fontWeight="600"
          mr={2}
        >
          {number}
        </Text>
        <Text as="small" fontFamily="Poppins" color="wocman.newsLetter">
          {sub}
        </Text>
      </Flex>
    </Flex>
  );
};
