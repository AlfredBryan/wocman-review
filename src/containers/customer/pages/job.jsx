/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Text, Image, useToast } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import electrician from "../../../assets/images/electrical.png";
import Fade from "react-reveal/Fade";
import JobModal from "./JobModal";
import { axios } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";

const Job = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const toast = useToast();

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get("/customer/jobs");

      if (data?.status) {
        setJobs(data.data);
      } else {
        ShowMessage(
          "Error",
          "An error occurred while fetching settings",
          "error",
          toast
        );
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        ShowMessage("Error", errorMessage, "error", toast);
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Box p="40px" w="100%">
      <Flex
        bgImage={`url(${electrician})`}
        bgSize="cover"
        backgroundRepeat="no-repeat"
        bgPos="top center"
        minH="50vh"
        h="auto"
        flexDir={["column", "column", "column", "row", "row"]}
      >
        <Flex
          flexDir="column"
          align={["center", "center", "center", "flex-start", "flex-start"]}
          justify={[
            "space-evenly",
            "space-evenly",
            "space-evenly",
            "space-evenly",
            "space-evenly",
          ]}
          textAlign={["center", "center", "center", "start", "start"]}
          flex="1"
          px={[8, 8, 8, 16, 24]}
          py={4}
        >
          <Fade opposite delay={1000} duration={2000}>
            <Text
              fontFamily="Gilroy-Bold"
              color="white"
              fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem", "2.28rem"]}
              w="100%"
            >
              Submit <br />
              Work Request
            </Text>
            <Text fontFamily="Gilroy-Bold" color="white" w="100%">
              Submit a work request to enable <br />
              us provide you with the best services.
            </Text>
          </Fade>
          <Button
            mr={[0, 0, 8]}
            mb={[8, 8, 0]}
            borderColor="#552D1E"
            fontSize="1rem"
            fontStyle="500"
            color="#FFFFFF"
            backgroundColor="#552D1E"
            borderRadius="4px"
            h={12}
            w={["15rem"]}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            onClick={() => setIsOpen(true)}
          >
            Submit
          </Button>
          {/* </Flex> */}
        </Flex>
        <Flex flex={[0, 0, 0, 1, 1]}></Flex>
      </Flex>

      <Box w="100%" mt="5">
        <Flex flexWrap="wrap">
          {jobs?.map((job, i) => (
            <Flex
              ml={{ base: "0rem", lg: i > 0 ? "2rem" : "0rem" }}
              mb="2rem"
              key={job.id}
              w={{ base: "100%", lg: "30vh" }}
              h="30vh"
              backgroundColor="#FCFDFD"
              boxShadow="0 0 10px #fff"
            >
              <Flex flex={1} justify="center" align="center" flexDir="column">
                <Text wordBreak="break-all" textTransform="capitalize">
                  {job?.project}
                </Text>
                <Image
                  src="https://logopond.com/logos/work.gif"
                  alt="face mask"
                  w="6rem"
                  height="6rem"
                  borderRadius="50%"
                />
                <Text>{job?.description}</Text>
                <Text color="#778899" mt="3">
                  {job?.project_subcategory?.name}
                </Text>
                <Link to={`/customer/job/${job.id}`}>
                  <Button
                    backgroundColor="#E8E2E7"
                    color="#552D1E"
                    fontSize="0.6rem"
                    w="40"
                  >
                    View Details
                  </Button>
                </Link>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>

      <JobModal update={fetchJobs} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default Job;
