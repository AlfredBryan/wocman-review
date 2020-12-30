import {
  Box,
  Divider,
  Flex,
  Image,
  Input,
  PseudoBox,
  Text,
} from "@chakra-ui/core";
import read from "../../../assets/icons/read-tick.svg";
import send from "../../../assets/icons/send-message.svg";
import sendArrow from "../../../assets/icons/message-path.svg";
import {
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlinePaperClip,
} from "react-icons/ai";

export const Messaging = () => {
  return (
    <Box backgroundColor="#FCFDFD" w="100%">
      <ChatHeader
        sender="https://pbs.twimg.com/profile_images/1325235044261240833/MdewYScj_400x400.jpg"
        receiver="https://res.cloudinary.com/wocman-technology/image/upload/v1608893692/wocman/Snapchat-1934776076_k2y2xb.jpg"
        senderName="Tayo Olajide"
      />
      <ChatSection
        ownerImage="https://pbs.twimg.com/profile_images/1325235044261240833/MdewYScj_400x400.jpg"
        ownerName="Tayo Olajide"
        timeSent="9 May 2016, 1:35 p.m."
        message="Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant."
        index={0}
      />
      <ChatSection
        ownerImage="https://res.cloudinary.com/wocman-technology/image/upload/v1608893692/wocman/Snapchat-1934776076_k2y2xb.jpg"
        ownerName="Me"
        timeSent="9 May 2016, 1:35 p.m."
        message="V7 Digital Photo Printing."
        index={1}
      />
      <MessageInput />
    </Box>
  );
};

const ChatHeader = (props) => (
  <Flex
    borderBottom="0.680873px solid #778899"
    p={{ base: 4, xl: 8 }}
    pr={{ base: 2, lg: 8, xl: 16 }}
  >
    <Flex pr={4}>
      <Box
        bgImage={`url(${props.sender})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        bgSize="cover"
        border="2px solid #552D1E"
        //   mr={8}
        //   ml={8}
        h={{ base: "25px", xl: "40px" }}
        zIndex="2"
        width={{ base: "25px", xl: "40px" }}
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
        h={{ base: "25px", xl: "40px" }}
        width={{ base: "25px", xl: "40px" }}
        borderRadius="50%"
      ></Box>
    </Flex>
    <Flex flex="1" flexDirection={{ base: "column", xl: "row" }}>
      <Text fontFamily="Poppins" fontSize={{ base: "1rem", xl: "1.5rem" }}>
        {props.senderName},
      </Text>
      <Text
        fontFamily="Poppins"
        fontSize={{ base: "1rem", xl: "1.5rem" }}
        ml={{ base: 0, xl: 2 }}
      >
        Me
      </Text>
    </Flex>
    <Flex align="center">
      <PseudoBox
        as={AiOutlinePaperClip}
        size="20px"
        color="wocman.color1"
        mr={4}
        transform="rotate(135deg)"
        cursor="pointer"
        _hover={{ color: "wocman.typography1" }}
      />

      <PseudoBox
        as={AiOutlinePlus}
        size="20px"
        color="wocman.color1"
        mr={4}
        cursor="pointer"
        _hover={{ color: "wocman.typography1" }}
      />
      <PseudoBox
        as={AiOutlineDelete}
        size="20px"
        color="wocman.color1"
        cursor="pointer"
        _hover={{ color: "wocman.typography1" }}
      />
    </Flex>
  </Flex>
);

const ChatSection = (props) => (
  <Flex px={{ base: 4, xl: 8 }} pr={{ base: 4, xl: 16 }} pt={4}>
    <Flex pr={4}>
      <Box
        bgImage={`url(${props.ownerImage})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        bgSize="cover"
        border="2px solid #552D1E"
        //   mr={8}
        //   ml={8}
        h={{ base: "40px", xl: "60px" }}
        zIndex="2"
        width={{ base: "40px", xl: "60px" }}
        borderRadius="50%"
      ></Box>
    </Flex>
    <Flex flex="1">
      <Flex flexDir="column" justify="center" py={2} w="100%">
        <Text fontFamily="Poppins">{props.ownerName}</Text>
        <Text
          as="small"
          fontFamily="Poppins"
          color="wocman.typography2"
          fontSize="0.7rem"
        >
          {props.timeSent}
        </Text>
        <Text as="small" fontFamily="Poppins" mt="6" lineHeight="16px">
          {props.message}
        </Text>
        {props.index !== 1 && <Divider mt={[8, 12]} borderColor="#778899" />}
      </Flex>
    </Flex>
    <Flex>
      <Image src={read} size="12px" />
    </Flex>
  </Flex>
);

const MessageInput = (props) => (
  <Flex
    h="100px"
    w="100%"
    backgroundColor="wocman.wocmanCategories"
    mt={8}
    px={[4, 8]}
  >
    <Flex align="center" pr={[4, 8]}>
      <Image src={send} size="20px" />
    </Flex>
    <Flex align="center" flex="1">
      <Input
        w="100%"
        placeholder="Type your Message"
        minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
        fontFamily="Poppins"
        fontSize="0.7rem"
        border="none"
        backgroundColor="transparent"
        color="wocman.typography1"
        _focus={{ outline: "none", border: "none" }}
        _placeholder={{ color: "wocman.typography1" }}
      />
    </Flex>
    <Flex align="center">
      <Text fontFamily="Poppins" fontSize="0.7rem" mr={[2, 4]}>
        Send
      </Text>
      <Image src={sendArrow} size="12px" />
    </Flex>
  </Flex>
);
