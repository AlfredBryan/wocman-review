import { Box, Flex, Image, Text } from "@chakra-ui/core";
// import mission from "../../assets/images/mission.jpg";

export const Advisory = () => {
  return (
    <Box px={[4, 4, 20, 20, 24]} mb={20}>
      <Box textAlign="center" my={[12, 12, 12, 6, 6]}>
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          color="wocman.typography1"
          fontSize="2rem"
        >
          Advisory
        </Text>
      </Box>
      <Flex
        backgroundColor="transparent"
        zIndex="1"
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Flex flex={["", "", "", "1", "1"]} h="40vh" align="center">
          <Image
            src="https://res.cloudinary.com/wocman-technology/image/upload/v1607270526/wocman/IMG_4154_iskgzt.jpg"
            alt="advisory"
            h={["100%", "100%", "100%", "80%", "80%"]}
            minWidth={["100%", "100%", "100%", "130%", "130%"]}
            mb={[16, 16, 16, 0, 0]}
            zIndex="2"
          />
        </Flex>
        <Flex
          flex={["", "", "", "4", "4"]}
          backgroundColor="wocman.wocmanCategories"
          minH="40vh"
          boxShadow="0px 4px 26px rgba(0, 0, 0, 0.06)"
          align="center"
          justify="center"
          p={[8, 8, 16, 0, 0]}
        >
          <Flex w={["90%", "90%", "90%", "60%", "60%"]} mx="auto" my={2}>
            <Text
              fontFamily="Poppins"
              as="small"
              lineHeight="225%"
              fontWeight="500"
              fontSize="1rem"
              color="wocman.typography3"
            >
              Karen Jensen is an American entrepreneur, a dedicated mentor,
              blogger, technology consultant, an expert in smartER cities, and
              cybersecurity. She is currently the president of Saaby Consulting
              Company. One of her primary lifetime goals is to swim in as many
              bodies of water on Earth as she can to leverage technology to help
              solve real-life problems.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
