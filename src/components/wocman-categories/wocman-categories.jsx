import { Flex, Text } from "@chakra-ui/core";
import tradesmen from "../../assets/images/tradesmen.jpg";
import technicians from "../../assets/images/technicians.jpg";
import professionals from "../../assets/images/professionals.jpg";
import { WocmanCategory } from "../wocman-category/wocman-category";

export const WocmanCategories = () => {
  const services = [
    {
      image: tradesmen,
      heading: "Tradesmen",
      subHeading: "barber, makeup artist, pedicurist, cleaners, hair stylist.",
    },
    {
      image: technicians,
      heading: "Technicians",
      subHeading:
        "mason, carpenter, ironbender, painter, screeders, aluminum fabricators, steel fabricators, solar installers, electricians, plumbers, polystyrene technicians, tilers and generator mechanics.",
    },
    {
      image: professionals,
      heading: "Professionals",
      subHeading: "engineers, geologist, architects, surveyors.",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      bg="wocman.wocmanCategories"
      h="auto"
      px={["8", "10", "20", "20", "24"]}
      py={16}
    >
      <Flex w="20%" mb={16}>
        <Text
          fontFamily="Poppins"
          fontSize={["1.3rem", "1.5rem", "1.5rem", "2rem"]}
          fontStyle="normal"
          fontWeight="600"
        >
          Wocman Categories
        </Text>
      </Flex>
      <Flex
        justify={["center", "center", "space-between"]}
        my={8}
        flexWrap="wrap"
      >
        {services.map((service, index) => (
          <WocmanCategory
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
