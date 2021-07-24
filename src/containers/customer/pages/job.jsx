import { Box, Button, Flex, Text, Image, Badge } from "@chakra-ui/core";
import { StarIcon } from "@chakra-ui/icons"

import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
import { CalendarSection } from "../components/schedule";
import { Wallet } from "../components/wallet";
import electrician from "../../../assets/images/electrical.png";
import customer from "../../../assets/images/customer.png";
import Fade from "react-reveal/Fade";

const Job = () => {
  const activities = [
    {
      from: "08:00",
      to: "09:30",
      title: "Furniture Repairs for Bedroom",
      description: "Fix 2 front legs of furniture in my kids room.",
    },
    {
      from: "10:00",
      to: "10:30",
      title: "Tree House Repairs",
      description: "Fix 2 front legs of furniture in my kids room.",
    },
    {
      from: "11:00",
      to: "12:30",
      title: "Cupboard Repairs",
      description: "Fix 2 front legs of furniture in my kids room.",
    },
  ];

  return (
    <Box p="40px">
      <Flex
        bgImage={`url(${electrician})`}
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
            fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem", "2.28rem"]}
            w="100vh"
          >
            Submit <br/>
            Work Request
          </Text>
          <Text
            fontFamily="Gilroy-Bold"
            color="white"
            w="100%"
          >
            Submit a work request to enable <br/>
            us provide you with the best services.
          </Text>
        </Fade>
          <Button
            mr={[0, 0, 8]}
            mb={[8, 8, 0]}
            borderColor="#552D1E"
            fontSize="1rem"
            fontStyle="500"
            color="#FFFFFF"
            backgroundColor="#552D1E"
            borderRadius="4px"
            h={12}
            w={["15rem"]}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
          >
            Submit
          </Button>
        {/* </Flex> */}
      </Flex>
      <Flex flex={[0, 0, 0, 1, 1]}></Flex>
    </Flex>
    <Box w="100%" mt="5" backgroundColor="#F9F9F9" p="5">
      <Text pb="6px">Featured Wocmen</Text>
    <Flex
    w="30vh"
    h="30vh"
    backgroundColor="#FCFDFD"
    >
      <Flex
        flex={1}
        justify="center"
        align="center"
        flexDir="column"
      >
          <Image
            src={customer}
            alt="face mask"
            my="3"
          />
          <Text>
            Chibuzor Ozoho
          </Text>
          <Text color="#778899" mt="3">
            Carpnter
          </Text>
          <Button backgroundColor="#E8E2E7" color="#552D1E" fontSize="0.6rem" w="40" mt="3">
            View Details
          </Button>
      </Flex>
      <Box mt="8" pr="3">
        <Badge variant="none" color="#778899" backgroundColor="#F6F1F1">
        5.0 <StarIcon color="#FFC850" />
        </Badge>
      </Box>

      </Flex>
    </Box>
    </Box>
  );
};

export default Job;

