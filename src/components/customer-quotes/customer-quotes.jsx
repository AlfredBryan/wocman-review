import { Flex, Image, PseudoBox, Text } from "@chakra-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import join from "../../assets/images/join.jpg";

export const CustomerQuotes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Flex
      px={[4, 4, 4, 24, 24]}
      pb={[8, 8, 8, 0, 0]}
      minH={["80vh", "80vh", "50vh", "50vh", "45vh"]}
      border="1px"
      flexWrap="wrap"
      borderStyle="solid"
      flexDirection={["column", "column", "row", "row", "row"]}
      borderColor="wocman.quotes"
      backgroundColor="wocman.featuredService"
    >
      <Flex
        flexDirection="column"
        px={[4, 4, 20, 20, 20]}
        py={[8, 8, 16, 24, 24]}
        w={["100%", "100%", "50%", "50%", "50%"]}
        flex="1"
        textAlign={["center", "center", "start", "start", "start"]}
      >
        <Text
          as="small"
          textTransform="uppercase"
          fontFamily="Poppins"
          fontWeight="500"
          letterSpacing="0.1em"
          lineHeight="15px"
          fontSize="0.7rem"
          color="wocman.newsLetter"
          mb={4}
        >
          Testimonials
        </Text>
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          letterSpacing="0.1em"
          fontSize="2rem"
          lineHeight="54px"
          mb={4}
          color="wocman.typography1"
        >
          Customer's Quotes
        </Text>
        <Text
          as="small"
          fontFamily="Poppins"
          fontWeight="600"
          letterSpacing="0.03em"
          lineHeight="189.29%"
          fontSize="0.7rem"
          color="wocman.newsLetter"
        >
          This is what our customers think about us.
        </Text>
      </Flex>
      <Flex
        flex="1"
        w={["100%", "100%", "50%", "50%", "50%"]}
        py={[0, 0, 16, 16, 16]}
      >
        <Slider {...settings} className="h-full">
          <PseudoBox
            boxShadow="0px 5px 50px #F3F5FA"
            border="1px"
            outline="none"
            position="relative"
            borderStyle="solid"
            borderColor="wocman.quotes"
            background="white"
            minHeight="100%"
            _hover={{ transform: "scale(0.97)" }}
            cursor="pointer"
            px={16}
            py={16}
          >
            <Text
              as="small"
              fontFamily="Poppins"
              fontWeight="600"
              letterSpacing="0.03em"
              lineHeight="189.29%"
              fontSize="0.7rem"
              color="wocman.newsLetter"
            >
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
              usu vidit tractatos, vero tractatos ius an, in mel diceret
              persecuti.
            </Text>
            <Image
              src={join}
              alt="customer"
              w="70px"
              h="70px"
              borderRadius="50%"
              position="absolute"
              bottom="-40px"
              left={["39%", "39%", "39%", "44%", "44%"]}
              zIndex="20"
            />
          </PseudoBox>
          <PseudoBox
            boxShadow="0px 5px 50px #F3F5FA"
            border="1px"
            outline="none"
            position="relative"
            borderStyle="solid"
            borderColor="wocman.quotes"
            background="white"
            minHeight="100%"
            _hover={{ transform: "scale(0.97)" }}
            cursor="pointer"
            px={16}
            py={16}
          >
            <Text
              as="small"
              fontFamily="Poppins"
              fontWeight="600"
              letterSpacing="0.03em"
              lineHeight="189.29%"
              fontSize="0.7rem"
              color="wocman.newsLetter"
            >
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
              usu vidit tractatos, vero tractatos ius an, in mel diceret
              persecuti.
            </Text>
            <Image
              src={join}
              alt="customer"
              w="70px"
              h="70px"
              borderRadius="50%"
              position="absolute"
              bottom="-40px"
              left={["39%", "39%", "39%", "44%", "44%"]}
              zIndex="20"
            />
          </PseudoBox>
        </Slider>
      </Flex>
    </Flex>
  );
};
