import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Flex, Input, Link, Text, useToast } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import { Nav } from "../../components/nav/nav";
import "./forgot-password.css";
import AuthBgImage from "../../assets/images/auth.jpg";
import { Link as ReactLink, useHistory } from "react-router-dom";
import FormError from "../../components/form-error/form-error";
import { axios } from "../../utils/axios";
import { ShowMessage } from "../../utils/alert";
import { BASE_URL } from "../../utils/constants";

const EMAIL = "email";

const ForgotPassword = () => {
	const toast = useToast();
	const history = useHistory();

	const [isLoading, setIsLoading] = React.useState(false);

	const requestResetPassword = async (body, resetForm) => {
		setIsLoading(true);
		try {
			const res = await axios.post(`${BASE_URL}/password-reset-wocman`, body);
			const {
				data: { status, message },
			} = res;
			if (status && message) {
				ShowMessage(
					"Success",
					"OTP sent to your email. You can now reset your password!",
					"success",
					toast,
					5000
				);
			}
			setTimeout(
				() => history.push(`/reset-password`, { email: body.email }),
				4000
			);
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
			[EMAIL]: "",
		},
		validationSchema: Yup.object({
			[EMAIL]: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
		}),
		onSubmit: (values, { resetForm }) => {
			const body = {
				email: values.email,
			};
			requestResetPassword(body, resetForm);
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
								Forgot Password
							</Text>

							<Text mx={4} fontFamily="Gilroy-Medium" fontSize="1rem" mb={6}>
								Enter the email address associated with your account
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
									Don't have an account?
								</Text>
								<Link
									as={ReactLink}
									textTransform="uppercase"
									fontFamily="OverPass"
									to="/register"
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
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Zoom>
		</Flex>
	);
};

export default ForgotPassword;
