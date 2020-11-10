import { Box, Flex, Input, PseudoBox, Text } from "@chakra-ui/core";

export const NewsLetter = () => {
  return (
    <Flex minHeight="40vh" flexDir={["column", "column", "column", "column", "row"]}>
      <Flex
        flex="2"
        flexDirection="column"
        bg="wocman.wocmanCategories"
        align="center"
        justify="center"
        py={16}
      >
        <Box w={["90%", "80%", "60%", "60%", "60%"]} mx="auto" textAlign={["center", "center", "", "", ""]}>
          <Text
            fontSize="2rem"
            color="wocman.typography1"
            fontFamily="Poppins"
            fontWeight="bold"
            lineHeight="54px"
            mb={8}
          >
            Sign up for newsletter
          </Text>
          <Text fontFamily="Poppins">
            Be a part of our Community and receive our weekly digest and offers.
          </Text>
        </Box>
      </Flex>
      <Flex
        flex="3"
        bg="wocman.featuredService"
        flexDir={["column", "column", "row", "row", "row"]}
        align="center"
        justify="center"
        px={[4, 6, 8, 12, 16]}
        py={16}
      >
        <Input
          flex="2"
          placeholder="Email Address"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          px={8}
          fontFamily="Poppins"
          fontWeight="bold"
          fontSize={["1rem", "1rem", "1rem", "1.4rem", "1.4rem"]}
          backgroundColor="wocman.wocmanCategories"
          color="wocman.typography1"
          _focus={{ bg: "white" }}
          borderRadius="7.37288px"
        />
        <PseudoBox
          as="button"
          fontSize={["1rem", "1rem", "1rem", "1.4rem", "1.4rem"]}
          flex="1"
          fontFamily="Poppins"
          fontWeight="bold"
          color="white"
          w={["70%", "70%", "", "", ""]}
          boxShadow="0px 7.37288px 22.1186px rgba(116, 104, 255, 0.2)"
          borderRadius="7.37288px"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          ml={[0, 0, 6, 6, 6]}
          mt={[6, 6, 0, 0, 0]}
          backgroundColor="wocman.typography1"
          _hover={{  opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ outline: "none" }}
        >
          Save Me
        </PseudoBox>
      </Flex>
    </Flex>
  );
};
