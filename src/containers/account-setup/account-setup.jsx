import {
  Button,
  Divider,
  Flex,
  Image,
  Input,
  PseudoBox,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/core";
import { Fragment, useState } from "react";
import facemask from "../../assets/images/face-mask.svg";
import add from "../../assets/icons/plus-square.svg";
import addWhite from "../../assets/icons/plus-square-white.svg";
import technicians from "../../assets/images/technicians.jpg";
import checkmark from "../../assets/icons/check-circle.svg";
import "./account-setup.css";
import { CustomInput } from "../../components/custom-input/custom-input";
import { CustomButton } from "../../components/custom-button/custom-button";

const AccountSetUp = () => {
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
              <ProfilePicture />
            </TabPanel>
            <TabPanel>
              <WorkCategory />
            </TabPanel>
            <TabPanel>
              <SkillLevel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};


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

const ProfilePicture = () => (
  <Flex
    flexDirection="column"
    align="center"
    alignSelf="stretch"
    py={{ base: 4, md: 6 }}
  >
    <Text
      textAlign="center"
      fontFamily="Poppins"
      fontWeight="600"
      color="white"
      //   w={{ base: "60%", xl: "30%" }}

      fontSize={{ base: "1.5rem", xl: "3rem" }}
    >
      Okay, your face.
    </Text>
    <Text
      fontFamily="Poppins"
      color="white"
      my={{ base: 4, lg: 8 }}
      textAlign="center"
    >
      Upload a profile picture for easy identification.
    </Text>
    <Flex
      w={{ base: "90%", md: "60%", xl: "40%" }}
      h={{ base: "90%", md: "60%", xl: "40%" }}
      flex={1}
      backgroundColor="white"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Image src={facemask} alt="face mask" my={{ base: 8, md: 16 }} />
      <PseudoBox as="label" htmlFor="file-upload">
        <Flex
          justify="center"
          align="center"
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
          backgroundColor="rgba(85, 45, 30, 0.2)"
          border="1.31304px solid #552D1E"
          mb={{ base: 8, md: 16 }}
          cursor="pointer"
        >
          <Image src={add} alt="Upload Picture" mr={{ base: 2, md: 4 }} />
          <Text fontFamily="Poppins" color="wocman.contact" lineHeight="20px">
            Upload Profile Picture
          </Text>
        </Flex>
      </PseudoBox>
      <Input type="file" id="file-upload" display="none" />
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

const WorkCategory = () => (
  <Flex flexDirection="column" alignSelf="stretch" py={{ base: 4, md: 6 }}>
    <Text
      fontFamily="Poppins"
      fontWeight="600"
      color="white"
      w={{ base: "100%", md: "50%", xl: "40%" }}
      fontSize={{ base: "1.5rem", xl: "3rem" }}
      textAlign={{ base: "center", md: "start" }}
    >
      Welcome Kazeem, Select a Category
    </Text>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-between" }}
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <Text
        fontFamily="Poppins"
        color="white"
        my={8}
        textAlign={{ base: "center", md: "start" }}
      >
        Select a job description that best fits your skill.
      </Text>
      <Button
        _focus={{ outline: "none" }}
        h="70px"
        w={{ base: "70%", md: "45%", xl: "25%" }}
        borderRadius="10px"
        d={{ base: "none", md: "flex" }}
      >
        <Text
          fontFamily="Poppins"
          textTransform="capitalize"
          lineHeight="138.6%"
        >
          proceed
        </Text>
      </Button>
    </Flex>
    <Flex
      py={{ base: 4, md: 8 }}
      flexWrap="wrap"
      justify={{ base: "center", md: "space-between" }}
    >
      {Array(3)
        .fill("")
        .map((_, index) => (
          <Category
            key={index}
            image={technicians}
            index={index}
            heading="Technicians"
            content={["Barber", "Hair Stylist", "Makeup Artist", "Cleaner"]}
          />
        ))}
    </Flex>
    <Flex justify="center" mt={4} w="100%" d={{ base: "flex", md: "none" }}>
      <CustomButton>Proceed</CustomButton>
    </Flex>
  </Flex>
);

const Category = (props) => (
  <Flex
    w={["100%", "100%", "48%", "48%", "30%"]}
    bg="white"
    className="wocman-category"
    h="auto"
    mb={["2rem", "2rem", "2rem", "2rem", 0]}
    mr={[0, "1rem", 0]}
    borderRadius="13.5px"
    flexDirection="column"
    overflow="hidden"
  >
    <Image src={props.image} alt={props.title} W="100%" />
    <Flex
      flex="2"
      flexDirection="column"
      justify="space-between"
      pos="relative"
      backgroundColor="wocman.category"
    >
      <Flex
        backgroundColor="wocman.category_heading"
        py={{ base: 2, md: 4 }}
        px={{ base: 8, md: 16 }}
        borderRadius="0px 0px 13.5px 13.5px"
      >
        <Text
          fontSize="1.2rem"
          fontFamily="Poppins"
          fontWeight="600"
          py={2}
          color={`${props.index === 0 ? "white" : "wocman.heading_text"}`}
        >
          {props.heading}
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        px={{ base: 4, md: 8 }}
        pb={{ base: 4, md: 8 }}
        pt={{ base: 2, md: 4 }}
        backgroundColor="wocman.category"
      >
        {props.content.map((item, index) => (
          <Fragment key={index}>
            <Divider borderColor="wocman.contact" />
            <Flex justify="space-between" py={2}>
              <Text
                fontFamily="Poppins"
                lineHeight="138.6%"
                color={`${
                  props.index === 0 && index === 0
                    ? "white"
                    : "wocman.heading_text"
                }`}
                ml={{ base: 4, md: 8 }}
              >
                {item}
              </Text>
              <Image
                src={checkmark}
                alt="check mark"
                mr={{ base: 2, md: 4 }}
                d={`${props.index === 0 && index === 0 ? "flex" : "none"}`}
              />
            </Flex>
          </Fragment>
        ))}
      </Flex>
    </Flex>
  </Flex>
);

const SkillLevel = () => {
  return (
    <Flex flexDirection="column">
      <Text
        fontFamily="Poppins"
        fontWeight="600"
        color="white"
        w={{ base: "60%", xl: "30%" }}
        fontSize={{ base: "1.5rem", xl: "3rem" }}
      >
        Skill Level & Certificate.
      </Text>
      <Text fontFamily="Poppins" color="white" my={{ base: 4, lg: 8 }}>
        Rate your skill Level and Upload Certificate.
      </Text>
      <Flex
        py={{ base: 4, md: 8 }}
        flexWrap="wrap"
        justify={{ base: "center", md: "space-between" }}
      >
        {[
          {
            level: "Newbie",
            description: "I am new to this field with little experience.",
          },
          {
            level: "Intermediate",
            description: "I have substantial experience in this field.",
          },
          {
            level: "Highly Experienced",
            description: "I have deep expertise in this field.",
          },
        ].map((item, index) => (
          <LevelCard
            key={index}
            index={index}
            heading={item.level}
            subheading={item.description}
          />
        ))}
      </Flex>
      <Flex
        justify={{ base: "center", md: "space-between" }}
        mt={{ base: 4, md: 16 }}
        w="100%"
        flexWrap="wrap"
      >
        <PseudoBox
          as="label"
          htmlFor="certificate-upload"
          w={{ base: "90%", md: "45%", xl: "40%" }}
        >
          <Flex
            justify="start"
            align="center"
            px={8}
            py={8}
            backgroundColor="wocman.category"
            mb={{ base: 8, md: 16 }}
            cursor="pointer"
          >
            <Image
              src={addWhite}
              alt="Upload Picture"
              mr={{ base: 2, md: 4 }}
            />
            <Text fontFamily="Poppins" color="white" lineHeight="20px">
              Upload Certificate
            </Text>
          </Flex>
        </PseudoBox>
        <Input type="file" id="certificate-upload" display="none" />
        <CustomButton>Finish</CustomButton>
      </Flex>
    </Flex>
  );
};

const LevelCard = (props) => (
  <Flex
    w={["100%", "70%", "48%", "48%", "30%"]}
    bg="white"
    className="wocman-category"
    h="auto"
    mb={["2rem", "2rem", "2rem", "2rem", 0]}
    mr={[0, "1rem", 0]}
    borderRadius="0 0 13.5px 13.5px"
    flexDirection="column"
    overflow="hidden"
  >
    <Flex
      flex="2"
      flexDirection="column"
      justify="space-between"
      pos="relative"
      backgroundColor="wocman.category"
    >
      <Flex
        backgroundColor="wocman.category_heading"
        py={{ base: 2, md: 4 }}
        px={{ base: 8, md: 16 }}
        justify="space-between"
      >
        <Text
          fontSize="1.2rem"
          fontFamily="Poppins"
          fontWeight="600"
          py={2}
          color={`${props.index === 0 ? "white" : "wocman.heading_text"}`}
        >
          {props.heading}
        </Text>
        <Image
          src={checkmark}
          alt="check mark"
          mr={{ base: 2, md: 4 }}
          d={`${props.index === 0 ? "flex" : "none"}`}
        />
      </Flex>
      <Flex
        flexDir="column"
        px={{ base: 4, md: 8 }}
        pb={{ base: 4, md: 8 }}
        pt={{ base: 2, md: 4 }}
        backgroundColor="wocman.category"
        h="200px"
        align="center"
        justify="center"
      >
        <Flex>
          <Text
            fontFamily="Poppins"
            lineHeight="138.6%"
            color={`${props.index === 0 ? "white" : "wocman.heading_text"}`}
            // ml={{ base: 4, md: 8 }}
          >
            {props.subheading}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);


export default AccountSetUp;