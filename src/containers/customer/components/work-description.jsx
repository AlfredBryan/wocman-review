/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Flex,
  Icon,
  Image,
  PseudoBox,
  Text,
  useToast,
} from "@chakra-ui/core";
import { usePaystackPayment } from "react-paystack";
import { useState, useEffect } from "react";
import moment from "moment";

import briefcase from "../../../assets/icons/briefcase.svg";
import calendar from "../../../assets/icons/calendar.svg";
import clock from "../../../assets/icons/clock.svg";
import whitecheck from "../../../assets/icons/check-white.svg";
import wocstation from "../../../assets/images/wocstation.svg";
import { axios } from "../../../utils/axios";
import { capitalize } from "../../../utils";

export const WorkDescription = ({ project }) => {
  const [transaction, setTransaction] = useState(null);
  const toast = useToast();

  const config = {
    reference: new Date().getTime().toString(),
    email: project?.customer?.email,
    amount: project?.quoteamount * 100,
    publicKey: "pk_test_630d6b7bedc29858c517c0c10ef799b0784d9bcc",
  };

  const onSuccess = (reference) => {
    setTransaction({
      project_id: project?.id,
      amount: project?.quoteamount,
      reference: reference?.reference,
      status: "success",
      transaction_id: reference?.transaction,
    });
  };

  const addPayment = async () => {
    try {
      await axios.post("/admin/dashboard/projects/payment", transaction);
      toast({
        title: "Success",
        description: "Payment successful",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed",
        description: err?.response?.data?.message,
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (transaction) {
      addPayment();
    }
  }, [transaction]);

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Box w="100%">
      <Flex w="100%" flexDir="column" background="white" p={{ base: 4, md: 8 }}>
        <Flex flexDir={{ base: "column", xl: "row" }}>
          <Flex flexDirection="column" flex={1} order={{ base: 1, xl: 0 }}>
            <Text
              as="small"
              fontFamily="Poppins"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              color="wocman.typography2"
            >
              Work Description
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize={{ base: "1.4rem", md: "1.6rem" }}
              mt={{ base: 4, md: 6 }}
              fontWeight="600"
              textTransform={"capitalize"}
            >
              {capitalize(project?.project)}
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              mt={{ base: 4, md: 6 }}
              fontWeight="200"
              lineHeight="24px"
            >
              {capitalize(project?.description)}
            </Text>
            <Flex my={{ base: 4, md: 6 }} align="center">
              <Image src={briefcase} alt="briefcase" size="1.2rem" />
              <Text
                color="wocman.typography2"
                fontFamily="Poppins"
                ml={[4]}
                fontSize="0.8rem"
              >
                {`${capitalize(project?.city)} ${project?.address} ${
                  project?.country
                }`}
              </Text>
            </Flex>
            <Flex w="100%" flexDir={{ base: "column", sm: "row" }}>
              <Flex
                backgroundColor="wocman.dashboard"
                flex="3"
                flexDir="column"
                borderRadius="10px"
                mr={{ base: 0, sm: 2 }}
                px={[4]}
                py={4}
                mb={{ base: 4, sm: 0 }}
              >
                <Text
                  as="small"
                  fontFamily="Poppins"
                  color="wocman.typography2"
                  mb={[2, 4]}
                >
                  Appointment set for:
                </Text>
                <Flex>
                  <Flex flex="1">
                    <Flex flex="1" align="flex-start">
                      <Image src={calendar} alt="calendar" mr={[4, 8]} />
                      <Box>
                        <Text
                          fontFamily="Poppins"
                          color="wocman.typography2"
                          fontWeight="800"
                          lineHeight="27px"
                        >
                          {moment(project?.createdAt).format("ll")}
                        </Text>
                        <Text
                          as="small"
                          fontFamily="Poppins"
                          color="wocman.typography2"
                          fontWeight="200"
                        >
                          Date
                        </Text>
                      </Box>
                    </Flex>
                    <Flex flex="1" align="flex-start">
                      <Image src={clock} alt="clock" mr={[4, 8]} />
                      <Box>
                        <Text
                          fontFamily="Poppins"
                          color="wocman.typography2"
                          fontWeight="800"
                          lineHeight="27px"
                        >
                          {moment(project?.createdAt).format("LT")}
                        </Text>
                        <Text
                          as="small"
                          fontFamily="Poppins"
                          color="wocman.typography2"
                          fontWeight="200"
                        >
                          Time
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <PseudoBox
                as="button"
                borderRadius="10px"
                backgroundColor="wocman.typography1"
                mb={{ base: 4, sm: 0 }}
                _hover={{ opacity: "0.7" }}
                _active={{ transform: "scale(0.98)" }}
                _focus={{ outline: "none" }}
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
              >
                <Flex
                  justify="center"
                  align="center"
                  flexDir="column"
                  px={[4, 8]}
                  py={[2]}
                >
                  <Image src={whitecheck} alt="check" />
                  <Text fontFamily="Poppins" color="white">
                    Proceed to payment
                  </Text>
                </Flex>
              </PseudoBox>
            </Flex>
          </Flex>
          <Flex flex={1} justify="center">
            <Image src={wocstation} alt="wocstation" />
          </Flex>
        </Flex>
        <Flex flexDir="column">
          <Flex align="center" my={{ base: 4, md: 6 }}>
            <Text fontFamily="Poppins" color="wocman.typography1">
              See Work Images
            </Text>
            <Icon
              name="arrow-forward"
              color="wocman.typography1"
              size="1.5rem"
              ml={[4, 8]}
            />
          </Flex>
        </Flex>
        <Box mb={[8, 4]}>
          <Flex direction={{ base: "column", lg: "row" }} w={"100%"}>
            {project?.images?.map((img, index) => (
              <Box
                bgImage={`url(${img})`}
                bgPos="center"
                key={index}
                ml={{ base: "0rem", lg: index > 0 && "2rem" }}
                width={{ base: "100%", lg: "20%" }}
                bgRepeat="no-repeat"
                className="override"
                borderRadius="10px"
                bg="transparent"
                bgSize="cover"
                my={4}
                py={8}
                h="120px"
              ></Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
