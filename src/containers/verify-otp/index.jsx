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
// import { axios } from "../../utils/axios";
// import { ShowMessage } from "../../utils/alert";
// import { BASE_URL } from "../../utils/constants";

const OTP = "otp";

const VerifyOTP = () => {
	const toast = useToast();
	const history = useHistory();
	const location = useLocation();

	const [isLoading, setIsLoading] = React.useState(false);

	// const resetPassword = async (body, resetForm) => {
	// 	setIsLoading(true);
	// 	try {
	// 		const res = await axios.post(`${BASE_URL}/wocman-password-reset`, body);
	// 		const {
	// 			data: { status, message },
	// 		} = res;
	// 		if (status && message) {
	// 			ShowMessage(
	// 				"Success",
	// 				"Password reset successfully. You can now login!",
	// 				"success",
	// 				toast,
	// 				5000
	// 			);
	// 		}
	// 		setTimeout(() => history.push(`/login`, { email: body.email }), 4000);
	// 		resetForm();
	// 	} catch (error) {
	// 		const { response } = error;
	// 		if (response) {
	// 			ShowMessage(
	// 				"Error",
	// 				response?.data?.message ?? "Something went wrong",
	// 				"error",
	// 				toast,
	// 				5000
	// 			);
	// 		}
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	const resetPassword = (body) => {
		console.log(body);
	};

	const formik = useFormik({
		initialValues: {
			[OTP]: "",
		},
		validationSchema: Yup.object({
			[OTP]: Yup.string().required("OTP is required"),
		}),
		onSubmit: (values, { resetForm }) => {
			const body = {
				otp: values.otp,
			};
			resetPassword(body, resetForm);
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
									OTP
								</Text>
							</Flex>
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
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
							<Flex w="100%" px={[4, 4, 8, 12, 12]} mb={6}>
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
