import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React, {useEffect} from "react";
import credit from "../../../assets/icons/credit.svg";
import debit from "../../../assets/icons/debit.svg";
import { formatAsMoney } from "../../../utils/format";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../state/actions";

export const TransactionList = () => {
  const dispatch = useDispatch();

  const { result, error, isLoading, message } = useSelector(
		({ history: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);
  const name = result?.name

  useEffect(() => {
    dispatch(history());
	},[]);
  
  return (
	  <Box p={{ base: 4, md: 8 }} backgroundColor="white" borderRadius="10px">
		  <Text fontWeight="bold" fontFamily="Poppins" fontSize="1.6rem">Transaction History</Text>
      {result?.history?.length == 0 
        ? 
        (
          <Text textAlign="center" p="20">
            You haven’t done a transaction,
            Top up your account to see your 
            transaction history.
          </Text>
          ) 
          : 
          (result?.history?.map((traxn, idx)=>(
          <List src={traxn?.transactiontype == 'receive' ? credit : debit} user={name} action={traxn?.transactiontype} amount={traxn?.amount} key={idx} />
          ))
        // <List src={credit} user="Ogun Osun" action="Received" amount="20000" />
        // <List src={debit} user="Weekly Payment" action="Sent" amount="70000" />
      )}
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
