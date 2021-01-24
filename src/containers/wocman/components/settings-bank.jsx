import { Box, Button, Divider, Flex, Text } from "@chakra-ui/core";
import React from "react";

export const SettingsBank = () => {
  return (
    <Box w="100%">
      <InfoCard
        heading="Wallet Info"
        firstTitle="Unique Wallet ID"
        firstDesc="0098987098"
        secondTitle="Bank Name"
        secondDesc="Providus Bank/Stephen jude"
      />
      <InfoCard
        heading="Bank Info"
        firstTitle="Account Number"
        firstDesc="0098987098"
        secondTitle="Bank"
        secondDesc="Guarantee Trust Bank"
        isBank
      />
      <InfoCard
        heading="Payment Schedule Settings"
        firstTitle="Account Number"
        firstDesc="0098987098"
        secondTitle="Bank"
        secondDesc="Guarantee Trust Bank"
        isPaymentSchedule
      />
    </Box>
  );
};

const InfoCard = (props) => {
  return (
    <Box
      w="100%"
      backgroundColor="white"
      my={{ base: 4, md: 8 }}
      borderRadius="10px"
      px={{ base: 4, md: 8 }}
      py={2}
    >
      <Flex justify="space-between" align="center" my={{ base: 2, md: 4 }}>
        <Text fontFamily="Poppins" fontWeight="bold">
          {props.heading}
        </Text>
        {props.isBank && (
          <Button
            border="none"
            background="transparent"
            _focus={{
              outline: "none",
            }}
          >
            <Text
              as="small"
              color="#C1867C"
              fontFamily="Poppins"
              fontWeight="200"
            >
              Change Account
            </Text>
          </Button>
        )}
      </Flex>

      <Divider borderColor="#EEEEEE" w="99%" d="block" my={0} mx="auto" />
      {!props.isPaymentSchedule && (
        <Box my={{ base: 6, md: 12 }}>
          <Flex>
            <Text
              fontFamily="Poppins"
              fontWeight="300"
              mr={{ base: 2, md: 4 }}
              mb={4}
              fontSize={{ base: "0.8rem", md: "1rem" }}
              color="wocman.newsLetter"
            >
              {props.firstTitle}:
            </Text>
            <Text
              fontWeight="bold"
              fontFamily="Poppins"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              color="wocman.newsLetter"
            >
              {props.firstDesc}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontFamily="Poppins"
              fontWeight="300"
              mr={{ base: 2, md: 4 }}
              mb={4}
              fontSize={{ base: "0.8rem", md: "1rem" }}
              color="wocman.newsLetter"
            >
              {props.secondTitle}:
            </Text>
            <Text
              fontWeight="bold"
              fontFamily="Poppins"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              color="wocman.newsLetter"
            >
              {props.secondDesc}
            </Text>
          </Flex>
        </Box>
      )}
      {props.isPaymentSchedule && (
        <Flex my={{ base: 4, md: 8 }}>
          <Flex align="flex-start" w={{ base: "50%", md: "20%" }} mt={4}>
            <input type="checkbox" className="settings-checkbox" />
            <Text
              fontFamily="Gilroy-SemiBold"
              fontWeight="1.3rem"
              w={{ base: "80%", md: "40%" }}
              textAlign="center"
              lineHeight="24px"
            >
              Weekly
            </Text>
          </Flex>
          <Flex align="flex-start" w={{ base: "50%", md: "20%" }} mt={4}>
            <input type="checkbox" className="settings-checkbox" />
            <Text
              fontFamily="Gilroy-SemiBold"
              fontWeight="1.3rem"
              w={{ base: "80%", md: "40%" }}
              textAlign="center"
              lineHeight="24px"
            >
              Monthly
            </Text>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
