/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import moment from "moment";
import {
  Box,
  Flex,
  Icon,
  Image,
  PseudoBox,
  Text,
  useToast,
} from "@chakra-ui/core";

import briefcase from "../../../assets/icons/briefcase.svg";
import calendar from "../../../assets/icons/calendar.svg";
import clock from "../../../assets/icons/clock.svg";
import whitecheck from "../../../assets/icons/check-white.svg";
import wocstation from "../../../assets/images/wocstation.svg";
import { axios, capitalize } from "../../../utils";

export const WorkDescription = ({ id, project, getSingleProject }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const beginProject = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(
        `/wocman/project/accept/${id}?status=in-progress`
      );
      toast({
        title: "Success",
        description: "Project begin successful",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      getSingleProject();
    } catch (error) {
      toast({
        title: "Failed",
        description: error?.response?.data?.message,
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  const completeProject = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(
        `/wocman/project/complete/${id}?status=completed`
      );
      toast({
        title: "Success",
        description: "Project complete successful",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      getSingleProject();
    } catch (error) {
      toast({
        title: "Failed",
        description: error?.response?.data?.message,
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  const projectStep = (status) => {
    switch (true) {
      case status === "in-progress":
        return (
          <PseudoBox
            as="button"
            borderRadius="10px"
            backgroundColor="wocman.typography1"
            mb={{ base: 4, sm: 0 }}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            isLoading={isLoading}
            onClick={completeProject}
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
                {isLoading ? "Completing..." : "Complete"}
              </Text>
            </Flex>
          </PseudoBox>
        );
      case status === "approved":
        return (
          <PseudoBox
            as="button"
            borderRadius="10px"
            backgroundColor="wocman.typography1"
            mb={{ base: 4, sm: 0 }}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            isLoading={isLoading}
            onClick={completeProject}
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
                {isLoading ? "Starting..." : "Begin"}
              </Text>
            </Flex>
          </PseudoBox>
        );
      case status === "completed":
        return (
          <PseudoBox
            as="button"
            borderRadius="10px"
            backgroundColor="wocman.typography1"
            mb={{ base: 4, sm: 0 }}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            isLoading={isLoading}
            onClick={completeProject}
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
                Project completed
              </Text>
            </Flex>
          </PseudoBox>
        );

      default:
        break;
    }
  };

  console.log("begin>>>", project);

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
            >
              {capitalize(project?.project)}
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              mt={{ base: 4, md: 6 }}
              fontWeight="200"
              lineHeight="24px"
              isTruncated
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
                          {project?.wocmanstartdatetime !== null
                            ? moment(project?.wocmanstartdatetime).format("ll")
                            : moment(project?.createdAt).format("ll")}
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
                          {project?.wocmanstartdatetime !== null
                            ? moment(project?.wocmanstartdatetime).format("LT")
                            : moment(project?.createdAt).format("LT")}
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
              {projectStep(project?.status)}
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
          <Flex w="100%"></Flex>
        </Flex>
        <Box mb={[8, 4]}>
          <Flex direction={{ base: "column", lg: "row" }} w={"100%"}>
            {project?.images?.map((img, index) => (
              <Box
                bgImage={`url(${img})`}
                bgPos="center"
                key={index}
                bgRepeat="no-repeat"
                className="override"
                borderRadius="10px"
                bg="transparent"
                bgSize="cover"
                my={4}
                ml={{ base: "0rem", lg: index > 0 && "2rem" }}
                width={{ base: "100%", lg: "40%" }}
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
