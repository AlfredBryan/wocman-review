import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React from "react";
import credit from "../../../assets/icons/credit.svg";
import debit from "../../../assets/icons/debit.svg";
import { formatAsMoney } from "../../../utils/format";

export const TransactionList = () => {
  return (
	  <Box p={{ base: 4, md: 8 }} backgroundColor="white" borderRadius="10px">
		  <Text fontWeight="bold" fontFamily="Poppins" fontSize="1.6rem">Transaction History</Text>
      <List src={credit} user="Tayo Olajide" action="Received" amount="20000" />
      <List src={credit} user="Ogun Osun" action="Received" amount="20000" />
      <List src={debit} user="Weekly Payment" action="Sent" amount="70000" />
    </Box>
  );
};

const List = (props) => {
  return (
    <Flex justify="space-between" mt={8}>
      <Image src={props.src} />
      <Box flex="1" ml={4}>
        <Text fontFamily="Poppins" fontWeight="500">
          {props.user}
        </Text>
        <Text as="small" fontWeight="300" fontFamily="Poppins">
          {props.action}
        </Text>
      </Box>
      <Text fontFamily="Poppins" fontWeight="500">
        {props.action === "Sent" ? "-" : "+"}
        {formatAsMoney(props.amount)}
      </Text>
    </Flex>
  );
};
