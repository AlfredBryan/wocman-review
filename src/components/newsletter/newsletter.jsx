import { Box, Flex, Input, PseudoBox, Text, useToast } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsLetter, clearNewsToast } from "../../state/actions";
import { ShowMessage } from "../../utils/alert";
import Fade from "react-reveal/Fade";

export const NewsLetter = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [email, setEmail] = useState("");

  const { result, error, isLoading, message } = useSelector(
    ({ newsLetter: { result, error, isLoading, message } = {} }) => ({
      result,
      error,
      isLoading,
      message,
    })
  );

  useEffect(() => {
    if (error) {
      ShowMessage("Error", message, "error", toast);
      dispatch(clearNewsToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (result) {
      setEmail("");
      ShowMessage(
        "Success",
        "Great ! You've been signed up to receive our newsletters",
        "success",
        toast,
        5000
      );
      dispatch(clearNewsToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const submit = () => {
    if (!email) {
      return ShowMessage(
        "Warning",
        "Please provide an email address",
        "warning",
        toast
      );
    }
    dispatch(newsLetter({ email }));
  };

  return (
    <Flex
      minHeight="40vh"
      flexDir={["column", "column", "column", "column", "row"]}
    >
      <Flex
        flex="2"
        flexDirection="column"
        bg="wocman.wocmanCategories"
        align="center"
        justify="center"
        py={16}
      >
        <Box
          w={["90%", "80%", "60%", "60%", "60%"]}
          mx="auto"
          textAlign={["center", "center", "", "", ""]}
        >
          <Fade top delay={500} duration={2000}>
            <Text
              fontSize="2rem"
              color="wocman.typography1"
              fontFamily="Poppins"
              fontWeight="bold"
              lineHeight="54px"
              mb={8}
            >
              Sign up for newsletter
            </Text>
          </Fade>
          <Fade top delay={500} duration={2000}>
            <Text fontFamily="Poppins">
              Be a part of our Community and receive our weekly digest and
              offers.
            </Text>
          </Fade>
        </Box>
      </Flex>
      <Flex
        flex="3"
        bg="wocman.featuredService"
        flexDir={["column", "column", "row", "row", "row"]}
        align="center"
        justify="center"
        px={[4, 6, 8, 12, 16]}
        py={16}
      >
        <Input
          flex="2"
          placeholder="Email Address"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          px={8}
          fontFamily="Poppins"
          value={email}
          fontWeight="bold"
          fontSize={["1rem", "1rem", "1rem", "1.4rem", "1.4rem"]}
          backgroundColor="wocman.wocmanCategories"
          color="wocman.typography1"
          _focus={{ bg: "white" }}
          borderRadius="7.37288px"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PseudoBox
          as="button"
          fontSize={["1rem", "1rem", "1rem", "1.4rem", "1.4rem"]}
          flex="1"
          fontFamily="Poppins"
          fontWeight="bold"
          color="white"
          w={["70%", "70%", "", "", ""]}
          boxShadow="0px 7.37288px 22.1186px rgba(116, 104, 255, 0.2)"
          borderRadius="7.37288px"
          minHeight={["3.5rem", "3.5rem", "3.5rem", "4.5rem", "5rem"]}
          ml={[0, 0, 6, 6, 6]}
          mt={[6, 6, 0, 0, 0]}
          backgroundColor="wocman.typography1"
          disabled={isLoading}
          opacity={isLoading ? 0.5 : ""}
          _hover={{ opacity: "0.7" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ outline: "none" }}
          onClick={submit}
        >
          {isLoading ? "Saving..." : "Save Me"}
        </PseudoBox>
      </Flex>
    </Flex>
  );
};
