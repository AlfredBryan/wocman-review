import { Box, Flex, Image, Text } from "@chakra-ui/core";

export const WocmanCategory = (props) => {
  return (
    <Flex
      w={["90%", "45%", "45%%", "25%"]}
      bg="white"
      h="auto"
      mb={["2rem", "1rem", "2rem", 0]}
      borderRadius="13.5px"
     flexDirection="column"
     overflow="hidden"
    >
      <Image src={props.image} alt={props.title} W="100%" />
      <Flex px={8} py={6} flex="1" flexDirection="column" justify="space-between" pos="relative">
      <Text
        fontSize="1.2rem"
        fontFamily="Poppins"
        fontWeight="600"
        mt={4}
        color="wocman.typography1"
      >
        {props.heading}
      </Text>
      <Text fontSize="0.8rem" justifySelf="flex-start" fontFamily="Poppins-Light" mt={4} color="black">
        {props.subHeading}
      </Text>
      <Text
        fontSize="0.9rem"
        justifySelf="flex-end"
        fontFamily="Poppins"
        fontWeight="400"
        mt={4}
        color="wocman.typography1"
      >
        View More
      </Text>
      </Flex>
    </Flex>
  );
};
