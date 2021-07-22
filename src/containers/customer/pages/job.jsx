import { Box, Button, Flex, Text, Image, PseudoBox, Input } from "@chakra-ui/core";
import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
import { CalendarSection } from "../components/schedule";
import { Wallet } from "../components/wallet";
import electrician from "../../../assets/images/electrical-fittings.jpg";
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
            lineHeight="144%"
            fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem", "2.28rem"]}
            w="100%"
          >
            “Find Experienced Gardeners from your location and save up on Extra
            charges with Wocman ”
          </Text>
        </Fade>
        {/* <Flex
          align=""
          justify="center"
          w="100%"
          flexDir={["column", "column", "row", "row", "row"]}
        > */}
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
            w={["100%", "100%", "47%"]}
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
      <div>Featured Wocmen</div>
    <Flex
						w={{ base: "90%", md: "60%", xl: "40%" }}
						h={{ base: "90%", md: "60%", xl: "40%" }}
						flex={1}
						backgroundColor="#FCFDFD"
						justify="center"
						align="center"
						flexDir="column"
					>
						<Image
							src=""
							alt="face mask"
							my={{ base: 8, md: 16 }}
						/>
            <Text>
              Chibuzor Ozoho
						</Text>
            <Text>
             Carpnter
						</Text>
            <Input backgroundColor="#E8E2E7" value="View Details" w="40" />
					
					</Flex>
    </Box>
    </Box>
  );
};

export default Job;

