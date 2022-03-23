import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  PseudoBox,
  Text,
  useToast,
} from "@chakra-ui/core";
import { axios, setAuthToken } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";
import { ProfileContext } from "../index";

const Profile = () => {
  const { profile, setProfile } = React.useContext(ProfileContext);

  return (
    <Flex
      justify={{ base: "center", lg: "flex-start" }}
      align="center"
      w="100%"
      h="fit-content"
      flex={1}
      pl={{ base: 0, md: 8 }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        w="100%"
        justify="space-between"
      >
        <Box
          w={{ base: "100%", lg: "35%" }}
          mr={{ base: 0, lg: 8 }}
          py={{ base: 8, lg: 0 }}
        >
          <MiniProfile profile={profile} setProfile={setProfile} />
          {/* <UploadCertificate rate={profile?.rate ?? 5} /> */}
        </Box>
        <Box
          h={{ base: "auto", lg: "100%" }}
          background="#F9F9F9"
          w={{ base: "100%", lg: "60%" }}
        >
          <ProfileForm profile={profile} />
        </Box>
      </Flex>
    </Flex>
  );
};

const MiniProfile = (props) => {
  const { profile } = props;
  const profilePicture = profile?.image;

  const toast = useToast();
  const dummyPic =
    "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1439.1439a/s150x150/116583025_659529457982256_6712328410517649834_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_-0yCFguyhwAX-59hkb&tp=1&oh=648e6d321031117ac7c492410ee56fbb&oe=602BE246";

  let fileTypes = ["image/jpeg", "image/jpg", "image/png"];

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (fileTypes.includes(file?.type)) {
      var form = new FormData();
      form.append("avatar", file, file.name);
      try {
        const { data } = await axios.post("/customer/profile/picture", form);
        if (data.status) {
          ShowMessage(
            "Success",
            "Profile picture changed successfully",
            "success",
            toast
          );
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <Box
      backgroundColor="white"
      textAlign="center"
      borderRadius="10px"
      py="5rem"
      px={{ base: 2, md: 4 }}
      w="100%"
      mb={{ base: 4, md: 8 }}
    >
      <Box
        bgImage={`url(${profilePicture ? profilePicture : dummyPic})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        bgSize="cover"
        border="1.43126px solid #552D1E"
        h="70px"
        width="70px"
        borderRadius="50%"
        margin="0 auto"
      ></Box>
      <Text
        fontFamily="Poppins"
        fontWeight="bold"
        mt={4}
        fontSize={{ base: "1.1rem", md: "1.5rem" }}
      >
        {profile?.isProfileUpdated === false ? (
          <Button
            leftIcon="warning-2"
            mb={0}
            fontSize="0.7rem"
            backgroundColor="#552D1E"
            color="white"
            borderRadius="4px"
            h={12}
            flex={3}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
          >
            Complete your profile
          </Button>
        ) : (
          `${profile?.firstname ?? "Tayo Olajide"} ${profile?.lastname ?? ""}`
        )}
      </Text>
      <Text as="small" fontFamily="Poppins" my={2}>
        Client
      </Text>

      <Button
        backgroundColor="#E8E2E7"
        d="block"
        w="50%"
        borderRadius="10px"
        h="auto"
        mx="auto"
        mt={4}
        py={4}
        _hover={{ opacity: "0.7" }}
        _active={{ transform: "scale(0.98)" }}
        _focus={{ outline: "none" }}
      >
        <Text
          as="label"
          htmlFor="pic-upload"
          fontFamily="Poppins"
          color=" #552D1E"
          cursor="pointer"
        >
          Change photo
        </Text>
        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          id="pic-upload"
          display="none"
          onChange={(e) => handleImageChange(e)}
        />
      </Button>
    </Box>
  );
};

const ProfileForm = (props) => {
  const { profile, setProfile } = props;

  const toast = useToast();

  const [values, setValues] = React.useState({
    firstname: profile?.firstname || "",
    lastname: profile?.lastname || "",
    username: profile?.username || "",
    email: profile?.email,
    phone: profile?.phone || "",
    address: profile?.address || "",
    country: profile?.country || "",
    state: profile?.state || "",
  });
  const [submitLoading, setSubmitLoading] = React.useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setAuthToken(localStorage["wocman_token"]);
    setSubmitLoading(true);
    try {
      const { data } = await axios.put("/customer/profile/update", {
        ...values,
      });
      if (data?.status) {
        ShowMessage(
          "Success",
          "Profile updated successfully",
          "success",
          toast
        );
        setProfile({
          ...profile,
          ...values,
        });
      }
    } catch (error) {
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
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Box
      px={{ base: 4, md: 12 }}
      py={{ base: 4, md: 8 }}
      mt={{ base: 8, lg: 0 }}
    >
      <Text
        fontWeight="bold"
        fontSize={{ base: "1.2rem", md: "1.8rem" }}
        fontFamily="Poppins"
        letterSpacing="0.367978px"
        lineHeight="15px"
        mb={{ base: 4, md: 8 }}
      >
        Personal Information
      </Text>
      <Text
        as="small"
        fontFamily="Poppins"
        my={{ base: 4, md: 8 }}
        d="block"
        letterSpacing="0.367978px"
        lineHeight="15px"
      >
        This information will appear on your profile.
      </Text>
      <CustomInput
        label="First Name"
        name="firstname"
        type="text"
        value={values?.firstname}
        onChange={onChange}
      />
      <CustomInput
        label="Last Name"
        name="lastname"
        type="text"
        value={values?.lastname}
        onChange={onChange}
      />
      <CustomInput
        label="Username"
        name="username"
        type="text"
        value={values?.username}
        onChange={onChange}
      />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        mb={{ base: 4, md: 8 }}
      >
        <CustomInput
          name="email"
          label="Email"
          value={values?.email}
          disabled={true}
          type="email"
          flex="1.8"
          mr={{ base: 0, lg: 8 }}
        />
        <CustomInput
          name="phone"
          type="number"
          label="Phone Number"
          value={values?.phone}
          onChange={onChange}
          flex="1.2"
        />
      </Flex>
      <Text
        fontWeight="bold"
        fontSize={{ base: "1.2rem", md: "1.8rem" }}
        fontFamily="Poppins"
        letterSpacing="0.367978px"
        lineHeight="15px"
        my={{ base: 4, md: 8 }}
      >
        Postal Address
      </Text>
      <CustomInput
        name="address"
        type="text"
        label="Address"
        value={values?.address}
        onChange={onChange}
      />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        mb={{ base: 4, md: 8 }}
      >
        <CustomInput
          name="country"
          label="Country"
          value={values?.country}
          onChange={onChange}
          type="text"
          flex="1.8"
          mr={{ base: 0, lg: 8 }}
        />
        <CustomInput
          name="state"
          label="State"
          value={values?.state}
          onChange={onChange}
          type="text"
          flex="1.2"
        />
      </Flex>
      <Flex justify={{ base: "center", md: "flex-end" }} w="100%">
        <Button
          _focus={{ outline: "none" }}
          _hover={{ opacity: "0.8" }}
          h="70px"
          w={{ base: "90%", md: "45%", xl: "25%" }}
          borderRadius="10px"
          backgroundColor="wocman.typography1"
          color="white"
          onClick={handleSubmit}
          isLoading={submitLoading}
        >
          <Text
            fontFamily="Poppins"
            textTransform="capitalize"
            lineHeight="138.6%"
          >
            Save
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

const CustomInput = (props) => {
  const {
    mr,
    flex,
    label,
    value,
    placeholder,
    disabled,
    onChange,
    name,
    type,
  } = props;
  return (
    <PseudoBox
      _focus={{ bg: "blue", border: "none" }}
      px={8}
      py={2}
      mb={{ base: 4, md: 8 }}
      mr={mr}
      w="100%"
      flex={flex}
      borderRadius="5px"
      border="0.789223px solid #000000"
    >
      <Text as="small" fontFamily="Poppins" color="#778899">
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        bg="transparent"
        fontFamily="Poppins"
        fontSize="0.8rem"
        fontWeight="bold"
        px={0}
        color="#778899"
        _focus={{ bg: "transparent" }}
        _placeholder={{
          fontWeight: "bold",
        }}
        border="none"
        value={value}
        disabled={!!disabled}
        name={name}
        onChange={onChange}
        type={type}
      />
    </PseudoBox>
  );
};

export default Profile;
