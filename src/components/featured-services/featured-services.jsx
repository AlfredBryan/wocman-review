import { Flex, Text } from "@chakra-ui/core";
import { FeaturedService } from "../featured-service/featured-service";
import makeup from "../../assets/images/makeup.svg";
import plumbing from "../../assets/images/plumbing.svg";
import house from "../../assets/images/house.svg";
import carpenter from "../../assets/images/carpenter.svg";

export const FeaturedServices = () => {
  const services = [
    {
      image: makeup,
      heading: "Makeup",
      subHeading: "Top artisans skilled with the craft of Makeup Design.",
    },
    {
      image: plumbing,
      heading: "Plumbing",
      subHeading: "Top artisans skilled with the craft of Plumbing.",
    },
    {
      image: house,
      heading: "Architecture",
      subHeading: "Top artisans skilled with the craft of Architecture.",
    },
    {
      image: carpenter,
      heading: "Carpentry",
      subHeading: "Top artisans skilled with the craft of Carpentry.",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      bg="wocman.featuredService"
      h="auto"
      zIndex="-1"
      px={[4, 8, 12, 16, 16]}
      py={16}
    >
      <Flex w="20%"  ml={6}>
        <Text
          fontFamily="Poppins"
          fontSize={["1.3rem", "1.5rem", "1.5rem", "2rem"]}
          fontStyle="normal"
          fontWeight="600"
        >
          Our Featured Service
        </Text>
      </Flex>
      <Flex justify="space-evenly" my={8} flexWrap="wrap">
        {services
          .map((service, index) => (
            <FeaturedService
              key={index}
              image={service.image}
              heading={service.heading}
              subHeading={service.subHeading}
            />
          ))}
      </Flex>
    </Flex>
  );
};
