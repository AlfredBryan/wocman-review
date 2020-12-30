import { Box, Flex, Icon, Image, PseudoBox, Text } from "@chakra-ui/core";
import Slider from "react-slick";
import briefcase from "../../../assets/icons/briefcase.svg";
import calendar from "../../../assets/icons/calendar.svg";
import clock from "../../../assets/icons/clock.svg";
import whitecheck from "../../../assets/icons/check-white.svg";
import wocstation from "../../../assets/images/wocstation.svg";
import { services } from "../../../utils/constants";

export const WorkDescription = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  };

  return (
    <Flex w="100%" flexDir="column" background="white" p={{ base: 4, md: 8 }}>
      <Flex flexDir={{ base: "column", xl: "row" }}>
        <Flex flexDirection="column" flex={1} order={{ base: 1, xl: 0 }}>
          {" "}
          <Text
            as="small"
            fontFamily="Poppins"
            fontSize={{ base: "0.8rem", md: "1rem" }}
            color="wocman.typography2"
          >
            Work Description
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: "1.4rem", md: "1.6rem" }}
            mt={{ base: 4, md: 6 }}
            fontWeight="600"
          >
            I would Like to fix my sink
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize={{ base: "0.8rem", md: "1rem" }}
            mt={{ base: 4, md: 6 }}
            fontWeight="200"
            lineHeight="24px"
          >
            My Sink developed a hose problem which, i tried fixing myself but
            ended up bringing my house down.
          </Text>
          <Flex my={{ base: 4, md: 6 }} align="center">
            <Image src={briefcase} alt="briefcase" size="1.2rem"/>
            <Text color="wocman.typography2" fontFamily="Poppins" ml={[4]} fontSize="0.8rem">
              No 16, Adesanya street. Lagos Nigeria
            </Text>
          </Flex>
          <Flex w="100%" flexDir={{ base: "column", sm: "row" }}>
            <Flex
              backgroundColor="wocman.dashboard"
              flex="3"
              flexDir="column"
              borderRadius="10px"
              mr={{ base: 0, sm: 2 }}
              px={[4]}
              py={4}
              mb={{ base: 4, sm: 0 }}
            >
              <Text
                as="small"
                fontFamily="Poppins"
                color="wocman.typography2"
                mb={[2, 4]}
              >
                Appointment set for:
              </Text>
              <Flex>
                <Flex flex="1">
                  <Flex flex="1" align="flex-start">
                    <Image src={calendar} alt="calendar" mr={[4, 8]} />
                    <Box>
                      <Text
                        fontFamily="Poppins"
                        color="wocman.typography2"
                        fontWeight="800"
                        lineHeight="27px"
                      >
                        7 June, 2018
                      </Text>
                      <Text
                        as="small"
                        fontFamily="Poppins"
                        color="wocman.typography2"
                        fontWeight="200"
                      >
                        Date
                      </Text>
                    </Box>
                  </Flex>
                  <Flex flex="1" align="flex-start">
                    <Image src={clock} alt="clock" mr={[4, 8]} />
                    <Box>
                      <Text
                        fontFamily="Poppins"
                        color="wocman.typography2"
                        fontWeight="800"
                        lineHeight="27px"
                      >
                        10:45AM
                      </Text>
                      <Text
                        as="small"
                        fontFamily="Poppins"
                        color="wocman.typography2"
                        fontWeight="200"
                      >
                        Time
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                {/* <Flex flex="1"></Flex> */}
              </Flex>
            </Flex>
            <PseudoBox
              as="button"
              borderRadius="10px"
              backgroundColor="wocman.typography1"
              mb={{ base: 4, sm: 0 }}
              _hover={{ opacity: "0.7" }}
              _active={{ transform: "scale(0.98)" }}
              _focus={{ outline: "none" }}
            >
              <Flex
                justify="center"
                align="center"
                flexDir="column"
                px={[4, 8]}
                py={[2]}
              >
                <Image src={whitecheck} alt="check" />
                <Text fontFamily="Poppins" color="white">
                  Begin
                </Text>
              </Flex>
            </PseudoBox>
          </Flex>
        </Flex>
        <Flex flex={1} justify="center">
          <Image src={wocstation} alt="wocstation" />
        </Flex>
      </Flex>
      <Flex flexDir="column">
        <Flex align="center" my={{ base: 4, md: 6 }}>
          <Text fontFamily="Poppins" color="wocman.typography1">
            See Work Images
          </Text>
          <Icon
            name="arrow-forward"
            color="wocman.typography1"
            size="1.5rem"
            ml={[4, 8]}
          />
        </Flex>
        <Flex w="100%"></Flex>
      </Flex>
      <Box mb={[8, 4]}>
        <Slider {...settings} className="h-full w-full">
          {services.map((service, index) => (
            <Box
              bgImage={`url(${service.image})`}
              bgPos="center"
              bgRepeat="no-repeat"
              className="override"
              borderRadius="10px"
              bg="transparent"
              bgSize="cover"
              my={4}
              //   mr={8}
              //   ml={8}
              mx="auto"
              py={8}
              h="120px"
              width="90%"
            ></Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};
