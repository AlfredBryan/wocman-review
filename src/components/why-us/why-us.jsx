import { Box, Flex, Image, Text } from "@chakra-ui/core";
import smart from "../../assets/icons/smart.svg";
import trusted from "../../assets/icons/trusted.svg";
import safe from "../../assets/icons/safe.svg";

export const WhyUs = () => {
  const cards = [
    {
      icon: smart,
      heading: "Smart",
      body:
        "With Wocman, you can get any job done from any location, track your wocman, and know the exact work duration.",
    },
    {
      icon: trusted,
      heading: "Trusted",
      body:
        "Our work-partners are carefully recruited from reputable institutions and associations everywhere we operate.",
    },
    {
      icon: safe,
      heading: "Safe",
      body:
        "Wocman is safe for both our customers and work-partners, as all works and transactions happen within the app. ",
    },
  ];

  return (
    <Box
      backgroundColor="wocman.featuredService"
      px={[6, 10, 10, 20, 20]}
      py={20}
    >
      <Flex pb={12} textAlign="center" justify="center">
        <Text
          fontFamily="Poppins"
          fontSize="2rem"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="140.62%"
          color="wocman.typography1"
        >
          Why Choose us
        </Text>
      </Flex>
      <Flex justify="space-around" my={8} flexWrap="wrap">
        {cards.map((item, index) => (
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
      align="center"
      boxShadow="0px 4px 26px rgba(0, 0, 0, 0.06)"
      borderRadius="13.5px"
      bg="white"
      border="1px"
      py={12}
      px={8}
      mb={[8, 8, 8, 0, 0]}
      w={["100%", "100%", "48%", "31%", "31%"]}
      borderStyle="solid"
      borderColor="#000000"
      textAlign="center"
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
