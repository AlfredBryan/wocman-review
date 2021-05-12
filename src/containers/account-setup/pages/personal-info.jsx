import React, { useState, useRef } from "react";
import { Flex, Text, Stack, Box, useToast } from "@chakra-ui/core";
import { CustomInput } from "../../../components/custom-input/custom-input";
import { CustomButton } from "../../../components/custom-button/custom-button";
import { axios, setAuthToken } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";

const PersonalInformation = ({ nextStep, step }) => {
	const toast = useToast();
	const inputRef = useRef(null);

	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		phone: "",
		address: "",
	});

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		// if (!inputRef.target.checked) return;
		// setAuthToken(localStorage["wocman_token"]);
		// try {
		// 	// const { data } = await axios.post("/wocman/profile/update", {
		// 	// ...values,
		// 	// });
		// } catch (error) {
		// 	let errorMessage = error?.response?.data?.message;
		// 	let fallbackErrorMessage =
		// 		error?.response?.data?.message?.details?.[0]?.message;
		// 	errorMessage =
		// 		typeof errorMessage === "string"
		// 			? errorMessage
		// 			: typeof fallbackErrorMessage === "string"
		// 			? fallbackErrorMessage
		// 			: "An error occurred.";
		// 	if (errorMessage) {
		// 		ShowMessage("Error", errorMessage, "error", toast);
		// 	}
		// }
	};
	return (
		<Flex
			minH="100vh"
			backgroundColor="wocman.contact"
			w="100%"
			align="center"
			justify="center"
			flexDirection="column"
			py={8}
		>
			<Flex w="85%" h="100%" flex="1" direction="column">
				<Stack w="100%">
					<Flex
						justify="space-between"
						h="10vh"
						overflow="auto"
						whiteSpace="nowrap"
						className="no-scrollbar"
						flexWrap="nowrap"
					>
						<Box
							d="flex"
							flex="1"
							flexDirection="column"
							justifyContent="flex-start"
							className={`account-tab ${
								step === 0 ? "active" : ""
							}`}
							_focus={{
								outline: "none",
							}}
						>
							<Text
								as="small"
								fontFamily="Poppins"
								color="#FFFFFF"
								mb={2}
								opacity="0.4"
							>
								Personal Information
							</Text>
						</Box>
						<Box
							d="flex"
							flex="1"
							flexDirection="column"
							justifyContent="flex-start"
							className={`account-tab ${
								step === 1 ? "active" : ""
							}`}
							_focus={{
								outline: "none",
							}}
						>
							<Text
								as="small"
								fontFamily="Poppins"
								color="#FFFFFF"
								mb={2}
								opacity="0.4"
							>
								Profile Picture
							</Text>
						</Box>
						<Box
							d="flex"
							flex="1"
							flexDirection="column"
							justifyContent="flex-start"
							className={`account-tab ${
								step === 2 ? "active" : ""
							}`}
							_focus={{
								outline: "none",
							}}
						>
							<Text
								as="small"
								fontFamily="Poppins"
								color="#FFFFFF"
								mb={2}
								opacity="0.4"
							>
								Select Work Category
							</Text>
						</Box>
						<Box
							d="flex"
							flex="1"
							flexDirection="column"
							justifyContent="flex-start"
							className={`account-tab ${
								step === 3 ? "active" : ""
							}`}
							_focus={{
								outline: "none",
							}}
						>
							<Text
								as="small"
								fontFamily="Poppins"
								color="#FFFFFF"
								mb={2}
								opacity="0.4"
							>
								Skill Level & Certificate
							</Text>
						</Box>
					</Flex>
				</Stack>
				<Flex flexDirection="column">
					<Text
						fontFamily="Poppins"
						fontWeight="600"
						color="white"
						w={{ base: "60%", xl: "30%" }}
						fontSize={{ base: "1.5rem", xl: "3rem" }}
					>
						Complete Profile Setup
					</Text>
					<Text
						fontFamily="Poppins"
						color="white"
						my={{ base: 4, lg: 8 }}
					>
						for Blag@gmail.com
					</Text>
					<Flex
						flex="1"
						w="100%"
						flexWrap="wrap"
						justifyContent={{ base: "center", xl: "space-between" }}
					>
						<CustomInput
							placeholder="Firstname"
							value={values?.firstname}
							name="firstname"
							onChange={handleChange}
						/>
						<CustomInput
							placeholder="Lastname"
							value={values?.lastname}
							name="lastname"
							onChange={handleChange}
						/>
						<CustomInput
							placeholder="Billing Address"
							value={values?.address}
							name="address"
							onChange={handleChange}
						/>
						<CustomInput
							placeholder="Phone Number"
							value={values?.phone}
							name="phone"
							onChange={handleChange}
						/>
					</Flex>
					<Flex align="flex-start" justify="center" w="100%" mt={4}>
						<input
							type="checkbox"
							className="special-checkbox"
							defaultChecked={true}
							ref={inputRef}
						/>
						<Text
							as="small"
							color="white"
							fontFamily="Gilroy-SemiBold"
							fontWeight="1.3rem"
							w={{ base: "80%", md: "40%" }}
							textAlign="center"
							lineHeight="24px"
						>
							Yes, I understand and agree to the Wocman Terms of
							service, including the User Agreement and Privacy
							Policy.
						</Text>
					</Flex>
					<Flex
						justify={{ base: "center", md: "flex-end" }}
						mt={{ base: 4, md: 16 }}
						w="100%"
					>
						<CustomButton onClick={() => nextStep()}>
							Proceed
						</CustomButton>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default PersonalInformation;
