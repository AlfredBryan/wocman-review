import { Box, Flex } from "@chakra-ui/core";
import { MessageSection } from "../components/message-section";
import { WorkDescription } from "../components/work-description";

const WocStation = () => {
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
        <MessageSection />
      </Flex>
    </Box>
  );
};

export default WocStation;