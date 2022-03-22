import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Flex,
  Image,
  Input,
  Link,
  Text,
  useToast,
  Select,
} from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import { Nav } from "../../components/nav/nav";
import Fade from "react-reveal/Fade";
import "./register.css";
import AuthBgImage from "../../assets/images/auth.jpg";
import { GoogleLogin } from "react-google-login";
import google from "../../assets/icons/google.svg";
import { Link as ReactLink, useHistory } from "react-router-dom";
import FormError from "../../components/form-error/form-error";
import { useDispatch, useSelector } from "react-redux";
import {
  clearRegisterToast,
  register,
} from "../../state/actions/registerAction";
import { clearLoginToast, login } from "../../state/actions";
import { useEffect } from "react";
import { ShowMessage } from "../../utils/alert";
import { useQuery } from "../../utils/hooks";
import { clientId } from "../../utils/googleClient";

const EMAIL = "email";
const ROLE = "role";
const PASSWORD = "password";
const CONFIRM_PASSWORD = "confirmPassword";

const Register = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();
  const query = useQuery();

  const queryParam = query.get("wocman");

  const { result, error, isLoading, message } = useSelector(
    ({ register: { result, error, isLoading, message } = {} }) => ({
      result,
      error,
      isLoading,
      message,
    })
  );

  const {
    result: loginResult,
    error: loginError,
    isLoading: loginIsLoading,
    message: loginMessage,
  } = useSelector(({ login: { result, error, isLoading, message } = {} }) => ({
    result,
    error,
    isLoading,
    message,
  }));

  const getBackendGoogleAuthData = (tokenId) => {
    dispatch(login({ tokenId }, true));
  };

  const responseSuccessGoogle = (response) => {
    getBackendGoogleAuthData(response?.tokenId);
  };

  const responseErrorGoogle = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (!queryParam) {
      history.push(history?.location?.pathname + "?wocman=1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error || loginError) {
      ShowMessage("Error", error ? message : loginMessage, "error", toast);
      dispatch(clearRegisterToast());
      dispatch(clearLoginToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loginError]);

  useEffect(() => {
    if (result || loginResult) {
      ShowMessage(
        "Success",
        `Registration successful. Redirecting to ${
          loginResult ? "dashboard" : "email verification page"
        }...`,
        "success",
        toast,
        5000
      );
      setTimeout(
        () =>
          history.push(
            loginResult ? `/wocman` : `/enter-otp?email=${formik.values[EMAIL]}`
          ),
        3000
      );
      dispatch(clearRegisterToast());
      dispatch(clearLoginToast());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, loginResult]);

  const formik = useFormik({
    initialValues: {
      [EMAIL]: "",
      [ROLE]: "",
      [PASSWORD]: "",
      [CONFIRM_PASSWORD]: "",
    },
    validationSchema: Yup.object({
      [EMAIL]: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      [ROLE]: Yup.string().required("Role is required"),
      [PASSWORD]: Yup.string().required("Password is required"),
      [CONFIRM_PASSWORD]: Yup.string()
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        })
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
        const body = {
          email: values.email,
          role: values.role,
          password: values.password,
          repeat_password: values.confirmPassword,
          verifylink: "http://wocman-site.herokuapp.com/enter-otp",
        };
        dispatch(register(body, !!queryParam));
    },
  });

  const roleOptions = [
    { label: "Wocman", value: "wocman" },
    { label: "Customer", value: "customer" },
  ];

  return (
    <Flex
      minH={"100vh"}
      bgImage={`url(${AuthBgImage})`}
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
      py={4}
      flexDirection="column"
      backgroundColor="rgba(0, 0, 0, 0.05)"
    >
      <Nav isAuth />
      <Zoom top duration={1000}>
        <Flex flex={1} justify="center" align="center">
          <Flex
            align="center"
            width={["96%", "90%", "90%", "80%", "50%"]}
            justify="center"
            h="auto"
          >
            <Flex
              flexDirection="column"
              backgroundColor="white"
              height={["95%", "95%", "95%", "83%", "83%"]}
              width={["100%", "100%", "70%", "80%", "80%"]}
              borderRadius="10px"
              align="center"
              py={8}
            >
              <Text
                fontFamily="OverPass"
                color="wocman.contact"
                mb={6}
                fontSize="2.5rem"
                lineHeight="34px"
                letterSpacing="-0.55px"
              >
                Sign Up
              </Text>
              <Text fontFamily="Gilroy-Medium" fontSize="1rem" mb={6}>
                Kindly sign into your workstation
              </Text>
              <Flex
                mb={6}
                overflow="hidden"
                borderRadius="4.56667px"
                w="100%"
                justify="center"
              >
                <Button
                  backgroundColor="wocman.contact"
                  color="white"
                  h="50px"
                  w={["80%", "80%", "75%", "60%", "60%"]}
                  borderRadius="4.56667px"
                  _hover={{ opacity: "0.7" }}
                  _active={{ transform: "scale(0.98)" }}
                  _focus={{ outline: "none" }}
                  isLoading={loginIsLoading || isLoading}
                >
                  <Flex
                    borderRightStyle="solid"
                    borderRightWidth="0.1px"
                    borderRightColor="#D8E3FE"
                    height="100%"
                    align="center"
                    justify="center"
                    pr={2}
                    flex="0.5"
                  >
                    <Fade opposite delay={500} duration={2000}>
                      <Image src={google} alt="google" />
                    </Fade>
                  </Flex>
                  <Flex flex="5" px="8" textAlign="center">
                    <GoogleLogin
                      clientId={clientId}
                      render={(renderProps) => (
                        <Text
                          fontFamily="OverPass"
                          fontWeight="bold"
                          fontSize="0.9rem"
                          lineHeight="18px"
                          letterSpacing="-0.380556px"
                          textAlign="center"
                          margin="0 auto"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          Sign up via Gmail
                        </Text>
                      )}
                      buttonText="Login"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseErrorGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </Flex>
                </Button>
              </Flex>
              <Flex w="100%" mb={6}>
                <div className="divider">
                  <Text
                    as="span"
                    fontFamily="OverPass"
                    fontWeight="bold"
                    lineHeight="24px"
                  >
                    or
                  </Text>
                </div>
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text
                  as="small"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.9rem"
                  lineHeight="28px"
                >
                  Email Address
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Input
                  placeholder="Email"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  px={6}
                  width="100%"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                  id={EMAIL}
                  name={EMAIL}
                  type={EMAIL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[EMAIL]}
                />
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <FormError formik={formik} inputName={EMAIL} />
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Select
                  placeholder="Please select a role"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[ROLE]}
                  id={ROLE}
                  name={ROLE}
                  type={ROLE}
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  px={6}
                >
                  {roleOptions?.map((role) => (
                    <option key={role?.label} value={role?.value}>
                      {role?.label}
                    </option>
                  ))}
                </Select>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <FormError formik={formik} inputName={ROLE} />
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text
                  as="small"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.9rem"
                  lineHeight="28px"
                >
                  Password
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Input
                  placeholder="Password"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  px={6}
                  width="100%"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                  id={PASSWORD}
                  name={PASSWORD}
                  type={PASSWORD}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[PASSWORD]}
                />
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <FormError formik={formik} inputName={PASSWORD} />
              </Flex>
              <Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
                <Text
                  as="small"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.9rem"
                  lineHeight="28px"
                >
                  Confirm Password
                </Text>
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <Input
                  placeholder="Password"
                  minHeight={["1.5rem", "1.5rem", "1.5rem", "2.5rem", "3rem"]}
                  px={6}
                  width="100%"
                  fontFamily="Gilroy-Medium"
                  fontSize="0.8rem"
                  _focus={{ bg: "white" }}
                  borderRadius="6px"
                  opacity="0.5"
                  borderColor="#1C1C1C"
                  borderStyle="solid"
                  id={CONFIRM_PASSWORD}
                  name={CONFIRM_PASSWORD}
                  type={PASSWORD}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[CONFIRM_PASSWORD]}
                />
              </Flex>
              <Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
                <FormError formik={formik} inputName={CONFIRM_PASSWORD} />
              </Flex>
              <Flex mt={6} w="100%" justify="center" align="center">
                <Button
                  backgroundColor="wocman.contact"
                  color="white"
                  disabled={isLoading || loginIsLoading}
                  h="50px"
                  w={["70%", "65%", "50%", "40%", "40%"]}
                  borderRadius="4.56667px"
                  _hover={{ opacity: "0.7" }}
                  _active={{ transform: "scale(0.98)" }}
                  _focus={{ outline: "none" }}
                  onClick={formik.handleSubmit}
                >
                  <Text
                    fontFamily="OverPass"
                    fontWeight="bold"
                    fontSize="0.9rem"
                    lineHeight="18px"
                    letterSpacing="-0.380556px"
                    textAlign="center"
                    margin="0 auto"
                  >
                    {isLoading ? "Signing up..." : "Sign Up"}
                  </Text>
                </Button>
              </Flex>
              <Flex mt={8} justify="center" align="center">
                <Text
                  textTransform="uppercase"
                  as="span"
                  display="inline-block"
                  mr={4}
                  fontFamily="OverPass"
                  fontWeight="bold"
                  fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem", "1rem"]}
                  lineHeight="20px"
                  letterSpacing="1.08333px"
                >
                  Already have an account ?
                </Text>
                <Link
                  as={ReactLink}
                  textTransform="uppercase"
                  fontFamily="OverPass"
                  to={`/login?wocman=${queryParam}`}
                  fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem", "1rem"]}
                  color="wocman.typography4"
                  lineHeight="20px"
                  letterSpacing="1.08333px"
                  fontWeight="bold"
                  _hover={{ opacity: "0.7" }}
                  _focus={{ outline: "none" }}
                  cursor="pointer"
                >
                  Sign in
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Zoom>
    </Flex>
  );
};

export default Register;
