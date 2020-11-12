import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  PseudoBox,
  Text,
} from "@chakra-ui/core";

export const Hero = () => {
  return (
    <Flex
      align="center"
      justify="center"
      color="white"
      flexDirection="column"
      w={["90%", "90%", "90%", "50%"]}
      justifySelf="center"
      margin="0 auto"
      textAlign="center"
      pt={16}
    >
      <Text
        fontFamily="Poppins"
        fontSize={["1rem", "1.5rem", "2.5rem", "3rem", "3rem"]}
        fontWeight="bold"
      >
        Get your domestic, repairs, and construction works done on{" "}
        <Text
          as="span"
          color="wocman.color1"
          fontFamily="Poppins"
          fontSize={["1rem", "1.5rem", "2.5rem", "3rem", "3rem"]}
          fontWeight="bold"
        >
          Wocman
        </Text>
      </Text>
      <Flex w={["90%", "90%", "90%", "50%"]} mt="2rem">
        <Text
          as="small"
          fontFamily="Poppins"
          fontWeight="bold"
          lineHeight="2rem"
          fontSize="1rem"
        >
          We connect customers to the nearest tradesmen, technicians, and professionals with zero hassle.
        </Text>
      </Flex>
      <Flex mt="4rem" w={["120%", "100%", "100%", "100%"]} fontFamily="Poppins">
        <InputGroup flex="5">
          <InputLeftElement
            children={
              <Icon
                name="search"
                color="wocman.color1"
                fontSize="1rem"
                mt="2.5rem"
              />
            }
          />
          <Input
            type="text"
            placeholder="Search"
            color="wocman.typography1"
            focusBorderColor="none"
            borderRadius="none"
            fontSize="1rem"
            h="5rem"
          />
        </InputGroup>
        <InputGroup flex="2.5" display={["none", "none", "flex", "flex"]}>
          <InputLeftElement
            children={
              <Icon
                name="location"
                color="wocman.typography1"
                fontSize="1rem"
                mt="2.5rem"
              />
            }
          />
          <Input
            placeholder="Ikeja, Lagos"
            color="wocman.typography1"
            focusBorderColor="none"
            borderRadius="none"
            fontSize="1rem"
            h="5rem"
          />
        </InputGroup>
        <PseudoBox
          as="button"
          flex="1.5"
          fontSize="1rem"
          h="5.03rem"
          backgroundColor="wocman.color1"
          borderRadius="2px"
          _hover={{ bg: "wocman.color1", opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ borderColor: "wocman.color1", outline: "none" }}
        >
          Search
        </PseudoBox>
      </Flex>
    </Flex>
  );
};
