import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Flex, Input, Text, useToast } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import { Nav } from "../../components/nav/nav";
import "./verify-otp.css";
import AuthBgImage from "../../assets/images/auth.jpg";
import { useHistory, useLocation } from "react-router-dom";
import FormError from "../../components/form-error/form-error";
import { axios } from "../../utils/axios";
import { ShowMessage } from "../../utils/alert";
import { BASE_URL } from "../../utils/constants";

const EMAIL = "email";
const PASSWORD = "password";
const OTP = "otpToken";

const VerifyOTP = () => {
	const toast = useToast();
	const history = useHistory();
	const location = useLocation();

	const [isLoading, setIsLoading] = React.useState(false);
	const [isOtp, setIsOtp] = React.useState(false);
	const [isDevice, setIsDevice] = React.useState(false);

	const confirmOtp = async (body, resetForm) => {
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				`${BASE_URL}${
					isOtp
						? "/auth/wocman-signin-activate-otp"
						: "/wocman-device-ip-confirm"
				}`,
				body
			);
			if (!data?.data?.accessToken) {
				ShowMessage(
					"Success",
					"Device confirmed. Please verify your 2FA token.",
					"success",
					toast
				);
				resetForm();
				return setTimeout(
					() =>
						history.push(`/verify-otp`, {
							isOtp: true,
						}),
					2000
				);
			}
			if (data?.status) {
				localStorage.setItem("wocman_token", data?.data?.accessToken);
				localStorage.setItem("wocman_user", JSON.stringify(data?.data));
				ShowMessage(
					"Success",
					"Logged in successfully. Redirecting to dashboard...",
					"success",
					toast
				);
				setTimeout(() => history.push(`/wocman`), 4000);
				resetForm();
			}
		} catch (error) {
			if (error?.response) {
				ShowMessage(
					"Error",
					error?.response?.data?.message ?? "Something went wrong",
					"error",
					toast
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const formik = useFormik({
		initialValues: {
			[OTP]: "",
			[EMAIL]: "",
			[PASSWORD]: "",
		},
		validationSchema: Yup.object({
			[OTP]: Yup.string().required("OTP is required"),
			[EMAIL]: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			[PASSWORD]: Yup.string().required("Password is required"),
		}),
		onSubmit: (values, { resetForm }) => {
			const body = {
				otpToken: values.otpToken,
				email: values.email,
				password: values.password,
			};
			confirmOtp(body, resetForm);
		},
	});

	React.useEffect(() => {
		setIsOtp(!!location?.state?.isOtp);
		setIsDevice(!!location?.state?.isDevice);
	}, [location?.state?.isOtp, location?.state?.isDevice]);

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
								textAlign="center"
							>
								Verify your OTP
							</Text>

							<Text
								textAlign="center"
								fontFamily="Gilroy-Medium"
								fontSize="1rem"
								mx={4}
								mb={6}
							>
								An OTP was sent to your email because a new device/IP address
								was detected. Kindly verify.
							</Text>

							<Flex
								mt={8}
								textAlign="start"
								w="100%"
								px={[4, 4, 8, 12, 12]}
								mb={4}
							>
								<Text
									as="small"
									fontFamily="Gilroy-Medium"
									fontSize="0.9rem"
									lineHeight="28px"
								>
									Your Email
								</Text>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
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
									type="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values[EMAIL]}
								/>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
								<FormError formik={formik} inputName={EMAIL} />
							</Flex>

							<Flex
								mt={8}
								textAlign="start"
								w="100%"
								px={[4, 4, 8, 12, 12]}
								mb={4}
							>
								<Text
									as="small"
									fontFamily="Gilroy-Medium"
									fontSize="0.9rem"
									lineHeight="28px"
								>
									Your Password
								</Text>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
								<Input
									placeholder="Enter your password"
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
									type="password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values[PASSWORD]}
								/>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
								<FormError formik={formik} inputName={PASSWORD} />
							</Flex>

							<Flex
								mt={8}
								textAlign="start"
								w="100%"
								px={[4, 4, 8, 12, 12]}
								mb={4}
							>
								<Text
									as="small"
									fontFamily="Gilroy-Medium"
									fontSize="0.9rem"
									lineHeight="28px"
								>
									OTP
								</Text>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
								<Input
									placeholder="OTP"
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
									id={OTP}
									name={OTP}
									type="text"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values[OTP]}
								/>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={4}>
								<FormError formik={formik} inputName={OTP} />
							</Flex>
							<Flex mt={8} w="100%" justify="center" align="center">
								<Button
									backgroundColor="wocman.contact"
									color="white"
									disabled={isLoading}
									isLoading={isLoading}
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
										Submit
									</Text>
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Zoom>
		</Flex>
	);
};

export default VerifyOTP;
