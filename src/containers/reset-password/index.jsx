import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Flex, Input, Link, Text, useToast } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import { Nav } from "../../components/nav/nav";
import "./reset-password.css";
import AuthBgImage from "../../assets/images/auth.jpg";
import { useHistory, useLocation } from "react-router-dom";
import FormError from "../../components/form-error/form-error";
import { axios } from "../../utils/axios";
import { ShowMessage } from "../../utils/alert";
import { BASE_URL } from "../../utils/constants";

const PASSWORD = "password";
const OTP = "otp";

const ResetPassword = () => {
	const toast = useToast();
	const history = useHistory();
	const location = useLocation();

	const [isLoading, setIsLoading] = React.useState(false);
	const [email, setEmail] = React.useState("");

	const resetPassword = async (body, resetForm) => {
		setIsLoading(true);
		try {
			const res = await axios.post(`${BASE_URL}/wocman-password-reset`, body);
			const {
				data: { status, message },
			} = res;
			if (status && message) {
				ShowMessage(
					"Success",
					"Password reset successfully. You can now login!",
					"success",
					toast,
					5000
				);
			}
			setTimeout(() => history.push(`/login`, { email: body.email }), 4000);
			resetForm();
		} catch (error) {
			const { response } = error;
			if (!response) {
				ShowMessage(
					"Error",
					"Check your internet connection",
					"error",
					toast,
					5000
				);
			} else {
				ShowMessage(
					"Error",
					response?.data?.message ?? "Something went wrong",
					"error",
					toast,
					5000
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const formik = useFormik({
		initialValues: {
			[PASSWORD]: "",
			[OTP]: "",
		},
		validationSchema: Yup.object({
			[PASSWORD]: Yup.string().required("Email is required"),
			[OTP]: Yup.string().required("Reset code is required"),
		}),
		onSubmit: (values, { resetForm }) => {
			const body = {
				email,
				password: values.password,
				otp: values.otp,
			};
			resetPassword(body, resetForm);
			console.log(body);
		},
	});

	React.useEffect(() => {
		if (!location?.state?.email) {
			history.goBack();
		} else {
			setEmail(location?.state?.email);
		}
	}, [history, location?.state?.email]);

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
								Reset your Password
							</Text>

							<Text
								textAlign="center"
								fontFamily="Gilroy-Medium"
								fontSize="1rem"
								mx={4}
								mb={6}
							>
								Reset your password to a unique set of characters to avoid
								account loss.
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
									Unique Reset Code
								</Text>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
								<Input
									placeholder="Unique reset code"
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
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
								<FormError formik={formik} inputName={OTP} />
							</Flex>

							<Flex
								mt={0}
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
									New Password
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

export default ResetPassword;
