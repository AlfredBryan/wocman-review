import { Box, Flex, Icon, Text } from "@chakra-ui/core";
import { Card } from "../components/card";
import { Notifications } from "../components/notifications";
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
    <Flex
      justify="center"
      w="100%"
      h="auto"
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
      <Flex w="100%" px={{ base: 4, md: 8, xl: 0 }} flex={{ base: 1, xl: 1.2 }}>
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
  );
};

const ActivityCard = ({ from, to, title, desc, index }) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      px={8}
      py={8}
      h="fit-content"
      //   minH={(getContainerHeight(from, to) * 2) + "rem"}
      mb={{ base: 4, md: 8 }}
      backgroundColor={index === 0 ? "#F4C5BE" : " #E8E2E7"}
    >
      <Flex w="100%">
        <Icon
          name="time"
          mr={{ base: 2, md: 4 }}
          color={index === 0 ? "black" : "wocman.newsLetter"}
        />
        <Text
          mb={{ base: 2, md: 4 }}
          fontFamily="Poppins"
          lineHeight="20px"
          fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
          color={index === 0 ? "black" : "wocman.newsLetter"}
        >
          {from} - {to}
        </Text>
      </Flex>
      <Text
        fontFamily="Poppins"
        fontSize={{ base: "1.1rem", md: "1.3rem", xl: "1.7rem" }}
        fontWeight="bold"
        color={index === 0 ? "black" : "wocman.newsLetter"}
      >
        {title}
      </Text>
      <Text
        fontFamily="Poppins"
        fontWeight="300"
        mt={{ base: desc && 2, md: desc && 4 }}
        color={index === 0 ? "black" : "wocman.newsLetter"}
      >
        {desc}
      </Text>
    </Flex>
  );
};

const CalendarSection = ({ item, index }) => {
  const getDiff = (from, to) => {
    const startArr = from.split(":");
    const endArr = to.split(":");
    const start = Number(startArr[0]) * 60 + Number(startArr[1]);
    const end = Number(endArr[0]) * 60 + Number(endArr[1]);
    const diff = end - start;
    return diff;
  };

  const getMarkings = () => {
    const diff = getDiff(item.from, item.to);
    return Math.ceil(diff / 60);
  };

  const getContainerHeight = () => {
    const diff = getDiff(item.from, item.to);
    return diff / 60;
  };

  const markerTotal = getMarkings();

  const containerHeight = getContainerHeight();

  const determineTime = (start) => {
    const startArr = start.split(":");
    return `${startArr[0]}:00`;
  };

  //   const determineEnd = (end) => {
  //     const endArr = end.split(":");
  //     return Number(endArr[1]) > 0 ? `${Number(endArr[0]) + 1}:00` : end;
  //   };

  const determineNext = (current, number) => {
    const currentArr = current.split(":");
    return `${currentArr[0] + number}:00`;
  };
  return (
    <Flex w="100%">
      <Flex flex={0.7} w="100%" flexDir="column">
        {Array(markerTotal)
          .fill("")
          .map((_, idx) => {
            const time =
              idx === 0
                ? determineTime(item.from)
                : idx === markerTotal - 1
                ? determineTime(item.to)
                : determineNext(item.from, idx);
            return <Markings index={index} idx={idx} time={time} />;
          })}
      </Flex>
      <Flex
        flex={2.3}
        px={4}
        // h={+containerHeight * 71 + "px"}
        // maxH={+containerHeight * 71 + "px"}
      >
        <ActivityCard
          from={item.from}
          to={item.to}
          height={containerHeight}
          title={item.title}
          desc={item.description}
          index={index}
        />
      </Flex>
    </Flex>
  );
};

const Markings = ({ index, time, idx }) => (
  <Flex
    flexDir="column"
    w="100%"
    justify="space-evenly"
    mb={{ base: 4, md: 8 }}
  >
    <Text
      mb={{ base: 4, md: 8 }}
      fontFamily="Poppins"
      lineHeight="20px"
      fontSize={{ base: "0.8rem", md: "1rem", xl: "1.2rem" }}
    >
      {time}
    </Text>
    <Box h="1px" backgroundColor="black" w="30%" mb={{ base: 4, md: 8 }}></Box>
    <Box
      h="1px"
      backgroundColor="black"
      border={index === 0 && idx === 0 ? "2px solid #FD749B" : "none"}
      w={index === 0 && idx === 0 ? "100%" : "30%"}
      mb={{ base: 4, md: 8 }}
    ></Box>
    <Box h="1px" backgroundColor="black" w="30%" mb={{ base: 4, md: 8 }}></Box>
  </Flex>
);
