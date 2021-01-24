import { Flex, Image, PseudoBox, Text } from "@chakra-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import join from "../../assets/images/join.jpg";
import Fade from "react-reveal/Fade";

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
      //   minH={["80vh", "80vh", "50vh", "50vh", "45vh"]}
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
        <Fade opposite delay={500} duration={2000}>
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
        </Fade>
        <Fade opposite delay={1000} duration={2000}>
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
        </Fade>
        <Fade opposite delay={1500} duration={2000}>
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
        </Fade>
      </Flex>
      <Flex
        flex="1"
        w={["100%", "100%", "50%", "50%", "50%"]}
        py={[0, 0, 16, 16, 16]}
      >
        <Slider {...settings} className="h-full customer-quotes">
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
            p={{ base: 8, sm: 12, xl: 16 }}
          >
            <Fade opposite delay={500} duration={2000}>
              <Text
                as="small"
                fontFamily="Poppins"
                fontWeight="600"
                letterSpacing="0.03em"
                lineHeight="189.29%"
                fontSize="0.7rem"
                color="wocman.newsLetter"
              >
                Wocman platform is home to skilled and trusted workmen. I live
                in Europe, and through wocman, I track the execution of my
                construction projects in Nigeria with no hassle. - Osuji Julia.
              </Text>
            </Fade>
              <Image
                src={join}
                alt="customer"
                w="70px"
                h="70px"
                borderRadius="50%"
                position="absolute"
                bottom="-40px"
                //   left={["39%", "39%", "39%", "44%", "44%"]}
                left="0"
                right="0"
                margin="0 auto"
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
            p={{ base: 8, sm: 10, xl: 16 }}
          >
            <Fade opposite delay={500} duration={2000}>
              <Text
                as="small"
                fontFamily="Poppins"
                fontWeight="600"
                letterSpacing="0.03em"
                lineHeight="189.29%"
                fontSize="0.7rem"
                color="wocman.newsLetter"
              >
                I stay in an estate in Lagos where it is difficult to find a
                trusted carpenter to fix bad door locks, but wocman came through
                for me, I got a free quote from them, and my door locks replaced
                within 30 minutes. - Adekojo Ajayi.
              </Text>
            </Fade>
              <Image
                src={join}
                alt="customer"
                w="70px"
                h="70px"
                borderRadius="50%"
                position="absolute"
                bottom="-40px"
                left="0"
                right="0"
                margin="0 auto"
                //   left={["39%", "39%", "39%", "44%", "44%"]}
                zIndex="20"
              />
          </PseudoBox>
        </Slider>
      </Flex>
    </Flex>
  );
};
