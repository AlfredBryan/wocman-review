import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  PseudoBox,
  Text,
} from "@chakra-ui/core";

const Profile = () => {
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
      <Box flex="1" mr={{ base: 0, lg: 8 }} h="100%" py={{ base: 8, lg: 0 }}>
        <MiniProfile />
        <UploadCertificate />
      </Box>
      <Box
        flex="2"
        h={{ base: "auto", lg: "100%" }}
        background="#F9F9F9"
        w="100%"
      >
        <ProfileForm />
      </Box>
    </Flex>
  );
};

const MiniProfile = () => {
  return (
    <Box
      backgroundColor="white"
      textAlign="center"
      borderRadius="10px"
      py={{ base: 4, md: 8 }}
      px={{ base: 2, md: 4 }}
      w="100%"
      mb={{ base: 4, md: 8 }}
    >
      <Box
        bgImage={`url(${"https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/c0.0.1439.1439a/s150x150/116583025_659529457982256_6712328410517649834_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=_-0yCFguyhwAX-59hkb&tp=1&oh=648e6d321031117ac7c492410ee56fbb&oe=602BE246"})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bg="transparent"
        bgSize="cover"
        border="1.43126px solid #552D1E"
        //   mr={8}
        //   ml={8}
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
        Kazeem Esu
      </Text>
      <Text as="small" fontFamily="Poppins" my={2}>
        Plumber
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
        <Text as="small" fontFamily="Poppins" color=" #552D1E">
          Edit Profile
        </Text>
      </Button>
    </Box>
  );
};

const UploadCertificate = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="10px"
      py={{ base: 4, md: 8 }}
      px={{ base: 4, md: 8 }}
      w="100%"
    >
      <Text fontFamily="Poppins" fontWeight="bold">
        Certificate of experience
      </Text>
      <Text fontFamily="Poppins" as="small" color="#778899">
        Certificates make it easy to attract more clients
      </Text>
      <Flex
        w="100%"
        h="150px"
        flex={1}
        my={{ base: 2, md: 4 }}
        backgroundColor="white"
        justify="center"
        align="center"
        flexDir="column"
      >
        <PseudoBox as="label" htmlFor="file-upload" w="100%" h="100%">
          <Flex
            justify="center"
            align="center"
            h="100%"
            px={{ base: 4, md: 8 }}
            py={{ base: 4, md: 8 }}
            backgroundColor="rgba(85, 45, 30, 0.1)"
            border="1.31304px dotted #552D1E"
            // mb={{ base: 8, md: 16 }}
            cursor="pointer"
          >
            <Text
              fontFamily="Poppins"
              color="wocman.contact"
              lineHeight="20px"
              as="small"
            >
              Upload Certificate
            </Text>
          </Flex>
        </PseudoBox>
        <Input type="file" id="file-upload" display="none" />
      </Flex>
      <Text as="small" fontFamily="Poppins" color="#778899">
        KazeemEsu Certifcate.pdf
      </Text>
      <Divider my={[2, 4]} borderColor="#778899" />
      <Text fontFamily="Poppins" w="80%">
        Your rating based on customer satisfaction.
      </Text>
      <Text
        fontFamily="Poppins"
        w="80%"
        mt={{ base: 2, md: 4 }}
        fontWeight="bold"
        fontSize={{ base: "1.4rem", md: "2rem" }}
        color="wocman.typography1"
      >
        5 stars
      </Text>
    </Box>
  );
};

const ProfileForm = (props) => {
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
      <CustomInput label="First Name" value="Kazeem" />
      <CustomInput label="Last Name" value="Esu" />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        mb={{ base: 4, md: 8 }}
      >
        <CustomInput
          label="Email"
          value="kazeemesu@gmail.com"
          flex="1.8"
          mr={{ base: 0, lg: 8 }}
        />
        <CustomInput label="Phone Number" value="0907867898778" flex="1.2" />
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
      <CustomInput label="Address" value="Army Barracks, Oshodi" />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        mb={{ base: 4, md: 8 }}
      >
        <CustomInput
          label="Country"
          value="Nigeria"
          flex="1.8"
          mr={{ base: 0, lg: 8 }}
        />
        <CustomInput label="City" value="Lagos" flex="1.2" />
      </Flex>
      <Flex justify={{ base: "center", md: "flex-end" }} w="100%">
        <Button
          _focus={{ outline: "none" }}
          h="70px"
          w={{ base: "90%", md: "45%", xl: "25%" }}
          borderRadius="10px"
          backgroundColor="wocman.typography1"
          color="white"
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
  return (
    <PseudoBox
      _focus={{ bg: "blue", border: "none" }}
      //   _hover={{ bg: "blue", border: "none" }}
      px={8}
      py={2}
      mb={{ base: 4, md: 8 }}
      mr={props.mr}
      w="100%"
      flex={props.flex}
      borderRadius="5px"
      border="0.789223px solid #000000"
    >
      <Text as="small" fontFamily="Poppins" color="#778899">
        {props.label}
      </Text>
      <Input
        placeholder="Name*"
        name="name"
        bg="transparent"
        value={props.value}
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
      />
    </PseudoBox>
  );
};

export default Profile;