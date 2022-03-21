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
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useLocation, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { customerChat, sendChat } from "../../../state/actions";
import { useParams } from "react-router-dom";
import moment from "moment";

export const Messaging = (props) => {
  const { id, projectid } = useParams();

  const ref = useRef(null);
  const boxRef = useRef(null);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { result } = useSelector(
    ({ customerChat: { result, error, isLoading, message } = {} }) => ({
      result,
      error,
      isLoading,
      message,
    })
  );
  useEffect(() => {
    const chatData = {
      customerid: id,
      chatLimit: 50,
      perPage: 10,
      page: 1,
      projectid,
    };
    dispatch(customerChat(chatData));
  }, [dispatch, id, projectid]);

  const sender = result?.chat;

  useEffect(() => {
    ref.current && boxRef.current.scrollTo(0, ref.current.offsetTop);
  }, []);

  useEffect(() => {
    ref.current && boxRef.current.scrollTo(0, ref.current.offsetTop);
  }, [location]);

  return (
    <Flex
      backgroundColor="#FCFDFD"
      w="100%"
      h={props.isMessageScreen ? "100vh" : "50vh"}
      flexDir="column"
      position="static"
    >
      {props.isMessageScreen && (
        <Flex
          py={4}
          align="center"
          d={{ base: "flex", lg: "none" }}
          w="100%"
          zIndex="1"
          backgroundColor="white"
        >
          <PseudoBox
            as={AiOutlineArrowLeft}
            size="20px"
            color="wocman.color1"
            mx={2}
            onClick={() => {
              props.toggle();
              history.push("/wocman/messaging");
            }}
            cursor="pointer"
            _hover={{ color: "wocman.typography1" }}
          />
          <Text fontFamily="Poppins" fontWeight="bold">
            Chats
          </Text>
        </Flex>
      )}
      <Box
        overflowY="scroll"
        position="relative"
        ref={boxRef}
        mt={{ base: 12, lg: 0 }}
      >
        <ChatHeader
          sender="https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1439.1439a/s150x150/116583025_659529457982256_6712328410517649834_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_-0yCFguyhwAX-59hkb&tp=1&oh=648e6d321031117ac7c492410ee56fbb&oe=602BE246"
          receiver="https://res.cloudinary.com/wocman-technology/image/upload/v1608893692/wocman/Snapchat-1934776076_k2y2xb.jpg"
          senderName="Tayo Olajide"
        />
        {result?.chat?.length === 0 ? (
          <Flex justify="center" mt="10rem">
            <Text>You Have no New Message</Text>
          </Flex>
        ) : (
          result?.chat?.map((chat) => (
            <ChatSection
              key={chat?.id}
              ownerImage="https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1439.1439a/s150x150/116583025_659529457982256_6712328410517649834_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_-0yCFguyhwAX-59hkb&tp=1&oh=648e6d321031117ac7c492410ee56fbb&oe=602BE246"
              ownerName="Tayo Olajide"
              timeSent={moment(chat?.chattime).format("LLL")}
              message={chat?.message}
              index={0}
              seen={chat?.seen}
            />
          ))
        )}
      </Box>
      {result?.chat?.length !== 0 && (
        <MessageInput
          sender={sender && sender[0]?.senderid}
          id={id}
          projectid={projectid}
        />
      )}
    </Flex>
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

const ChatSection = forwardRef((props, ref) => {
  return (
    <Flex px={{ base: 4, xl: 8 }} pr={{ base: 4, xl: 16 }} pt={4} ref={ref}>
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
      {props.seen === 1 && (
        <Flex>
          <Image src={props.seen && read} size="12px" />
        </Flex>
      )}
    </Flex>
  );
});

const MessageInput = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSendText = async (e) => {
    try {
      e.preventDefault();
      const chatData = {
        customerid: props.id,
        chatLimit: 50,
        perPage: 10,
        page: 1,
        projectid: props.projectid,
      };
      dispatch(
        sendChat(
          {
            customerid: props.sender,
            message: text,
            projectid: parseInt(props.projectid),
            messageType: "media",
          },
          chatData
        )
      );
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      minH="100px"
      h="100px"
      w="100%"
      backgroundColor="wocman.wocmanCategories"
      mt={8}
      px={[4, 8]}
      // position="sticky"
      zIndex="1"
      bottom="0"
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Flex>
      <Flex align="center" onClick={handleSendText} cursor="pointer">
        <Text fontFamily="Poppins" fontSize="0.7rem" mr={[2, 4]}>
          Send
        </Text>
        <Image src={sendArrow} size="12px" />
      </Flex>
    </Flex>
  );
};
