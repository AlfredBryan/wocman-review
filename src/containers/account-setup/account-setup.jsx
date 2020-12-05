import {
  Button,
  Flex,
  PseudoBox,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/core";
import { useState } from "react";
import "./account-setup.css";

export const AccountSetUp = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Flex
      minH="100vh"
      backgroundColor="wocman.contact"
      w="100%"
      align="center"
      justify="center"
      flexDirection="column"
      py={8}
    >
      <Flex w="85%" h="100%" flex="1">
        <Tabs
          isFitted
          variant="unstyled"
          w="100%"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList
            h="10vh"
            overflow="auto"
            whiteSpace="nowrap"
            className="no-scrollbar"
            flexWrap="nowrap"
          >
            <Tab
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${tabIndex === 0 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
            >
              <Text
                as="small"
                fontFamily="Poppins"
                color="#FFFFFF"
                mb={2}
                opacity="0.4"
              >
                Personal Information
              </Text>
            </Tab>
            <Tab
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${tabIndex === 1 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
            >
              <Text
                as="small"
                fontFamily="Poppins"
                color="#FFFFFF"
                mb={2}
                opacity="0.4"
              >
                Profile Picture
              </Text>
            </Tab>
            <Tab
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${tabIndex === 2 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
            >
              <Text
                as="small"
                fontFamily="Poppins"
                color="#FFFFFF"
                mb={2}
                opacity="0.4"
              >
                Select Work Category
              </Text>
            </Tab>
            <Tab
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${tabIndex === 3 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
            >
              <Text
                as="small"
                fontFamily="Poppins"
                color="#FFFFFF"
                mb={2}
                opacity="0.4"
              >
                Skill Level & Certificate
              </Text>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <PersonalInformation />
            </TabPanel>
            <TabPanel>
              <div>Hello 2</div>
            </TabPanel>
            <TabPanel>
              <div>Hello 3</div>
            </TabPanel>
            <TabPanel>
              <div>Hello 4</div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

const CustomInput = ({ placeholder }) => (
  <Flex w={{ base: "100%", md: "70%",  xl: "46%" }} mb={{ base: 8, md: 12 }}>
    <span className="special-input"></span>
    <PseudoBox
      as="input"
      backgroundColor="wocman.specialInput"
      placeholder={placeholder}
      px={{ base: 8, md: 24 }}
      borderRadius="0 8px 8px 0"
      _placeholder={{ fontWeight: 100 }}
      fontFamily="Poppins"
      h={{ base: "5rem", md: "7rem" }}
      color="white"
      flex={1}
      _focus={{ outline: "none" }}
    />
  </Flex>
);

const PersonalInformation = () => (
  <Flex flexDirection="column">
    <Text
      fontFamily="Poppins"
      fontWeight="600"
      color="white"
      w={{ base: "60%", xl: "30%" }}
      fontSize={{ base: "1.5rem", xl: "3rem" }}
    >
      Complete Profile Setup
    </Text>
    <Text fontFamily="Poppins" color="white" my={{ base: 4, lg: 8 }}>
      for Blag@gmail.com
    </Text>
    <Flex
      flex="1"
      w="100%"
      flexWrap="wrap"
      justifyContent={{ base: "center", xl: "space-between" }}
    >
      <CustomInput placeholder="Firstname" />
      <CustomInput placeholder="Lastname" />
      <CustomInput placeholder="Billing Address" />
      <CustomInput placeholder="Phone Number" />
    </Flex>
    <Flex align="flex-start" justify="center" w="100%" mt={4}>
      <input type="checkbox" className="special-checkbox" />
      <Text
        as="small"
        color="white"
        fontFamily="Gilroy-SemiBold"
        fontWeight="1.3rem"
        w={{ base: "80%", md: "40%" }}
        textAlign="center"
        lineHeight="24px"
      >
        Yes, I understand and agree to the Wocman Terms of service, including
        the User Agreement and Privacy Policy.
      </Text>
    </Flex>
    <Flex
      justify={{ base: "center", md: "flex-end" }}
      mt={{ base: 4, md: 16 }}
      w="100%"
    >
      <CustomButton>Proceed</CustomButton>
    </Flex>
  </Flex>
);

const CustomButton = ({ children }) => (
  <Button
    _focus={{ outline: "none" }}
    h="70px"
    w={{ base: "90%", md: "45%", xl: "25%" }}
    borderRadius="10px"
  >
    <Text></Text>
    {children}
  </Button>
);
