import { Box, Flex, Text } from "@chakra-ui/core";
import AuthBgImage from "../../../assets/images/auth.jpg";
// import mission from "../../../assets/images/mission.jpg";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const MiniProfile = () => {
  return (
    <Box
      backgroundColor="#FCFDFD"
      flex="1.3"
      mr={{ base: 0, lg: 8 }}
      h="fit-content"
      mb={{ base: 8, lg: 0 }}
    >
      <Box
        bgImage={`url(${AuthBgImage})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        position="relative"
        bgSize="cover"
        //   mr={8}
        //   ml={8}
        mx="auto"
        py={8}
        h="150px"
        width="100%"
      >
        <Box
          bgImage={`url(${"https://pbs.twimg.com/profile_images/1325235044261240833/MdewYScj_400x400.jpg"})`}
          bgPos="center"
          bgRepeat="no-repeat"
          bg="transparent"
          position="absolute"
          bgSize="cover"
          border="1.43126px solid #552D1E"
          //   mr={8}
          //   ml={8}
          h="100px"
          width="100px"
          borderRadius="50%"
          bottom="-45px"
          //   transform="translate(-50%, 0)"
          //   left="50%"
          left="0"
          right="0"
          margin="0 auto"
          zIndex="20"
        ></Box>
      </Box>
      <Box textAlign="center" mt={12} py={8}>
        <Text fontFamily="Poppins" fontSize="1.5rem" fontWeight="500" mb={2}>
          Tayo Olajide
        </Text>
        <Text as="small" fontFamily="Poppins" mb={2}>
          Client
        </Text>
        <Flex justify="center" align="center" my={2} px={2}>
          <Box
            as={AiOutlinePhone}
            size="1.2rem"
            color="wocman.typography2"
            mr={4}
            transform="scaleX(-1)"
          />
          <Text
            fontFamily="Poppins"
            color="wocman.typography2"
            fontWeight="300"
            fontSize="1rem"
          >
            090 889 234 9878
          </Text>
        </Flex>
        <Flex justify="center" align="center" mt={2} px={2}>
          <Box
            as={AiOutlineMail}
            size="1.2rem"
            color="wocman.typography2"
            mr={4}
          />
          <Text
            fontFamily="Poppins"
            color="wocman.typography2"
            fontWeight="300"
            fontSize="1rem"
          >
            tayoolajide1@gmail.com
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
