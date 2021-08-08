import { Box, Flex } from "@chakra-ui/core";
import { MessageSection } from "../components/message-section";
import { WorkDescription } from "../components/work-description";
import { useDispatch, useSelector } from "react-redux";
import {
  logChat,
  sendChat,
  fetchProjectCustomer,
  startProject,
  stopProject,
} from "../../../state/actions";
import { useEffect } from "react";

const WocStation = () => {
  const dispatch = useDispatch();

  const { result, error, isLoading, message } = useSelector(
    ({ logChat: { result, error, isLoading, message } = {} }) => ({
      result,
      error,
      isLoading,
      message,
    })
  );

  const {
    result: projectResult,
    error: projectError,
    isLoading: projectLoading,
    message: projectMessage,
  } = useSelector(
    ({ fetchProjectCustomer: { result, error, isLoading, message } = {} }) => ({
      result,
      error,
      isLoading,
      message,
    })
  );

  const replyChat = (state) => {
    dispatch(sendChat(state));
  };

  useEffect(() => {
    dispatch(logChat());
    dispatch(fetchProjectCustomer());
  }, []);

  return (
    <Box w="100%">
      <Flex
        // justify="center"
        align="center"
        w="100%"
        h="100%"
        // flex={1}
        flexDir="column"
        p={{ base: 4, md: 8 }}
      >
        <WorkDescription />
        <MessageSection
          projectResult={projectResult}
          replyChat={replyChat}
          result={result}
        />
      </Flex>
    </Box>
  );
};

export default WocStation;
