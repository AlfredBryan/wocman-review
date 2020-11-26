import { Flex, Text } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";

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
      <Zoom opposite>
      <Text
        fontFamily="Poppins"
        fontSize={["2rem", "3rem", "4rem", "4rem"]}
        fontWeight="bold"
      >
        {heading}
      </Text>
      </Zoom>
      <Flex w={["90%", "90%", "90%", "60%"]} mt="2rem" justify="center">
      <Zoom opposite>
        <Text
          as="small"
          fontFamily="Poppins"
          fontWeight="bold"
          lineHeight="2rem"
          fontSize="1rem"
        >
          {subHeading}
        </Text>
      </Zoom>
      </Flex>
    </Flex>
  );
};
