import { Box, Flex, Text } from "@chakra-ui/core";
import mission from "../../assets/images/mission.jpg";
import vision from "../../assets/images/vision.jpg";
import story from "../../assets/images/story.jpg";

export const AboutSubsection = () => {
  const content = [
    {
      title: "Our Mission",
      body:
        "Wocman Technology is a people organization helping to bridge social gaps by connecting Africa’s informal workforce to improved economic opportunities.",
      image: mission,
    },
    {
      title: "Our Vision",
      body:
        "To be Africa’s leading on-demand workmen pooling platform, where customers in their convenience, can get any job done,  from anywhere with just a tap on their phones.",
      image: vision,
    },
    {
      title: "Our Story",
      body:
        "All domestic, repairs and construction work activities are mostly executed by the hands of tradesmen, technicians, and professionals who mostly get lesser credit for their work and earn little from the use of their skills. This is the spark to our quest as change agents to help the informal workforce earn more to become financially free and well appreciated for their skills. Wocman connects customers to the nearest tradesmen, technicians, and freelance professionals to help execute works with just a tap on a mobile phone when and where you need it, we fix it!",
      image: story,
    },
  ];

  return (
    <Box backgroundColor="wocman.wocmanCategories" py={[12, 12, 12, 20, 20]} px={[4, 4, 20, 24, 24]} h="auto">
      {content.map((item, index) => (
        <SectionItem
          key={index}
          title={item.title}
          body={item.body}
          image={item.image}
          index={index}
        />
      ))}
    </Box>
  );
};

const SectionItem = ({ title, body, image, index }) => {
  return (
    <Flex
      backgroundColor="transparent"
      h={["auto", "auto", "auto", "40vh", "40vh"]}
      flexWrap="wrap"
      pb={[12, 12, 12, 32, 32]}
      mb={[16, 16, 16, 32, 32]}
      justify={["center", "center", "center", "space-between", "space-between"]}
    >
      <Flex
        flexDirection="column"
        w={["90%", "90%", "90%", "45%", "45%"]}
        order={["1", "1", "1", `${index !== 1 ? "0" : "1"}`, `${index !== 1 ? "0" : "1"}`]}
        mb={[4, 4, 4, 0, 0]}
        textAlign={["center", "center", "center", "start", "start"]}
      >
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="2rem"
          color="wocman.typography1"
          mb={8}
          mt={[8, 8, 8, 0, 0]}
        >
          {title}
        </Text>
        <Text
          fontFamily="Poppins"
          fontSize="1rem"
          color="wocman.typography3"
          lineHeight="225%"
        >
          {body}
        </Text>
      </Flex>
      <Flex
        w={["90%", "90%", "90%", "40%", "40%"]}
        minH={["250px", "250px", "250px", "400px", "400px"]}
        mb={[4, 4, 4, 0, 0]}
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Flex>
    </Flex>
  );
};
