import { Flex } from "@chakra-ui/core";
import { Messaging } from "./messaging";
import { MiniProfile } from "./mini-profile";

export const MessageSection = ({ replyChat, result, projectResult }) => {
  return (
    <Flex mt={[4, 8]} w="100%" flexDir={{ base: "column", lg: "row" }}>
      <MiniProfile projectResult={projectResult} />
      <Flex flex="2">
        <Messaging replyChat={replyChat} result={result} />
      </Flex>
    </Flex>
  );
};
