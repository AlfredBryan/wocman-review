import { Box, Flex, Icon, Text } from "@chakra-ui/core";
import register from "../../assets/images/register.jpg";
import join from "../../assets/images/join.jpg";
import "./join-section.css";
import { useHistory } from "react-router";

export const JoinSection = () => {
  const history = useHistory();

  return (
    <Flex
      justify={["center", "center", "center", "center", "space-between"]}
      className="join-section-parent"
      py={20}
      px={[5, 10, 24, 24, 24]}
      flexWrap="wrap"
    >
      <Box
        bgImage={`linear-gradient(0deg, rgba(85, 45, 30, 0.2), rgba(85, 45, 30, 0.2)), url(${register})`}
        bgPos="center"
        bgRepeat="no-repeat"
        className="join-section"
        bg="transparent"
        bgSize="cover"
        mb={[16, 16, 16, 16, 0]}
        width={["100%", "100%", "80%", "80%", "48%"]}
        h="60vh"
        onClick={() => history.push("/register?wocman=0")}
        cursor="pointer"
      >
        <Flex h={["40%", "60%", "60%", "60%", "60%"]}></Flex>
        <Flex flexDir="column" px={[8, 8, 8, 16, 20]} color="white">
          <Flex align="center">
            <Icon name="chat" mr={4} />
            <Text as="span" fontFamily="Cera Pro" letterSpacing="2px">
              Get your work done by Wocman
            </Text>
          </Flex>
          <Flex maxWidth="65%">
            <Text
              fontSize={["2rem", "2rem", "2.25rem", "2.25rem", "2.5rem"]}
              fontFamily="Cera Pro"
              fontStyle="italic"
              fontWeight="900"
            >
              Register as a customer.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        bgImage={`linear-gradient(0deg, rgba(85, 45, 30, 0.2), rgba(85, 45, 30, 0.2)), url(${join})`}
        bgPos="center"
        bgRepeat="no-repeat"
        className="join-section"
        bg="transparent"
        bgSize="cover"
        h="60vh"
        width={["100%", "100%", "80%", "80%", "48%"]}
        onClick={() => history.push("/register?wocman=1")}
        cursor="pointer"
      >
        <Flex h={["50%", "60%", "60%"]}></Flex>
        <Flex flexDir="column" px={[8, 8, 8, 16, 20]} color="white">
          <Flex align="center">
            <Icon name="chat" mr={4} />
            <Text as="span" fontFamily="Cera Pro" letterSpacing="2px">
              Get jobs that best suit your skill.
            </Text>
          </Flex>
          <Flex maxWidth="40%">
            <Text
              fontSize={["2rem", "2rem", "2.25rem", "2.25rem", "2.5rem"]}
              fontFamily="Cera Pro"
              fontStyle="italic"
              fontWeight="900"
            >
              Join as a Wocman.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

//992 - 1122
