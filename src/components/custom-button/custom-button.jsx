import { Button, Text } from "@chakra-ui/core";

export const CustomButton = ({ children, onClick, mt,mb,...rest }) => (
	<Button
		_focus={{ outline: "none" }}
		h="70px"
		w={{ base: "90%", md: "45%", xl: "25%" }}
		borderRadius="10px"
		onClick={onClick}
		mt={mt}
		mb={mb}
		{...rest}
	>
		<Text
			fontFamily="Poppins"
			textTransform="capitalize"
			lineHeight="138.6%"
		>
			{children}
		</Text>
	</Button>
);
