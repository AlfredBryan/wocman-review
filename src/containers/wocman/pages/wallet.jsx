/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, Flex, Image, Text } from "@chakra-ui/core";
import purse from "../../../assets/images/purse.svg";
import { TransactionList } from "../components/transaction";
import { getCurrentUser } from "../../../utils";
import { wallet } from "../../../state/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wallet = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem('user')
  const curUser = getCurrentUser();
  const { result } = useSelector(
		({ wallet: { result, error, isLoading, message } = {} }) => ({
			result,
			error,
			isLoading,
			message,
		})
	);

	useEffect(() => {
		dispatch(wallet());
		},[]);
	return (
		<Box
			justify="center"
			align="center"
			w="100%"
			h="100%"
			flex={1}
			p={{ base: 4, md: 8 }}
		>
			<Flex
				w="100%"
				backgroundColor="white"
				px={{ base: 6, md: 16 }}
				py={{ base: 4, md: 8 }}
				flexDir={{ base: "column", xl: "row" }}
				mb={{ base: 4, md: 8 }}
			>
				<Flex
					flex={1}
					flexDirection="column"
					justify="space-evenly"
					order={{ base: 1, xl: 0 }}
				>
					<Text
						fontFamily="Poppins"
						color="#192646"
						fontWeight="600"
						lineHeight="20px"
						mb={8}
					>
						Wallet
					</Text>
					<Text
						fontFamily="Poppins"
						fontWeight="500"
						lineHeight="34px"
						fontSize="2.5rem"
					>
						N{result?.wallet[0]?.amount}.00
					</Text>
					<Text
						as="small"
						fontFamily="Poppins"
						fontWeight="300"
						my={2}
					>
						Total Balance
					</Text>
					<Box
						height="10px"
						w="100%"
						mt={4}
						borderTopStyle="dotted"
						borderTopColor="wocman.newsLetter"
						borderTopWidth="2px"
					></Box>
					<Flex flexDir={{ base: "column", xl: "row" }}>
						<Box mb={{ base: 8, xl: 0 }}>
							<Text
								fontFamily="Poppins"
								fontWeight="bold"
								fontSize="0.8rem"
								color="wocman.newsLetter"
								my={4}
							>
								Wallet info
							</Text>
							<Flex>
								<Text
									as="small"
									fontFamily="Poppins"
									fontWeight="300"
									color="wocman.newsLetter"
								>
									Unique Wallet ID:
								</Text>
								<Text
									as="small"
									fontWeight="bold"
									fontFamily="Poppins"
									color="wocman.newsLetter"
								>
									{result?.wallet[0]?.walletid}
								</Text>
							</Flex>
							<Flex>
								<Text
									as="small"
									fontFamily="Poppins"
									fontWeight="300"
									color="wocman.newsLetter"
								>
									Bank Name:
								</Text>
								<Text
									as="small"
									fontWeight="bold"
									fontFamily="Poppins"
									color="wocman.newsLetter"
								>
									{result?.wallet[0]?.bankName}/{curUser?.firstname} {curUser?.lastname}
								</Text>
							</Flex>
						</Box>
						<Box ml={{ base: 0, xl: 16 }}>
							<Text
								fontFamily="Poppins"
								fontWeight="bold"
								fontSize="0.8rem"
								color="wocman.newsLetter"
								my={4}
							>
								Bank info
							</Text>
							<Flex>
								<Text
									as="small"
									fontFamily="Poppins"
									fontWeight="300"
									color="wocman.newsLetter"
								>
									Account Number:
								</Text>
								<Text
									as="small"
									fontWeight="bold"
									fontFamily="Poppins"
									color="wocman.newsLetter"
								>
									0098987098
								</Text>
							</Flex>
							<Flex>
								<Text
									as="small"
									fontFamily="Poppins"
									fontWeight="300"
									color="wocman.newsLetter"
								>
									Bank:
								</Text>
								<Text
									as="small"
									fontWeight="bold"
									fontFamily="Poppins"
									color="wocman.newsLetter"
								>
									Guaranty Trust Bank
								</Text>
							</Flex>
						</Box>
					</Flex>
				</Flex>
				<Flex flex={1} justify={{ base: "center", xl: "flex-end" }}>
					<Image
						src={purse}
						alt="purse"
						transform={{ xl: "scale(1.2)" }}
					/>
				</Flex>
			</Flex>
			<Flex flexDirection={{ base: "column", xl: "row" }}>
				<Box flex="1.8" minH="100%" h="100%" alignSelf="stretch">
					{/* <WalletChart /> */}
				</Box>
				<Box flex="1.2" ml={{ base: 0, xl: 8 }}>
					<TransactionList />
				</Box>
			</Flex>
		</Box>
	);
};

export default Wallet;
