import { Flex, Image, Text } from "@chakra-ui/core";
import "./wocman-category.css";
import Fade from "react-reveal/Fade";

export const WocmanCategory = (props) => {
  return (
    <Flex
      w={["100%", "100%", "48%", "48%", "30%"]}
      bg="white"
      className="wocman-category"
      h="auto"
      mb={["2rem", "2rem", "2rem", "2rem", 0]}
      mr={[0, "1rem", 0]}
      borderRadius="13.5px"
      flexDirection="column"
      overflow="hidden"
    >
      <Fade opposite delay={500} duration={2000}>
        <Image src={props.image} alt={props.title} W="100%" loading="lazy" />
      </Fade>
      <Flex
        px={8}
        py={6}
        flex="1"
        flexDirection="column"
        justify="space-between"
        pos="relative"
      >
        <Fade opposite delay={700} duration={2000}>
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
        <Fade opposite delay={1000} duration={2000}>
          <Text
            fontSize="0.8rem"
            justifySelf="flex-start"
            fontFamily="Poppins-Light"
            mt={4}
            color="black"
            lineHeight="225%"
            textTransform="capitalize"
          >
            {props.subHeading}
          </Text>
        </Fade>
        {/* <Text
        fontSize="0.9rem"
        justifySelf="flex-end"
        fontFamily="Poppins"
        fontWeight="400"
        mt={4}
        color="wocman.typography1"
      >
        View More
      </Text> */}
      </Flex>
    </Flex>
  );
};
