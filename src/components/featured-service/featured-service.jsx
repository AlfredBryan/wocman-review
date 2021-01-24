import { Flex, Image, Text } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";

export const FeaturedService = (props) => {
  return (
    <Flex
      w={["90%", "90%", "47%", "47%", "22%"]}
      bg="white"
      borderRadius="13.5px"
      h="250px"
      px={6}
      py={5}
      mb={["2rem", "1rem", "1rem", "1rem", 0]}
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
        <Fade bottom delay={500} duration={2000}>
          <Image src={props.image} loading="lazy" />
        </Fade>
      </Flex>
      <Fade bottom>
        <Text
          fontSize="1.2rem"
          fontFamily="Poppins"
          fontWeight="600"
          mt={4}
          color="wocman.typography1"
        >
          {props.heading}
        </Text>
      </Fade>
      <Fade bottom delay={1000} duration={2000}>
        <Text fontSize="sm" fontFamily="Gilroy-Light" mt={4} color="black">
          {props.subHeading}
        </Text>
      </Fade>
    </Flex>
  );
};
