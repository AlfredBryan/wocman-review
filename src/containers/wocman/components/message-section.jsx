import { Flex } from "@chakra-ui/core";
import { Messaging } from "./messaging";
import { MiniProfile } from "./mini-profile";

export const MessageSection = () => {
  return (
    <Flex mt={[4, 8]} w="100%">
      <MiniProfile />
      <Flex flex="2">
        <Messaging />
      </Flex>
    </Flex>
  );
};
