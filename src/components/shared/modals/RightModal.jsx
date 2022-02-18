import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React from "react";

import CloseIcon from "../../../assets/icons/cancel.svg";
import CloseBtn from "./CloseBtn";

function RightModal(props) {
  // eslint-disable-next-line react/prop-types
  const { title, subtitle, children, showModal, setShowModal, ...rest } = props;

  function closemodal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Box
          w="100vw"
          h="100vh"
          position="fixed"
          zIndex="300"
          top="0"
          left="0"
          background="rgba(255, 255, 255, .2)"
          style={{ backdropFilter: "blur(2px)" }}
          className="rightModal"
        >
          <Box
            w={{ base: "100%", lg: "652px" }}
            h="100vh"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            bg="#fff"
            position="absolute"
            top="0"
            right="0"
            zIndex=""
            {...rest}
          >
            <Box bg="#552D1E">
              <Flex
                pl="2rem"
                pb="3.7rem"
                pr="1.2rem"
                pt="2.7rem"
                justify="space-between"
                align="center"
              >
                <Box>
                  <Text
                    fontWeight="bold"
                    fontSize="2rem"
                    color="#FFFFFF"
                    textTransform="capitalize"
                    fontFamily="Gilroy-Bold"
                  >
                    {title}
                  </Text>
                  <Text
                    mt=".8rem"
                    opacity="0.5"
                    color="#FFFFFF"
                    fontSize="1.5rem"
                  >
                    {subtitle}
                  </Text>
                </Box>
                <CloseBtn closemodal={closemodal}>
                  <Image src={CloseIcon} alt="close" />
                </CloseBtn>
              </Flex>
            </Box>
            <Box
              pl="2.2rem"
              pr="2rem"
              pt="2.1rem"
              pb="2rem"
              h="70vh"
              overflowY={{ base: "scroll", lg: "auto" }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export { RightModal };
