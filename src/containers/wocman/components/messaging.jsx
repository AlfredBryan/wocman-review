import { Box, Flex } from "@chakra-ui/core";

export const Messaging = () => {
  return (
    <Box backgroundColor="#FCFDFD" w="100%" p={8}>
      <ChatHeader
        sender="https://pbs.twimg.com/profile_images/1325235044261240833/MdewYScj_400x400.jpg"
        receiver="https://res.cloudinary.com/wocman-technology/image/upload/v1608893692/wocman/Snapchat-1934776076_k2y2xb.jpg"
      />
    </Box>
  );
};

const ChatHeader = (props) => (
  <Flex>
    <Flex>
      <Box
        bgImage={`url(${props.sender})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        bgSize="cover"
        border="2px solid #552D1E"
        //   mr={8}
        //   ml={8}
        h="40px"
        zIndex="2"
        width="40px"
        borderRadius="50%"
      ></Box>
      <Box
        bgImage={`url(${props.receiver})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        bgSize="cover"
        marginLeft="-10px"
        border="2px solid #552D1E"
        //   mr={8}
        //   ml={8}
        h="40px"
        width="40px"
        borderRadius="50%"
      ></Box>
    </Flex>
  </Flex>
);
