import { Button, Flex, Text } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

import gardener from "../../assets/images/gardener.jpg";
import Fade from "react-reveal/Fade";

export const Gardener = () => {
  const location = useHistory();
  return (
    <Flex
      bgImage={`url(${gardener})`}
      bgSize="cover"
      backgroundRepeat="no-repeat"
      bgPos="top center"
      minH="50vh"
      h="auto"
      flexDir={["column", "column", "column", "row", "row"]}
    >
      <Flex
        flexDir="column"
        align={["center", "center", "center", "flex-start", "flex-start"]}
        justify={[
          "space-evenly",
          "space-evenly",
          "space-evenly",
          "space-evenly",
          "space-evenly",
        ]}
        textAlign={["center", "center", "center", "start", "start"]}
        flex="1"
        px={[8, 8, 8, 16, 24]}
        py={4}
      >
        <Fade opposite delay={1000} duration={2000}>
          <Text
            fontFamily="Gilroy-Bold"
            color="white"
            lineHeight="144%"
            fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem", "2.28rem"]}
            w="100%"
          >
            “Find Experienced Gardeners from your location and save up on Extra
            charges with Wocman ”
          </Text>
        </Fade>
        <Flex
          align="center"
          justify="center"
          w="100%"
          flexDir={["column", "column", "row", "row", "row"]}
        >
          <Button
            mr={[0, 0, 8]}
            mb={[8, 8, 0]}
            borderColor="#FFF5EE"
            fontSize="0.7rem"
            backgroundColor="#FFF5EE"
            borderRadius="4px"
            h={12}
            w={["100%", "100%", "47%"]}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            onClick={() => location.push("/register")}
          >
            Get Wocman
          </Button>
          <Button
            fontSize="0.7rem"
            backgroundColor="#778899"
            borderRadius="4px"
            color="white"
            h={12}
            w={["100%", "100%", "47%"]}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            onClick={() => location.push("/register")}
          >
            Become Wocman
          </Button>
        </Flex>
      </Flex>
      <Flex flex={[0, 0, 0, 1, 1]}></Flex>
    </Flex>
  );
};
