import {
  Box,
  Flex,
  PseudoBox,
  Input,
  Text,
  Image,
  useToast,
} from "@chakra-ui/core";
import React, { useState, useEffect } from "react";

import { BaseDropdown, BaseInput, RightModal } from "../../../components";
import addWhite from "../../../assets/icons/plus-square-white.svg";
import { axios } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";

const JobModal = ({ isOpen, setIsOpen }) => {
  const initialState = {
    topic: "",
    description: "",
    address: "",
    city: "",
    category: "",
  };
  const [avatars, setAvatars] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [state, setState] = useState(initialState);
  const [receiversOptions, setReceiversOptions] = useState();
  const [jobCategory, setJobCategory] = useState([]);

  const toast = useToast();

  useEffect(() => {
    if (avatars.length < 1) return;
    const newImageUrls = [];
    avatars.forEach((avatar) => newImageUrls.push(URL.createObjectURL(avatar)));
    setImageUrls(newImageUrls);
  }, [avatars]);

  React.useEffect(() => {
    let isMounted = true;
    const getUserProfile = async () => {
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
    getUserProfile();
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

  const technicians = [
    { label: "Mason", value: "mason" },
    { label: "Carpenter", value: "carpenter" },
    { label: "Ironbender", value: "ironbender" },
    { label: "Painter & Screeders", value: "painter & Screeders" },
    { label: "Aluminum Fabricators", value: "aluminum fabricators" },
    { label: "Steel Fabricators", value: "steel fabricators" },
    { label: "Solar Installers", value: "solar installers" },
    { label: "Electricians", value: "electricians" },
    { label: "Plumbers", value: "plumbers" },
    { label: "Polystyrene Technicians", value: "polystyrene technicians" },
    { label: "A/C Technician", value: "A/C Technician" },
    { label: "Tilers", value: "tilers" },
    { label: "Generator Mechanics", value: "generator mechanics" },
  ];

  const tradesmen = [
    { label: "Mason", value: "mason" },
    { label: "Barber", value: "barber" },
    { label: "Gardener", value: "gardener" },
    { label: "Makeup Artist", value: "makeup artist" },
    { label: "Pedicurist", value: "pedicurist" },
    { label: "Cleaners", value: "cleaners" },
    { label: "Hair Stylist", value: "hair stylist" },
  ];

  const professionals = [
    { label: "Mason", value: "mason" },
    { label: "Engineers", value: "engineers" },
    { label: "Geologist", value: "geologist" },
    { label: "Architects", value: "architects" },
    { label: "Surveyors", value: "surveyors" },
  ];

  const allOptions = [
    { label: "Tradesmen", value: "tradesmen", children: tradesmen },
    { label: "Technicians", value: "technicians", children: technicians },
    { label: "Professionals", value: "professionals", children: professionals },
  ];

  const handleSubChange = (e) => {
    const selectedOption = allOptions.find((c) => c.value === e.value);
    setReceiversOptions(selectedOption.children);
    handleChange({ target: { name: "category", value: e.value } });
  };

  return (
    <>
      <RightModal
        title="Create new Job"
        showModal={isOpen}
        setShowModal={setIsOpen}
      >
        <Box w="100%">
          <BaseInput label="Topic" width="100%" />
        </Box>
        <Flex w="100%" justify="space-between">
          <Box w="48%">
            <BaseInput label="Address" width="100%" />
          </Box>
          <Box w="48%">
            <BaseInput label="City" width="100%" />
          </Box>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Box width="48%">
            <BaseDropdown
              options={allOptions}
              onChange={handleSubChange}
              value={state.category}
              label="Category"
              w="100%"
            />
          </Box>
          <Box width="48%">
            {state?.category !== "" && (
              <BaseDropdown
                label="Sub category"
                onChange={(e) =>
                  handleChange({
                    target: { name: "subcategory", value: e.target },
                  })
                }
                options={receiversOptions}
                w="100%"
              />
            )}
          </Box>
        </Flex>
        <Flex w="100%" justify="space-between" mt="2rem">
          <Box w="48%">
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
            <Image w="48%" mb="2rem" h="109px" src={imageSrc} />
          ))}
        </Flex>
      </RightModal>
    </>
  );
};

export default JobModal;
