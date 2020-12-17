import { Flex, Image, Text } from "@chakra-ui/core";
import purse from "../../../assets/images/purse.svg";

export const Wallet = () => {
  return (
    <Flex
      w="100%"
      backgroundColor="white"
      px={{ base: 6, md: 16 }}
      py={{ base: 4, md: 8 }}
      h="auto"
    >
      <Flex flex={1} flexDirection="column" justify="space-evenly">
        <Text
          fontFamily="Poppins"
          color="#192646"
          fontWeight="600"
          lineHeight="20px"
          mb={8}
        >
          Wallet
        </Text>
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          lineHeight="34px"
          fontSize="2.5rem"
        >
          N70,000.00
        </Text>
        <Text as="small" fontFamily="Poppins" fontWeight="300" my={2}>
          Total Balance
        </Text>
        <Flex>
          <Text
            as="small"
            fontFamily="Poppins"
            fontWeight="300"
            color="wocman.newsLetter"
          >
            Unique Wallet ID:
          </Text>
          <Text
            as="small"
            fontWeight="bold"
            fontFamily="Poppins"
            color="wocman.newsLetter"
          >
            0098987098
          </Text>
        </Flex>
        <Flex>
          <Text
            as="small"
            fontFamily="Poppins"
            fontWeight="300"
            color="wocman.newsLetter"
          >
            Bank Name:
          </Text>
          <Text
            as="small"
            fontWeight="bold"
            fontFamily="Poppins"
            color="wocman.newsLetter"
          >
            Providus/Stephen Jude
          </Text>
        </Flex>
      </Flex>
      <Flex flex={1} justify="flex-end">
        <Image src={purse} alt="purse" />
      </Flex>
    </Flex>
  );
};
