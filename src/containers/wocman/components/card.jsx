import { Flex, Text } from "@chakra-ui/core";

export const Card = ({ text, number, sub, noMargin }) => {
  return (
    <Flex
      flexDirection="column"
      justify="space-between"
      backgroundColor="white"
      flex={1}
      mr={noMargin ? 0 : 8}
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
