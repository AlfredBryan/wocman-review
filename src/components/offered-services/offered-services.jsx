import { Box, Flex, Text } from "@chakra-ui/core";
import { OfferedService } from "../offered-service/offered-service";
// import electricalFittings from "../../assets/images/electrical-fittings.jpg";
// import interiorFittings from "../../assets/images/interior-fittings.jpg";
// import generatorRepair from "../../assets/images/generator-repair.jpg";
import paintingService from "../../assets/images/painting-service.jpg";
import gardeningService from "../../assets/images/gardening-service.jpg";
import cleaningService from "../../assets/images/cleaning-service.jpg";

export const OfferedServices = () => {

    const services = [
      {
        image: "https://res.cloudinary.com/wocman-technology/image/upload/v1604144197/wocman/IMG_20200701_141851_umrzny.jpg",
        heading: "Electrical Fittings",
        text: "get connected to the best electrician in your hood",
      },
      {
        image: "https://res.cloudinary.com/wocman-technology/image/upload/v1604143974/wocman/IMG_3095_yjs1ws.jpg",
        heading: "Interior Fittings",
        text: "get connected to the best electrician in your hood",
      },
      {
        image: "https://res.cloudinary.com/wocman-technology/image/upload/v1604147431/wocman/IMG_3484_o5licw.jpg",
        heading: "Kitchen Fittings",
        text: "we have skilled technicians that can help fix your kitchen",
      },
      {
        image: paintingService,
        heading: "Painting Service",
        text: "we connect you to talented painters in your locality",
      },
      {
        image: gardeningService,
        heading: "Gardening Service",
        text: "get your flowers and grasses trimmed just the way you like it",
      },
      {
        image: cleaningService,
        heading: "Cleaning Service",
        text: "We have the perfect cleaner for you",
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
