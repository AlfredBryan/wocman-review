import React from "react";
import {
	Flex,
	Image,
	Input,
	PseudoBox,
	Text,
	Box,
	Stack,
	useToast,
} from "@chakra-ui/core";
import { CustomButton } from "../../../components/custom-button/custom-button";
import facemask from "../../../assets/images/face-mask.svg";
import add from "../../../assets/icons/plus-square.svg";
import { axios } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";

const ProfilePicture = ({ step, prevStep, nextStep }) => {
	const toast = useToast();

	const [profileImage, setProfileImage] = React.useState(null);

	let fileTypes = ["image/jpeg", "image/jpg", "image/png"];

	const handleImageChange = async (e) => {
		const file = e.target.files[0];
		if (fileTypes.includes(file?.type)) {
			var form = new FormData();
			form.append("avatar", file, file.name);

			console.log("form:", form);
			try {
				const { data } = await axios.post(
					"/wocman/profile/picture",
					form
				);

				console.log("response:", data.data.imageUrl);
				if (data.status) {
					ShowMessage(
						"Success",
						"Profile picture set successfully",
						"success",
						toast
					);
					setProfileImage(data.data.imageUrl);
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			setProfileImage("");
		}
		console.log(file);
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

				<Flex
					flexDirection="column"
					align="center"
					alignSelf="stretch"
					py={{ base: 4, md: 6 }}
				>
					<Text
						textAlign="center"
						fontFamily="Poppins"
						fontWeight="600"
						color="white"
						//   w={{ base: "60%", xl: "30%" }}

						fontSize={{ base: "1.5rem", xl: "3rem" }}
					>
						Okay, your face.
					</Text>
					<Text
						fontFamily="Poppins"
						color="white"
						my={{ base: 4, lg: 8 }}
						textAlign="center"
					>
						Upload a profile picture for easy identification.
					</Text>
					<Flex
						w={{ base: "90%", md: "60%", xl: "40%" }}
						h={{ base: "90%", md: "60%", xl: "40%" }}
						flex={1}
						backgroundColor="white"
						justify="center"
						align="center"
						flexDir="column"
					>
						<Image
							src={profileImage ? profileImage : facemask}
							alt="face mask"
							my={{ base: 8, md: 16 }}
						/>
						<PseudoBox as="label" htmlFor="file-upload">
							<Flex
								justify="center"
								align="center"
								px={{ base: 4, md: 8 }}
								py={{ base: 4, md: 8 }}
								backgroundColor="rgba(85, 45, 30, 0.2)"
								border="1.31304px solid #552D1E"
								mb={{ base: 8, md: 16 }}
								cursor="pointer"
							>
								<Image
									src={add}
									alt="Upload Picture"
									mr={{ base: 2, md: 4 }}
								/>
								<Text
									fontFamily="Poppins"
									color="wocman.contact"
									lineHeight="20px"
								>
									Upload Profile Picture
								</Text>
							</Flex>
						</PseudoBox>
						<Input
							type="file"
							id="file-upload"
							display="none"
							onChange={(e) => handleImageChange(e)}
						/>
					</Flex>
					<Flex
						justify={{ base: "center", md: "flex-end" }}
						mt={{ base: 4, md: 16 }}
						w="100%"
					>
						<CustomButton onClick={() => prevStep()}>
							Back
						</CustomButton>
						<CustomButton onClick={() => nextStep()}>
							Proceed
						</CustomButton>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProfilePicture;
