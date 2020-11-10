import { Flex, Text } from "@chakra-ui/core";

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
      <Text
        fontFamily="Poppins"
        fontSize={["2rem", "3rem", "4rem", "4rem"]}
        fontWeight="bold"
      >
        {heading}
      </Text>
      <Flex w={["90%", "90%", "90%", "60%"]} mt="2rem" justify="center">
        <Text
          as="small"
          fontFamily="Poppins"
          fontWeight="bold"
          lineHeight="2rem"
          fontSize="1rem"
        >
          {subHeading}
        </Text>
      </Flex>
    </Flex>
  );
};
