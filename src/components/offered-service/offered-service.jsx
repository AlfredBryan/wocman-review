import { Box, Flex, Text } from "@chakra-ui/core";

export const OfferedService = (props) => {
  return (
    <Box
      bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0) 31.6%, rgba(0, 0, 0, 0.52) 73.45%), url(${props.image});`}
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius="2.67857px;"
      bg="transparent"
      bgSize="cover"
      my={4}
      // py={8}
      minHeight="400px"
      width={["100%", "100%", "70%", "48%", "30%"]}
    >
      <Flex h="50%"></Flex>
      <Flex
        h="50%"
        flexDir="column"
        px={[4, 4, 4, 4, 6]}
        color="white"
        py={4}
        justify="center"
      >
        <Flex align="center" maxWidth="40%" mb={2}>
          <Text
            as="span"
            fontSize="2em"
            fontFamily="Gilroy-Extrabold"
            lineHeight="42px"
          >
            {props.heading}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontFamily="Gilroy-Regular">{props.text}</Text>
          {/* <Button
            variant="outline"
            borderColor="white"
            ml={4}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            borderRadius="30.7947px"
            width="150px"
            fontSize="0.7rem"
            _hover={{ bg: "rgba(0, 0, 0, 0.1)", opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
          >
            Explore
          </Button> */}
        </Flex>
      </Flex>
    </Box>
  );
};
