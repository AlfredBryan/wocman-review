import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  Box,
  Stack,
  useToast,
} from "@chakra-ui/core";
import professionals from "../../../assets/images/technicians.jpg";
import tradesmen from "../../../assets/images/tradesmen.jpg";
import technicians from "../../../assets/images/professionals.jpg";
import { CustomButton } from "../../../components/custom-button/custom-button";
import checkmark from "../../../assets/icons/check-circle.svg";
import { useState } from "react";
import { ShowMessage } from "../../../utils/alert";
import { axios } from "../../../utils/axios";

const WorkCategory = ({ step, setStep, prevStep, nextStep, firstname }) => {
  const toast = useToast();
  const [newCategory, setNewCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [skill, setSkill] = useState(0);

  const handleSubmitSkill = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/wocman/profile/add/skill", {
        skillid: skill,
        description: "I'm well skilled at this",
      });
      if (data?.status === 200 || 201) {
        ShowMessage("Success", "Skill added successfully", "success", toast);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      let errorMessage = error?.response?.data?.message;
      let fallbackErrorMessage =
        error?.response?.data?.message?.details?.[0]?.message;
      errorMessage =
        typeof errorMessage === "string"
          ? errorMessage
          : typeof fallbackErrorMessage === "string"
          ? fallbackErrorMessage
          : "An error occurred.";
      if (errorMessage) {
        ShowMessage("Error", errorMessage, "error", toast);
      }
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/wocman/profile/add/category", {
        categoryid: newCategory,
      });
      if (data?.status === 200 || 201) {
        ShowMessage("Success", "Category added successfully", "success", toast);
      }
      setIsLoading(false);
      setTimeout(handleSubmitSkill(), 5000);
      nextStep();
    } catch (error) {
      setIsLoading(false);
      let errorMessage = error?.response?.data?.message;
      let fallbackErrorMessage =
        error?.response?.data?.message?.details?.[0]?.message;
      errorMessage =
        typeof errorMessage === "string"
          ? errorMessage
          : typeof fallbackErrorMessage === "string"
          ? fallbackErrorMessage
          : "An error occurred.";
      if (errorMessage) {
        ShowMessage("Error", errorMessage, "error", toast);
      }
    }
  };

  const categories = [
    {
      title: "Technicians",
      img: technicians,
      content: [
        "Mason",
        "Carpenter",
        "Ironbender",
        "Painter & Screeders",
        "Aluminum Fabricators",
        "Steel Fabricators",
        "Solar Installers",
        "Electricians",
        "Plumbers",
        "Polystyrene Technicians",
        "A/C Technician",
        "Tilers",
        "Generator Mechanics",
      ],
    },
    {
      title: "Tradesmen",
      img: tradesmen,
      content: [
        "Barber",
        "Gardener",
        "Makeup Artist",
        "Pedicurist",
        "Cleaners",
        "Hair Stylist",
      ],
    },
    {
      title: "Professionals",
      img: professionals,
      content: ["Engineers", "Geologist", "Architects", "Surveyors"],
    },
  ];

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
      <Flex w="85%" h="100%" flex="1" direction="column">
        <Stack
          w="100%"
          fontSize="20px"
          cursor="pointer"
          d={{ base: "none", md: "flex" }}
        >
          <Flex
            justify="space-between"
            h="10vh"
            overflow="auto"
            whiteSpace="nowrap"
            className="no-scrollbar"
            flexWrap="nowrap"
          >
            <Box
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${step === 0 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
              onClick={() => setStep(0)}
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
            </Box>
            <Box
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${step === 1 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
              onClick={() => setStep(1)}
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
            </Box>
            <Box
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${step === 2 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
              onClick={() => setStep(2)}
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
            </Box>
            <Box
              d="flex"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
              className={`account-tab ${step === 3 ? "active" : ""}`}
              _focus={{
                outline: "none",
              }}
              onClick={() => setStep(3)}
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
            </Box>
          </Flex>
        </Stack>

        <Flex
          flexDirection="column"
          alignSelf="stretch"
          py={{ base: 4, md: 6 }}
        >
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            color="white"
            w={{ base: "100%", md: "50%", xl: "40%" }}
            fontSize={{ base: "1.2rem", xl: "2.5rem" }}
            textAlign={{ base: "center", md: "start" }}
          >
            Welcome {firstname ? firstname : ""}, Select a Category
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
          </Flex>
          <Flex
            py={{ base: 4, md: 8 }}
            flexWrap="wrap"
            justify={{ base: "center", md: "space-between" }}
          >
            {categories.map((category, index) => (
              <Category
                key={index}
                image={category.img}
                index={index}
                heading={category.title}
                content={category.content}
                category={newCategory}
                onClick={() => setNewCategory(index + 1)}
                setSkill={setSkill}
                skill={skill}
              />
            ))}
          </Flex>
          <Flex
            mt={4}
            w="100%"
            d={{ base: "flex", md: "" }}
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row-reverse" }}
          >
            <CustomButton
              mt={{ base: 8, md: 0 }}
              mb={{ base: 4, md: 0 }}
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={newCategory === 0 || skill === 0}
            >
              Proceed
            </CustomButton>
            <Button
              h="70px"
              w={{ base: "90%", md: "45%", xl: "25%" }}
              borderRadius="10px"
              onClick={() => prevStep()}
              bg="wocman.contact"
              color="white"
              _focus={{ outline: "none" }}
              _hover={{
                outline: "none",
                bg: "wocman.contact",
                border: "1px",
              }}
            >
              Back
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Category = (props) => {
  return (
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
      onClick={props.onClick}
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
          justify="space-between"
        >
          <Text
            fontSize="1.2rem"
            fontFamily="Poppins"
            fontWeight="600"
            py={2}
            color={`${
              props.index + 1 === props.category
                ? "white"
                : "wocman.heading_text"
            }`}
          >
            {props.heading}
          </Text>
          <Image
            src={checkmark}
            alt="check mark"
            mr={{ base: 2, md: 4 }}
            d={`${props.index + 1 === props.category ? "flex" : "none"}`}
          />
        </Flex>
        <Flex
          flexDir="column"
          px={{ base: 4, md: 8 }}
          pb={{ base: 4, md: 8 }}
          pt={{ base: 2, md: 4 }}
          backgroundColor="wocman.category"
          h="20rem"
          overflowY="scroll"
        >
          {props.content.map((item, index) => (
            <div key={index}>
              <Divider borderColor="wocman.contact" />
              <Flex
                justify="space-between"
                py={2}
                cursor="pointer"
                onClick={() => props.setSkill(index + 1)}
              >
                <Text
                  fontFamily="Poppins"
                  lineHeight="138.6%"
                  color={`${
                    props.index + 1 === props.category &&
                    index + 1 === props.skill
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
                  d={`${
                    props.index + 1 === props.category &&
                    index + 1 === props.skill
                      ? "flex"
                      : "none"
                  }`}
                />
              </Flex>
            </div>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default WorkCategory;
