import { Box, Flex, Image, Text } from "@chakra-ui/core";
import steel from "../../assets/icons/steel.svg";
import trusted from "../../assets/icons/trusted.svg";
import safe from "../../assets/icons/safe.svg";
import maintenance from "../../assets/icons/maintenance.svg";
import plumbing from "../../assets/icons/plumbing.svg";
import brainPower from "../../assets/icons/brain-power.svg";

export const TopRated = () => {
  const sections = [
    {
      icon: trusted,
      heading: "Carpentry",
      body:
        "From roofing your dream house, making and fixing your house furniture, we have the right plug for you.",
    },
    {
      icon: steel,
      heading: "Steel Work",
      body:
        "Do you need skilled iron benders or fabricators for your next project? We are here for you. ",
    },
    {
      icon: safe,
      heading: "Construction",
      body:
        "Our work pool constitutes various professionals in the construction field to help with your construction works.",
    },
    {
      icon: maintenance,
      heading: "Maintenance",
      body:
        "We can assign you groups of tradesmen, technicians, and professionals for all your maintenance jobs. ",
    },
    {
      icon: plumbing,
      heading: "Plumbing",
      body:
        "If you have plumbing issues, you can book an appointment with a skilled plumber on wocman with just a tap on your phone. ",
    },
    {
      icon: brainPower,
      heading: "Brain Power",
      body:
        "At Wocman, we house a brain bank of trusted professionals to include construction experts and tradesmen. ",
    },
  ];

  return (
    <Box
      backgroundColor="wocman.wocmanCategories"
      px={[6, 10, 10, 20, 20]}
      py={[8, 8, 8, 12, 20]}
    >
      <Flex pb={[4, 4, 4, 12, 12]} textAlign="center" justify="center">
        <Text
          fontFamily="Poppins"
          fontSize="2rem"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="140.62%"
          color="wocman.typography1"
        >
          Top Rated Jobs
        </Text>
      </Flex>
      <Flex justify="space-around" my={8} flexWrap="wrap">
        {sections.map((item, index) => (
          <SubSection
            key={index}
            icon={item.icon}
            heading={item.heading}
            body={item.body}
          />
        ))}
      </Flex>
    </Box>
  );
};
const SubSection = ({ icon, heading, body }) => {
  return (
    <Flex
      flexDir="column"
      py={12}
      px={8}
      mb={[4, 4, 8, 16, 16]}
      w={["100%", "100%", "48%", "31%", "31%"]}
    >
      <Image src={icon} alt={heading} w="100px" h="100px" />
      <Text
        fontFamily="Gilroy-Semibold"
        color="wocman.typography1"
        fontSize="1.5rem"
        mt={8}
        mb={10}
      >
        {heading}
      </Text>
      <Text fontFamily="Gilroy-Semibold" color="wocman.newsLetter">
        {body}
      </Text>
    </Flex>
  );
};
