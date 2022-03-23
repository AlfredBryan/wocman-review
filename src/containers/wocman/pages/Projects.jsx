/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Heading, useToast, Image } from "@chakra-ui/core";
import React, { useState, useEffect } from "react";

import { axios, statusCheck } from "../../../utils";
import { CardMain, Pagination } from "../components";
import loader from "../../../assets/images/wocman.gif";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/wocman/project/approved`);
      setProjects(res?.data?.data?.rows);
      setHasNextPage(res?.data?.data?.hasNextPage);
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
    getProjects();
  }, []);

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    if (!hasNextPage) return;
    setPage(page + 1);
  };

  if (isLoading) {
    return (
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Image src={loader} />
      </Flex>
    );
  }

  return (
    <>
      <Flex
        // justify="center"
        align="center"
        w="100%"
        h="100%"
        // flex={1}
        flexDir="column"
        p={{ base: 4, md: 8 }}
      >
        <Flex
          mb={{ base: "2rem", lg: "0rem" }}
          w="100%"
          direction={{ base: "column", lg: "row" }}
          justify={"space-between"}
        >
          <Heading fontSize={"20px"} mb="5rem">
            Projects
          </Heading>
        </Flex>

        <Flex padding={"5px"} w="100%" flexWrap="wrap">
          {projects?.map((d, idx) => (
            <CardMain
              id={d.id}
              key={idx}
              view
              title={d.project}
              description={d.description}
              body={d.body}
              status={d.status}
              color={statusCheck(d.status)}
            />
          ))}
        </Flex>
        <Pagination
          page={page}
          shldPaginate={hasNextPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Flex>
    </>
  );
};

export default Projects;
