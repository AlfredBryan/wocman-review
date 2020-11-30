import { Box, Flex, Icon, Text } from "@chakra-ui/core";
import Slider from "react-slick";
import paintingService from "../../assets/images/painting-service.jpg";
import gardeningService from "../../assets/images/gardening-service.jpg";
import cleaningService from "../../assets/images/cleaning-service.jpg";

export const OnDemand = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    nextArrow: <Icon name="arrow-forward" size="24px" />,
    prevArrow: <Icon name="arrow-back" size="24px" />,
  };

  const services = [
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1604144197/wocman/IMG_20200701_141851_umrzny.jpg",
      heading: "Electrical Fittings",
      text: "As a holiday destination, Lisbon offers a rich and varied history",
    },
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1604143974/wocman/IMG_3095_yjs1ws.jpg",
      heading: "Interior Fittings",
      text:
        "One of the most beautiful cities and center of Italian Renaissance.",
    },
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1604147431/wocman/IMG_3484_o5licw.jpg",
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
          Work on Demand
        </Text>
      </Flex>
      <Slider {...settings} className="h-full w-full">
        {services.map((service, index) => (
          <OfferedService
            key={index}
            image={service.image}
            heading={service.heading}
            text={service.text}
            index={index}
          />
        ))}
      </Slider>
    </Box>
  );
};

const OfferedService = (props) => {
  return (
    <Box
      bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0) 31.6%, rgba(0, 0, 0, 0.52) 73.45%), url(${props.image});`}
      bgPos="center"
      bgRepeat="no-repeat"
      borderRadius="2.67857px;"
      bg="transparent"
      bgSize="cover"
      my={4}
      //   mr={8}
      //   ml={8}
      mx="auto"
      py={8}
      h="380px"
      width="94%"
    >
      <Flex h="50%"></Flex>
      <Flex h="50%" flexDir="column" px={[4, 4, 4, 4, 6]} color="white"  py={4}
        justify="center">
        <Flex align="center" maxWidth="40%" mb={2}>
          <Text
            as="span"
            fontSize="2em"
            fontFamily="Gilroy-Extrabold"
            lineHeight="42px"
          >
            {props.heading}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontFamily="Gilroy-Regular">{props.text}</Text>
          {/* <Button
            variant="outline"
            borderColor="white"
            ml={4}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            borderRadius="30.7947px"
            width="150px"
            fontSize="0.7rem"
            _hover={{ bg: "rgba(0, 0, 0, 0.1)", opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
          >
            Explore
          </Button> */}
        </Flex>
      </Flex>
    </Box>
  );
};
