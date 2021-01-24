import { Box, Flex, Image, Text } from "@chakra-ui/core";
import BankAccount from "../../../assets/images/bank-account.svg";
import cancel from "../../../assets/icons/cancel.svg";
import { useHistory } from "react-router";
import { CustomInput } from "../../../components/custom-input/custom-input";
import { CustomButton } from "../../../components/custom-button/custom-button";
import AccountAlertIcon from "../../../assets/icons/account-alert.svg";

export const AddBank = () => {
  const history = useHistory();
  return (
    <Box
      minH="100vh"
      backgroundColor="wocman.contact"
      w="100%"
      align="center"
      justify="center"
      flexDirection="column"
      py={{ base: 6, md: 12 }}
      px={{ base: 4, md: 12, lg: 32 }}
    >
      <Flex justify="flex-end" mb={{ base: 6, md: 12 }}>
        <Image src={cancel} onClick={() => history.goBack()} cursor="pointer" />
      </Flex>
      <Flex
        w="100%"
        backgroundColor="#FCFDFD"
        borderRadius="10px"
        px={{ base: 4, md: 8 }}
        py={4}
      >
        <Flex
          flex={{ base: 1.5, md: 1.2, lg: 0.8 }}
          flexDir="column"
          justify="center"
        >
          <Text
            fontFamily="Poppins"
            fontSize={{ base: "1.2rem", md: "3.2rem" }}
            wordBreak="break-word"
            color="wocman.typography1"
            fontWeight="bold"
          >
            Add a bank account
          </Text>
          <Text
            as="small"
            fontFamily="Poppins"
            d="block"
            my={8}
            color="wocman.typography1"
          >
            Adding a bank account to your profile makes payment easy and
            seamless
          </Text>
        </Flex>
        <Flex
          flex={{ base: 0.5, md: 0.8, lg: 1.2 }}
          align="center"
          justify="flex-end"
        >
          <Image src={BankAccount} alt="bank account" />
        </Flex>
      </Flex>
      <Flex
        flex="1"
        w="100%"
        flexWrap="wrap"
        justifyContent={{ base: "center", xl: "space-between" }}
        mt={{ base: 6, md: 12 }}
      >
        <CustomInput placeholder="Account Number" />
        <CustomInput placeholder="Bank Name" isSelect />
        <Flex flexDir="column" w="100%">
          <CustomInput placeholder="Account Name" />
          <Flex align="center" mt={{ base: -4, md: -8 }}>
            <Image src={AccountAlertIcon} mr={{ base: 2, md: 4 }} />
            <Text color="#ADADAD" fontFamily="Poppins" as="small">
              Account Name must correspond with your name.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify={{ base: "center", md: "flex-end" }}
        mt={{ base: 4, md: 8 }}
        w="100%"
      >
        <CustomButton>Proceed</CustomButton>
      </Flex>
    </Box>
  );
};
