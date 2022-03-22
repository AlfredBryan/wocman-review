/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { axios } from "../../../utils/axios";
// import { MessageSection } from "../components/message-section";
import { WorkDescription } from "../components/work-description";

const WocStation = () => {
  const { id } = useParams();
  const [project, setProject] = useState("");

  const getSingleJob = async () => {
    try {
      const res = await axios.get(`/admin/dashboard/projects/${id}`);
      console.log(res?.data?.data, "single");
      setProject(res?.data?.data);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    getSingleJob();
  }, [id]);

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
        <WorkDescription project={project} />
        {/* <MessageSection /> */}
      </Flex>
    </Box>
  );
};

export default WocStation;
