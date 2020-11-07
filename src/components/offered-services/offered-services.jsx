import { Box, Flex, Text } from "@chakra-ui/core";
import { OfferedService } from "../offered-service/offered-service";
import electricalFittings from "../../assets/images/electrical-fittings.jpg";
import interiorFittings from "../../assets/images/interior-fittings.jpg";
import generatorRepair from "../../assets/images/generator-repair.jpg";
import paintingService from "../../assets/images/painting-service.jpg";
import gardeningService from "../../assets/images/gardening-service.jpg";
import cleaningService from "../../assets/images/cleaning-service.jpg";

export const OfferedServices = () => {

    const services = [
      {
        image: "https://res.cloudinary.com/wocman-technology/image/upload/v1604144197/wocman/IMG_20200701_141851_umrzny.jpg",
        heading: "Electrical Fittings",
        text: "As a holiday destination, Lisbon offers a rich and varied history",
      },
      {
        image: "https://res.cloudinary.com/wocman-technology/image/upload/v1604143974/wocman/IMG_3095_yjs1ws.jpg",
        heading: "Interior Fittings",
        text: "One of the most beautiful cities and center of Italian Renaissance.",
      },
      {
        image: "https://res.cloudinary.com/wocman-technology/image/upload/v1604147431/wocman/IMG_3484_o5licw.jpg",
        heading: "Kitchen Fittings",
        text: "Modern skyscrapers, high-tech subways and pop culture meet ",
      },
      {
        image: paintingService,
        heading: "Painitng Service",
        text: "Aboramatic landscape with amazing experiences in the city",
      },
      {
        image: gardeningService,
        heading: "Gardening Service",
        text: "One of the principal civilizations of the ancient Middle East",
      },
      {
        image: cleaningService,
        heading: "Cleaning Service",
        text: "A global center for art, fashion, gastronomy and culture",
      },
  
    ];

  return <Box bg="wocman.wocmanCategories" px={[6, 10, 10, 20, 20]} py={20}>
      <Flex pb={12} textAlign="center" justify="center">
        <Text
          fontFamily="Gilroy-SemiBold"
          fontSize="2rem"
          fontStyle="normal"
          fontWeight="600"
          color="wocman.typography1"
        >
          At Your Service
        </Text>
      </Flex>
      <Flex justify="space-evenly" my={8} flexWrap="wrap">
        {services.map((service, index) => (
          <OfferedService
            key={index}
            image={service.image}
            heading={service.heading}
            text={service.text}
          />
        ))}
      </Flex>
  </Box>;
};
