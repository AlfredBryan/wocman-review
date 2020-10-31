import { Flex, Image, Text } from "@chakra-ui/core";

export const FeaturedService = (props) => {
  return (
    <Flex
      w={["90%", "47%", "22%", "22%"]}
      bg="white"
      borderRadius="13.5px"
      h="250px"
      px={6}
      py={5}
      mb={["2rem", "1rem", 0, 0]}
      flexDirection="column"
    >
      <Flex
        borderRadius="50%"
        backgroundColor="wocman.featuredServiceIconBg"
        h="100px"
        w="100px"
        justify="center"
        align="center"
      >
        <Image src={props.image} />
      </Flex>
      <Text
        fontSize="1.2rem"
        fontFamily="Poppins"
        fontWeight="600"
        mt={4}
        color="wocman.typography1"
      >
        {props.heading}
      </Text>
      <Text
        fontSize="sm"
        fontFamily="Poppins-Light"
        mt={4}
        color="black"
      >
        {props.subHeading}
      </Text>
    </Flex>
  );
};
