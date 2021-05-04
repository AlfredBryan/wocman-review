import { Box, Flex, Icon, Text } from "@chakra-ui/core";

export const CalendarSection = ({ item, index }) => {
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
        px={2}
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
