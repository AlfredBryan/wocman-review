import React from "react";
import {
	Flex,
	Image,
	Input,
	PseudoBox,
	Text,
	Box,
	Button,
	Stack,
	useToast,
} from "@chakra-ui/core";
import { CustomButton } from "../../../components/custom-button/custom-button";
import addWhite from "../../../assets/icons/plus-square-white.svg";
import checkmark from "../../../assets/icons/check-circle.svg";
import { axios, setAuthToken } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";
import { useHistory } from "react-router";

const SkillLevel = ({ step, setStep, prevStep }) => {
	const toast = useToast();
	const history = useHistory();

	const [certificate, setCertificate] = React.useState(null);

	let fileTypes = ["image/jpeg", "image/jpg", "image/png"];

	const handleCertficateChange = async (e) => {
		const file = e.target.files[0];

		if (fileTypes.includes(file?.type)) {
			var form = new FormData();
			form.append("avatar", file, file.name);
			form.append("name", file.name);
			form.append("issued_date", file.lastModifiedDate);

			// form.createObjectURL()
			console.log("form:", form);

			const { data } = await axios.post(
				"/wocman/profile/add/certificate",
				form
			);
			console.log(data);
			if (data.status) {
				alert("cert set!");
				ShowMessage(
					"Success",
					"Certificate added successfully",
					"success",
					toast
				);
			}
			setCertificate(data);
		} else {
			ShowMessage(
				"Error",
				"An error occurred. try again",
				"error",
				toast
			);
			setCertificate("");
		}
		console.log(form);
	};
	const handleSubmit = () => {
		setAuthToken(localStorage["wocman_token"]);

		setTimeout(history.push("/wocman/dashboard"), 2000);
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
				<Stack
					w="100%"
					fontSize="20px"
					cursor="pointer"
					d={{ base: "none", md: "flex" }}
				>
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
							onClick={() => setStep(0)}
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
							onClick={() => setStep(1)}
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
							onClick={() => setStep(2)}
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
							onClick={() => setStep(3)}
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
						Skill Level & Certificate.
					</Text>
					<Text
						fontFamily="Poppins"
						color="white"
						my={{ base: 4, lg: 8 }}
					>
						Rate your skill Level and Upload Certificate.
					</Text>
					<Flex
						py={{ base: 4, md: 8 }}
						flexWrap="wrap"
						justify={{ base: "center", md: "space-between" }}
					>
						{[
							{
								level: "Newbie",
								description:
									"I am new to this field with little experience.",
							},
							{
								level: "Intermediate",
								description:
									"I have substantial experience in this field.",
							},
							{
								level: "Highly Experienced",
								description:
									"I have deep expertise in this field.",
							},
						].map((item, index) => (
							<LevelCard
								key={index}
								index={index}
								heading={item.level}
								subheading={item.description}
							/>
						))}
					</Flex>
					<Flex
						justify={{ base: "center", md: "space-between" }}
						mt={{ base: 4, md: 16 }}
						w="100%"
						flexWrap="wrap"
					>
						<PseudoBox
							as="label"
							htmlFor="certificate-upload"
							w={{ base: "90%", md: "45%", xl: "40%" }}
						>
							<Flex
								justify="start"
								align="center"
								px={8}
								py={8}
								backgroundColor="wocman.category"
								mb={{ base: 8, md: 16 }}
								cursor="pointer"
							>
								<Image
									src={addWhite}
									alt="Upload Picture"
									mr={{ base: 2, md: 4 }}
								/>
								<Text
									fontFamily="Poppins"
									color="white"
									lineHeight="20px"
								>
									Upload Certificate
								</Text>
							</Flex>
						</PseudoBox>
						<Input
							type="file"
							aaccept=".jpg, .jpeg, .png"
							onChange={(e) => handleCertficateChange(e)}
							id="certificate-upload"
							display="none"
						/>
						<Text>{certificate?.name}</Text>
						<Flex
							d={{ base: "flex", md: "" }}
							w="100%"
							justifyContent="space-between"
							direction={{ base: "column", md: "row-reverse" }}
						>
							<CustomButton
								onClick={handleSubmit}
								mt={{ base: 8, md: 0 }}
								mb={{ base: 4, md: 0 }}
							>
								Finish
							</CustomButton>
							<Button
								h="70px"
								w={{ base: "90%", md: "45%", xl: "25%" }}
								borderRadius="10px"
								onClick={() => prevStep()}
								bg="wocman.contact"
								color="white"
								_hover={{
									outline: "none",
									bg: "wocman.contact",
									border: "1px",
								}}
								_focus={{ outline: "none" }}
							>
								Back
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default SkillLevel;

const LevelCard = (props) => (
	<Flex
		w={["100%", "70%", "48%", "48%", "30%"]}
		bg="white"
		className="wocman-category"
		h="auto"
		mb={["2rem", "2rem", "2rem", "2rem", 0]}
		mr={[0, "1rem", 0]}
		borderRadius="0 0 13.5px 13.5px"
		flexDirection="column"
		overflow="hidden"
	>
		<Flex
			flex="2"
			flexDirection="column"
			justify="space-between"
			pos="relative"
			backgroundColor="wocman.category"
		>
			<Flex
				backgroundColor="wocman.category_heading"
				py={{ base: 2, md: 4 }}
				px={{ base: 8, md: 16 }}
				justify="space-between"
			>
				<Text
					fontSize="1.2rem"
					fontFamily="Poppins"
					fontWeight="600"
					py={2}
					color={`${
						props.index === 0 ? "white" : "wocman.heading_text"
					}`}
				>
					{props.heading}
				</Text>
				<Image
					src={checkmark}
					alt="check mark"
					mr={{ base: 2, md: 4 }}
					d={`${props.index === 0 ? "flex" : "none"}`}
				/>
			</Flex>
			<Flex
				flexDir="column"
				px={{ base: 4, md: 8 }}
				pb={{ base: 4, md: 8 }}
				pt={{ base: 2, md: 4 }}
				backgroundColor="wocman.category"
				h="200px"
				align="center"
				justify="center"
			>
				<Flex>
					<Text
						fontFamily="Poppins"
						lineHeight="138.6%"
						color={`${
							props.index === 0 ? "white" : "wocman.heading_text"
						}`}
						// ml={{ base: 4, md: 8 }}
					>
						{props.subheading}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	</Flex>
);

// <Select
// 	as="select"
// 	backgroundColor="wocman.specialInput"
// 	placeholder={placeholder}
// 	px={{ base: 8, md: 24 }}
// 	border="none"
// 	borderRadius="0 8px 8px 0"
// 	backgroundPosition="-2rem 0"
// 	_placeholder={{ fontWeight: 100 }}
// 	fontFamily="Poppins"
// 	h={{ base: "5rem", md: "7rem" }}
// 	color="white"
// 	flex={1}
// 	_focus={{ outline: "none" }}
// >
// 	<option></option>
// 	<option></option>
// 	<option></option>
// </Select>;

// class ImageUpload extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { file: "", imagePreviewUrl: "" };
// 	}

// 	_handleSubmit(e) {
// 		e.preventDefault();
// 		// TODO: do something with -> this.state.file
// 		console.log("handle uploading-", this.state.file);
// 	}

// 	_handleImageChange(e) {
// 		e.preventDefault();

// 		let reader = new FileReader();
// 		let file = e.target.files[0];

// 		reader.onloadend = () => {
// 			this.setState({
// 				file: file,
// 				imagePreviewUrl: reader.result,
// 			});
// 		};

// 		reader.readAsDataURL(file);
// 	}

// 	render() {
// 		let { imagePreviewUrl } = this.state;
// 		let $imagePreview = null;
// 		if (imagePreviewUrl) {
// 			$imagePreview = <img src={imagePreviewUrl} />;
// 		} else {
// 			$imagePreview = (
// 				<div className="previewText">
// 					Please select an Image for Preview
// 				</div>
// 			);
// 		}

// 		return (
// 			<div className="previewComponent">
// 				<form onSubmit={(e) => this._handleSubmit(e)}>
// 					<input
// 						className="fileInput"
// 						type="file"
// 						onChange={(e) => this._handleImageChange(e)}
// 					/>
// 					<button
// 						className="submitButton"
// 						type="submit"
// 						onClick={(e) => this._handleSubmit(e)}
// 					>
// 						Upload Image
// 					</button>
// 				</form>
// 				<div className="imgPreview">{$imagePreview}</div>
// 			</div>
// 		);
// 	}
// }
