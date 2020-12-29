import { Box, Flex, Text } from "@chakra-ui/core";
import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
import { CalendarSection } from "../components/schedule";
import { Wallet } from "../components/wallet";

export const Dashboard = () => {
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
    <Box>
      <Flex
        justify="center"
        w="100%"
        flex={1}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Flex
          flex={{ base: 1, xl: 1.8 }}
          flexDirection="column"
          p={{ base: 4, md: 8 }}
        >
          <Wallet />
          <Flex
            justify={{ base: "center", md: "space-between" }}
            align="center"
            w="100%"
            my={10}
            flexDir={{ base: "column", md: "row" }}
          >
            <Card text="Work Done" number="18" sub="Jobs done" />
            <Card text="Rating" number="5" sub="stars" />
            <Card text="Completion %" number="70%" sub="completion" noMargin />
          </Flex>
          <Notifications />
        </Flex>
        <Flex
          w="100%"
          px={{ base: 4, md: 8, xl: 0 }}
          flex={{ base: 1, xl: 1.2 }}
        >
          <Flex
            flex={1}
            backgroundColor="wocman.sideNav"
            flexDir="column"
            px={{ base: 4, md: 8 }}
            py={{ base: 8, md: 16 }}
            overflowY={{ base: "none", xl: "scroll" }}
            position="static"
            h={{ base: "auto", xl: "100vh" }}
          >
            <Flex flexDir="column">
              <Text
                fontFamily="Poppins"
                fontWeight="500"
                fontSize={{ base: "1.2rem", md: "1.4rem", xl: "1.8rem" }}
                lineHeight="20px"
                mb={{ base: 4, md: 8 }}
              >
                Today's Schedule
              </Text>
              <Text
                fontFamily="Poppins"
                fontWeight="normal"
                fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
                lineHeight="20px"
              >
                <Text
                  as="span"
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
                  lineHeight="20px"
                >
                  Tuesday
                </Text>{" "}
                25 Dec
              </Text>
            </Flex>
            <Flex w="100%" mt={8} flexDir="column">
              {activities.map((item, index) => (
                <CalendarSection key={index} item={item} index={index} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

