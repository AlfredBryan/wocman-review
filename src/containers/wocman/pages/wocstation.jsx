/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Image, useToast } from "@chakra-ui/core";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { MessageSection } from "../components/message-section";
import { WorkDescription } from "../components/work-description";
import { logChat, fetchProjectCustomer } from "../../../state/actions";
import { axios } from "../../../utils";
import loader from "../../../assets/images/wocman.gif";

const WocStation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [project, setProject] = useState();

  // const { result } = useSelector(
  //   ({ logChat: { result, error, isLoading, message } = {} }) => ({
  //     result,
  //     error,
  //     isLoading,
  //     message,
  //   })
  // );

  // const {
  //   result: projectResult
  // } = useSelector(
  //   ({ fetchProjectCustomer: { result, error, isLoading, message } = {} }) => ({
  //     result,
  //     error,
  //     isLoading,
  //     message,
  //   })
  // );

  // const replyChat = (state) => {
  //   dispatch(sendChat(state));
  // };

  const getSingleProject = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/admin/dashboard/projects/${id}`);
      setProject(res?.data?.data);
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Failed",
        description: error?.response?.data?.message,
        position: "top-right",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  useEffect(() => {
    dispatch(logChat(1, 474));
    dispatch(fetchProjectCustomer(34));
  }, []);

  if (isLoading) {
    return (
      <Flex w="100vw" h="80vh" align="center" justify="center">
        <Image src={loader} />
      </Flex>
    );
  }

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
        <WorkDescription
          id={id}
          getSingleProject={getSingleProject}
          project={project}
        />
        {/* <MessageSection
          projectResult={projectResult}
          replyChat={replyChat}
          result={result}
        /> */}
      </Flex>
    </Box>
  );
};

export default WocStation;
