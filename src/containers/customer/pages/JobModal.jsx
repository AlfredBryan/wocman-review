import {
  Box,
  Flex,
  PseudoBox,
  Input,
  Text,
  Image,
  useToast,
  Textarea,
  Button,
} from "@chakra-ui/core";
import React, { useState, useEffect } from "react";

import { BaseDropdown, BaseInput, RightModal } from "../../../components";
import addWhite from "../../../assets/icons/plus-square-white.svg";
import { axios, setAuthToken } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";

const JobModal = ({ isOpen, setIsOpen, update }) => {
  const initialState = {
    topic: "",
    description: "",
    address: "",
    city: "",
    projecttypeid: "",
    category: "",
  };
  const [avatars, setAvatars] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [state, setState] = useState(initialState);
  const [receiversOptions, setReceiversOptions] = useState();
  const [jobCategory, setJobCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  useEffect(() => {
    if (avatars.length < 1) return;
    const newImageUrls = [];
    avatars.forEach((avatar) => newImageUrls.push(URL.createObjectURL(avatar)));
    setImageUrls(newImageUrls);
  }, [avatars]);

  React.useEffect(() => {
    let isMounted = true;
    const getJobTypes = async () => {
      try {
        const { data } = await axios.get("/customer/job/projects");
        if (data?.status) {
          if (isMounted) setJobCategory(data?.data);
        } else {
          ShowMessage(
            "Error",
            "An error occurred while fetching user",
            "error",
            toast
          );
        }
      } catch (error) {
        const errorMessage = error?.response?.data?.message;
        if (errorMessage) {
          ShowMessage("Error", errorMessage, "error", toast);
        }
      }
    };
    getJobTypes();

    // cleanup hack to avoid React's "Can't perform a React state update on an unmounted component" warning
    return () => {
      isMounted = false;
    };
  }, [toast]);

  const handleAddAvatar = (e) => {
    if (avatars.length < 3) {
      const file = e.target.files[0];
      setAvatars([...avatars, file]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const allCategories = jobCategory?.map((job) =>
    job?.sub_category?.map((category) => category)
  );

  const tradesmen = allCategories[0]?.map((trade) => ({
    label: trade?.name,
    value: trade?.id,
  }));

  const technicians = allCategories[1]?.map((tech) => ({
    label: tech?.name,
    value: tech?.id,
  }));

  const professionals = allCategories[2]?.map((prof) => ({
    label: prof?.name,
    value: prof?.id,
  }));

  const allOptions = [
    { label: "Tradesmen", value: "tradesmen", children: tradesmen },
    { label: "Technicians", value: "technicians", children: technicians },
    {
      label: "Professionals",
      value: "professionals",
      children: professionals,
    },
  ];

  const handleSubChange = (e) => {
    const selectedOption = allOptions.find((c) => c.value === e.value);
    setReceiversOptions(selectedOption.children);
    handleChange({ target: { name: "category", value: e.value } });
  };

  const createJob = async () => {
    setAuthToken(localStorage["wocman_token"]);
    let formData = new FormData();

    formData.append("topic", state.topic);
    formData.append("description", state.description);
    formData.append("address", state.address);
    formData.append("city", state.city);
    formData.append("projecttypeid", state.projecttypeid);
    formData.append("avatar", avatars);

    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "/customer/job/upload-project",
        formData
      );
      if (data?.status) {
        ShowMessage("Success", "Job added successfully", "success", toast);
        setIsOpen(false);
        update();
      } else {
        ShowMessage(
          "Error",
          "An error occurred while fetching settings",
          "error",
          toast
        );
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        ShowMessage("Error", errorMessage, "error", toast);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const disableBtn =
    state.description === "" ||
    state.topic === "" ||
    state.city === "" ||
    state.address === "" ||
    state.projecttypeid === "" ||
    avatars.length < 1;

  return (
    <>
      <RightModal
        title="Create new Job"
        showModal={isOpen}
        setShowModal={setIsOpen}
      >
        <Box w="100%">
          <BaseInput
            name="topic"
            onChange={handleChange}
            value={state.topic}
            label="Topic"
            width="100%"
          />
        </Box>
        <Flex w="100%" justify="space-between">
          <Box w="48%">
            <BaseInput
              name="address"
              value={state.address}
              onChange={handleChange}
              label="Address"
              width="100%"
            />
          </Box>
          <Box w="48%">
            <BaseInput
              name="city"
              value={state.city}
              onChange={handleChange}
              label="City"
              width="100%"
            />
          </Box>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Box width="48%">
            <BaseDropdown
              options={allOptions}
              onChange={handleSubChange}
              label="Category"
              w="100%"
            />
          </Box>
          <Box width="48%">
            {state?.category !== "" && (
              <BaseDropdown
                label="Sub category"
                value={state.projecttypeid}
                onChange={(e) =>
                  handleChange({
                    target: { name: "projecttypeid", value: e.value },
                  })
                }
                options={receiversOptions}
                w="100%"
              />
            )}
          </Box>
        </Flex>
        <Box mt="2rem">
          <Text fontFamily="Gilroy-Bold" fontSize="1.3rem" as="label">
            Description
          </Text>
          <Textarea
            focusBorderColor="#552D1E"
            fontSize="1.3rem"
            mt="1.2rem"
            bg="#E8E2E7"
            border="none"
            borderRadius="3px"
            h="6rem"
            w="100%"
            resize="none"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </Box>
        <Flex w="100%" justify="space-between" mt="2rem">
          <Box w={{ base: "100%", lg: "48%" }}>
            <PseudoBox
              as="label"
              htmlFor="certificate-upload"
              w={{ base: "90%", md: "45%", xl: "40%" }}
            >
              <Flex
                justify="start"
                align="center"
                px={5}
                py={5}
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
                  Upload Images
                </Text>
              </Flex>
            </PseudoBox>
            <Input
              type="file"
              accept=".jpg, .jpeg, .png"
              id="certificate-upload"
              display="none"
              onChange={(e) => handleAddAvatar(e)}
            />
          </Box>
        </Flex>

        <Flex justify="space-between" flexWrap="wrap" w="100%">
          {imageUrls.map((imageSrc) => (
            <Image key={imageSrc} w="48%" mb="2rem" h="109px" src={imageSrc} />
          ))}
        </Flex>
        <Flex w="100%" justify="center" pb={{ base: "3rem", lg: "0rem" }}>
          <Button
            borderColor="#552D1E"
            fontSize="1rem"
            fontStyle="500"
            color="#FFFFFF"
            backgroundColor="#552D1E"
            borderRadius="4px"
            h="5rem"
            w={["15rem"]}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            isDisabled={disableBtn}
            isLoading={isLoading}
            onClick={createJob}
          >
            Save
          </Button>
        </Flex>
      </RightModal>
    </>
  );
};

export default JobModal;
