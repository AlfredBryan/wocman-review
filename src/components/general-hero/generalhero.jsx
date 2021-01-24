import { Flex, Text } from "@chakra-ui/core";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

export const GeneralHero = ({ heading, subHeading, vh }) => {
  return (
    <Flex
      align="center"
      justify="center"
      color="white"
      flexDirection="column"
      w={["90%", "90%", "90%", "60%"]}
      justifySelf="center"
      margin="0 auto"
      textAlign="center"
      h={vh}
      pt={16}
    >
      <Bounce opposite delay={500} duration={1000}>
        <Text
          fontFamily="Poppins"
          fontSize={["2rem", "3rem", "4rem", "4rem"]}
          fontWeight="bold"
        >
          {heading}
        </Text>
      </Bounce>
      <Flex w={["90%", "90%", "90%", "60%"]} mt="2rem" justify="center">
        <Fade opposite delay={1000} duration={1000}>
          <Text
            as="small"
            fontFamily="Poppins"
            fontWeight="bold"
            lineHeight="2rem"
            fontSize="1rem"
          >
            {subHeading}
          </Text>
        </Fade>
      </Flex>
    </Flex>
  );
};
