import { Box, Button, Divider, Flex, Text } from "@chakra-ui/core";

export const Notifications = () => {
  return (
    <Flex
      w="100%"
      backgroundColor="white"
      py={{ base: 4, md: 8 }}
      flexDirection="column"
    >
      <Box w="100%" py={{ base: 2, md: 4 }} px={{ base: 6, md: 16 }}>
        <Text color="wocman.newsLetter" fontFamily="Poppins">
          Notifications
        </Text>
      </Box>
      <>
        <Divider borderColor="wocman.newsLetter" />
        <Flex px={{ base: 6, md: 16 }} py={2} flexDirection="column">
          <Flex align="center" justify="space-between" w="100%" mb={4}>
            <Text fontFamily="Poppins" fontWeight="500">
              New Job Alert
            </Text>
            <Text as="small" fontFamily="Poppins">
              Now
            </Text>
          </Flex>
          <Flex w="100%">
            <Flex flex={1}>
              <Text as="small" fontFamily="Poppins" fontWeight="300">
                Dear kazeem, we wish to inform you of a job offfer that best
                fits your profile, below are more ...
              </Text>
            </Flex>
            <Flex flex={1} justify="flex-end">
              <Button
                backgroundColor="#dbeece"
                color="wocman.green"
                h="35px"
                w={["70%", "65%", "50%", "40%", "40%"]}
                mr="2rem"
                borderRadius="0"
                _hover={{ opacity: "0.7" }}
                _active={{ transform: "scale(0.98)" }}
                _focus={{ outline: "none" }}
              >
                <Text
                  as="small"
                  fontFamily="Poppins"
                  fontWeight="bold"
                  color="wocman.green"
                >
                  Accept
                </Text>
              </Button>
              <Button
                backgroundColor="#fde0e0"
                color="wocman.red"
                h="35px"
                w={["70%", "65%", "50%", "40%", "40%"]}
                borderRadius="0"
                _hover={{ opacity: "0.7" }}
                _active={{ transform: "scale(0.98)" }}
                _focus={{ outline: "none" }}
              >
                <Text
                  as="small"
                  fontFamily="Poppins"
                  fontWeight="bold"
                  color="wocman.red"
                >
                  Reject
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </>
      <>
        <Divider borderColor="wocman.newsLetter" />
        <Flex px={{ base: 6, md: 16 }} py={2} flexDirection="column">
          <Flex align="center" justify="space-between" w="100%" mb={4}>
            <Text fontFamily="Poppins" fontWeight="500">
              Account Credited
            </Text>
            <Text as="small" fontFamily="Poppins">
              Now
            </Text>
          </Flex>
          <Flex w="100%">
            <Flex flex={1}>
              <Text as="small" fontFamily="Poppins" fontWeight="300">
                Dear Kazeem, your Wallet has been credited with a sum of
                N30,000.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </>
    </Flex>
  );
};
