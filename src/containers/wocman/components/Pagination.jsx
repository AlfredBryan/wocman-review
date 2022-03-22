import { Box, Flex } from "@chakra-ui/core";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import React from "react";

export const Pagination = ({ shldPaginate, prevPage, nextPage, page }) => {
  return (
    <>
      {shldPaginate && (
        <Flex mt="3rem" w="100%" justify={"center"}>
          <Flex gap={"2rem"} align={"center"}>
            <Flex
              align={"center"}
              justify={"center"}
              bg={"brand.brown"}
              borderRadius={"50%"}
              w={"4rem"}
              h={"4rem"}
            >
              <ArrowLeftIcon
                cursor={"pointer"}
                onClick={prevPage}
                color={"#fff"}
              />
            </Flex>
            <Box fontWeight={"bold"}>Page {page}</Box>
            <Flex
              align={"center"}
              justify={"center"}
              bg={"brand.brown"}
              borderRadius={"50%"}
              w={"4rem"}
              h={"4rem"}
            >
              <ArrowRightIcon
                cursor={"pointer"}
                onClick={nextPage}
                color={"#fff"}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};
