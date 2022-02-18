import {
  Button,
  Flex,
  Image,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import logo from "../../assets/icons/logo-colored.svg";
import verifyotp from "../../assets/images/verify-email.svg";
import { useQuery } from "../../utils/hooks";
import { axios } from "../../utils/axios";
import { ShowMessage } from "../../utils/alert";

const Otp = (props) => {
  const toast = useToast();
  const history = useHistory();
  const query = useQuery();

  const queryParam = query.get("email");

  useEffect(() => {
    if (!queryParam) {
      history.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = async () => {
    if (!otp) return;
    try {
      const res = await axios.post("/wocman-signup-verification", {
        email: queryParam,
        otpToken: otp,
      });
      setLoading(true);
      if (res?.data.data) {
        localStorage.setItem("wocman_token", res?.data?.data?.accessToken);
        ShowMessage("Success", "Registration completed", "success", toast);
        setLoading(false);
        setTimeout(() => history.push(`/login`), 2000);
        // /account-setup?user=${queryParam}
      }
    } catch (err) {
      console.error(err.response?.data);
    }
  };
  return (
    <Flex flexDir="column" align="center" h="100vh">
      <Flex
        h="10vh"
        w="100%"
        bg="transparent"
        justify="flex-start"
        align="center"
        cursor="pointer"
        d="flex"
        py={{ base: 2, md: 4 }}
        pl={["1.5rem", "1.5rem", "2rem", "3rem", "3rem"]}
        boxShadow="0px 10px 40px rgba(89, 120, 150, 0.06)"
      >
        <Image
          objectFit="cover"
          alt="wocman logo"
          src={logo}
          onClick={() => props.history.push("/")}
          h="50px"
          w="50px"
          transform="scale(3.8)"
        />
      </Flex>
      <Flex
        flex={1}
        align="center"
        justify="center"
        w="100%"
        backgroundColor="rgba(0, 0, 0, 0.02)"
        h="100%"
      >
        <Flex
          align="center"
          width={["90%", "90%", "70%", "50%", "50%"]}
          justify="center"
          h="auto"
          flexDir="column"
          py={12}
          px={12}
          border="0.1px solid rgba(0, 0, 0, 0.3)"
          backgroundColor="#FFF"
          textAlign="center"
          //   transform="translateY(-10%)"
          //   mt={{ base: 4, md: 8, xl: 16 }}
        >
          <Image
            objectFit="cover"
            alt="wocman logo"
            src={verifyotp}
            // fallbackSrc="https://via.placeholder.com/150"
            // size="12rem"
            h="40%"
            w="40%"
          />
          <Text
            textTransform="uppercase"
            mt={8}
            fontFamily="Gilroy-SemiBold"
            fontSize={{ base: "1rem", md: "1.4rem", xl: "1.6rem" }}
          >
            Enter your otp to proceed
          </Text>
          <Text
            mt={8}
            w={{ base: "100%", md: "70%" }}
            fontSize={{ base: "0.8rem", md: "1rem" }}
            fontFamily="Gilroy-Medium"
          >
            We just sent an email containing your otp to the address:{" "}
            <Text
              as="span"
              fontWeight="bold"
              fontFamily="Gilroy-Medium"
              fontSize={{ base: "0.8rem", md: "1rem" }}
            >
              {queryParam}
            </Text>
          </Text>

          <Flex
            flexDir="column"
            mt={12}
            w="100%"
            justify="center"
            align="center"
          >
            <Input
              type="number"
              value={otp}
              onChange={(e) => handleChange(e)}
              name="otp"
              placeholder="Enter your otp"
              borderColor="wocman.contact"
              h="80px"
              w={["95%", "90%", "75%", "60%", "55%"]}
              mb={5}
              textAlign="center"
              _focus={{ borderWidth: "2px" }}
              _active={{ borderColor: "wocman.contact" }}
              _hover={{ borderColor: "wocman.contact" }}
              fontSize="24px"
              fontWeight="700"
            />
            <Button
              backgroundColor="wocman.contact"
              color="white"
              h="50px"
              w={["90%", "85%", "60%", "50%", "50%"]}
              borderRadius="4.56667px"
              _hover={{ opacity: "0.7" }}
              _active={{ transform: "scale(0.98)" }}
              _focus={{ outline: "none" }}
              onClick={handleSubmit}
              aria-busy="true"
            >
              <Text
                fontFamily="Gilroy-SemiBold"
                fontWeight="bold"
                fontSize={{ base: "0.8rem", md: "1rem" }}
                lineHeight="18px"
                letterSpacing="-0.380556px"
                textAlign="center"
                margin="0 auto"
              >
                {loading ? <Spinner /> : "Continue"}
              </Text>
            </Button>
          </Flex>
          <Flex mt={12} w="100%" justify="center" align="center">
            <Button
              backgroundColor="white"
              color="wocman.contact"
              h="50px"
              w={["90%", "85%", "60%", "50%", "50%"]}
              borderRadius="4.56667px"
              _hover={{ opacity: "0.7" }}
              _active={{ transform: "scale(0.98)" }}
              _focus={{ outline: "none" }}
            >
              <Text
                fontFamily="Gilroy-SemiBold"
                fontWeight="bold"
                fontSize={{ base: "0.8rem", md: "1rem" }}
                lineHeight="18px"
                letterSpacing="-0.380556px"
                textAlign="center"
                margin="0 auto"
              >
                Resend OTP
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Otp;
