import * as React from "react";
import {
	Button,
	Flex,
	Image,
	Input,
	Link,
	Text,
	useToast,
} from "@chakra-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Nav } from "../../components/nav/nav";
import "./login.css";
import AuthBgImage from "../../assets/images/auth.jpg";
import google from "../../assets/icons/google.svg";
import { Link as ReactLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearLoginToast, login } from "../../state/actions";
import { ShowMessage } from "../../utils/alert";
import FormError from "../../components/form-error/form-error";
import { clientId } from "../../utils/googleClient";
import { useQuery } from "../../utils/hooks";

const EMAIL = "email";
const PASSWORD = "password";
const Login = () => {
	const dispatch = useDispatch();
	const toast = useToast();
	const history = useHistory();
	const query = useQuery();

	const queryParam = query.get("wocman");

	const { result, error, isLoading, message } = useSelector(
		({ login: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);

	const getBackendGoogleAuthData = (tokenId) => {
		dispatch(login({ tokenId }, true));
	};

	const responseSuccessGoogle = (response) => {
		console.log(response);
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
		if (error) {
			ShowMessage("Error", message, "error", toast);
			dispatch(clearLoginToast());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	useEffect(() => {
		if (result) {
			if (result.isdevice || result.isotp) {
				ShowMessage(
					"Success",
					"Please verify the OTP sent to your email...",
					"success",
					toast,
					5000
				);
				setTimeout(() => history.push(`/verify-otp`), 2000);
				dispatch(clearLoginToast());
			} else {
				ShowMessage(
					"Success",
					"Login successful. Redirecting to dashboard...",
					"success",
					toast,
					5000
				);
				setTimeout(() => history.push(`/wocman`), 2000);
				dispatch(clearLoginToast());
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [result]);

	const formik = useFormik({
		initialValues: {
			[EMAIL]: "",
			[PASSWORD]: "",
		},
		validationSchema: Yup.object({
			[EMAIL]: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			[PASSWORD]: Yup.string().required("Password is required"),
		}),
		onSubmit: (values) => {
			const body = {
				email: values.email,
				password: values.password,
			};
			dispatch(login(body));
		},
	});

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
			<Zoom top duration={1500}>
				<Flex
					flex={1}
					flexDirection={["column", "column", "column", "column", "row"]}
					justify="center"
					align="center"
				>
					<Flex
						justify="center"
						flex={[1, 1, 0.7, 0.8, 1]}
						flexDirection="column"
						px="32"
						display={["none", "none", "none", "none", "flex"]}
					>
						<Fade opposite delay={500} duration={2000}>
							<Text
								as="h5"
								color="white"
								fontSize="3.3rem"
								fontFamily="Gilroy-Bold"
								lineHeight="68px"
								letterSpacing="-1px"
							>
								Sign up on Wocman to get your Works done, and also Earn with us.
							</Text>
						</Fade>
						<Fade opposite delay={500} duration={2000}>
							<Text
								color="white"
								fontFamily="OverPass"
								mt={8}
								lineHeight="31px"
								width="55%"
							>
								Wocman Connects Customers to the nearest Wocman, with zero
								hassle.
							</Text>
						</Fade>
					</Flex>
					<Flex
						flex="1"
						align="center"
						width={["96%", "90%", "90%", "80%", "50%"]}
						justify="center"
					>
						<Flex
							flexDirection="column"
							backgroundColor="white"
							height={["95%", "95%", "95%", "83%", "83%"]}
							width={["100%", "100%", "70%", "80%", "80%"]}
							borderRadius="10px"
							align="center"
							py={12}
						>
							<Fade opposite delay={500} duration={2000}>
								<Text
									fontFamily="OverPass"
									color="wocman.contact"
									mb={6}
									fontSize="2.5rem"
									lineHeight="34px"
									letterSpacing="-0.55px"
								>
									Sign In
								</Text>
							</Fade>
							<Fade opposite delay={500} duration={2000}>
								<Text fontFamily="Gilroy-Medium" fontSize="1rem" mb={6}>
									Kindly sign into your workstation
								</Text>
							</Fade>
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
									isLoading={isLoading}
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
													Sign in via Gmail
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
								<Fade opposite delay={500} duration={2000}>
									<Text
										as="small"
										fontFamily="Gilroy-Medium"
										fontSize="0.9rem"
										lineHeight="28px"
									>
										Email Address
									</Text>
								</Fade>
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
							<Flex textAlign="start" w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
								<Fade opposite delay={500} duration={2000}>
									<Text
										as="small"
										fontFamily="Gilroy-Medium"
										fontSize="0.9rem"
										lineHeight="28px"
									>
										Password
									</Text>
								</Fade>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]}>
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
							<Flex mt={12} w="100%" justify="center" align="center">
								<Button
									backgroundColor="wocman.contact"
									color="white"
									h="50px"
									w={["70%", "65%", "50%", "40%", "40%"]}
									borderRadius="4.56667px"
									_hover={{ opacity: "0.7" }}
									_active={{ transform: "scale(0.98)" }}
									_focus={{ outline: "none" }}
									disabled={isLoading}
									onClick={formik.handleSubmit}
								>
									<Fade opposite delay={500} duration={2000}>
										<Text
											fontFamily="OverPass"
											fontWeight="bold"
											fontSize="0.9rem"
											lineHeight="18px"
											letterSpacing="-0.380556px"
											textAlign="center"
											margin="0 auto"
										>
											{isLoading ? "Signing in..." : "Sign in"}
										</Text>
									</Fade>
								</Button>
							</Flex>
							<Flex mt={8} mb={0} justify="center" align="center">
								<Fade opposite delay={500} duration={2000}>
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
										Don't have an account ?
									</Text>
								</Fade>
								<Fade opposite delay={500} duration={2000}>
									<Link
										as={ReactLink}
										textTransform="uppercase"
										fontFamily="OverPass"
										to={`/register?wocman=${queryParam}`}
										fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem", "1rem"]}
										color="wocman.typography4"
										lineHeight="20px"
										letterSpacing="1.08333px"
										fontWeight="bold"
										_hover={{ opacity: "0.7" }}
										_focus={{ outline: "none" }}
										cursor="pointer"
									>
										Sign up
									</Link>
								</Fade>
							</Flex>
							<Flex my={4} justify="center" align="center">
								<Fade opposite delay={500} duration={2000}>
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
										Forgot your password?
									</Text>
								</Fade>
								<Fade opposite delay={500} duration={2000}>
									<Link
										as={ReactLink}
										textTransform="uppercase"
										fontFamily="OverPass"
										to="/forgot-password"
										fontSize={["0.8rem", "0.8rem", "0.9rem", "1rem", "1rem"]}
										color="wocman.typography4"
										lineHeight="20px"
										letterSpacing="1.08333px"
										fontWeight="bold"
										_hover={{ opacity: "0.7" }}
										_focus={{ outline: "none" }}
										cursor="pointer"
									>
										Reset here
									</Link>
								</Fade>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Zoom>
		</Flex>
	);
};

export default Login;
