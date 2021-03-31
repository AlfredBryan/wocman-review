import * as React from "react";
import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	Image,
	useToast,
} from "@chakra-ui/core";
import { SettingsNotifications } from "../components/settings-notifications";
import { SettingsLogin } from "../components/settings-login";
import { SettingsBank } from "../components/settings-bank";
import loader from "../../../assets/images/wocman.gif";
import { axios, setAuthToken } from "../../../utils/axios";
import { ShowMessage } from "../../../utils/alert";

export const SettingsContext = React.createContext();

const Settings = () => {
	const toast = useToast();

	const [tabIndex, setTabIndex] = React.useState(0);

	const handleTabsChange = (index) => {
		setTabIndex(index);
	};

	const [settings, setSettings] = React.useState({
		smsNotice: false,
		emailNotice: false,
		serviceNotice: false,
		technicalNotice: false,
		twofactor: false,
		deviceSettings: false,
		paymentschedule: false,
		unboard: false,
	});
	const [settingsLoading, setSettingsLoading] = React.useState(false);

	React.useEffect(() => {
		const getAllSettings = async () => {
			setAuthToken(localStorage["wocman_token"]);
			setSettingsLoading(true);
			try {
				const { data } = await axios.post("/wocman/settings/get");
				if (data?.status) {
					setSettings(data?.data);
				} else {
					ShowMessage(
						"Error",
						"An error occurred while fetching settings",
						"error",
						toast
					);
				}
			} catch (error) {
				const errorMessage = error?.response?.data?.message;
				if (errorMessage) {
					ShowMessage("Error", errorMessage, "error", toast);
				}
			} finally {
				setSettingsLoading(false);
			}
		};
		getAllSettings();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SettingsContext.Provider
			value={{
				settings,
				setSettings,
				settingsLoading,
			}}
		>
			<Flex
				justify="center"
				align="center"
				flexDirection="column"
				w="100%"
				flex={1}
				h="auto"
				minH="100vh"
			>
				<Flex
					h="100%"
					w="100%"
					align="center"
					justify="center"
					flexDirection="column"
					py={{ base: 0, md: 12 }}
					px={{ base: 4, md: 8 }}
				>
					<Flex w="100%" h="100%" flex="1">
						<Tabs
							isFitted
							variant="unstyled"
							w="100%"
							index={tabIndex}
							onChange={handleTabsChange}
						>
							<TabList
								mt={{ base: 12, md: 0 }}
								h="10vh"
								w={{ base: "auto", md: "50%" }}
								overflow="auto"
								whiteSpace="nowrap"
								className="no-scrollbar"
								flexWrap="nowrap"
							>
								<Tab
									d="flex"
									flex="1"
									flexDirection="column"
									mr={{ base: 4, md: 8 }}
									justifyContent="flex-start"
									className={`settings-tab ${tabIndex === 0 ? "active" : ""}`}
									_focus={{
										outline: "none",
									}}
								>
									<Text
										as="small"
										fontFamily="Poppins"
										fontSize="1rem"
										mb={2}
										opacity="0.4"
									>
										Notifications
									</Text>
								</Tab>
								<Tab
									d="flex"
									flex="1"
									flexDirection="column"
									mr={{ base: 4, md: 8 }}
									justifyContent="flex-start"
									className={`settings-tab ${tabIndex === 1 ? "active" : ""}`}
									_focus={{
										outline: "none",
									}}
								>
									<Text
										as="small"
										fontFamily="Poppins"
										fontSize="1rem"
										mb={2}
										opacity="0.4"
									>
										Login & Security
									</Text>
								</Tab>
								<Tab
									d="flex"
									flex="1"
									flexDirection="column"
									mr={{ base: 4, md: 8 }}
									justifyContent="flex-start"
									className={`settings-tab ${tabIndex === 2 ? "active" : ""}`}
									_focus={{
										outline: "none",
									}}
								>
									<Text
										as="small"
										fontFamily="Poppins"
										fontSize="1rem"
										mb={2}
										opacity="0.4"
									>
										Bank Settings
									</Text>
								</Tab>
							</TabList>

							{settingsLoading ? (
								<Flex w="90%" h="90%" align="center" justify="center">
									<Image src={loader} />
								</Flex>
							) : (
								<TabPanels pb={8}>
									<TabPanel>
										<SettingsNotifications />
									</TabPanel>
									<TabPanel>
										<SettingsLogin />
									</TabPanel>
									<TabPanel>
										<SettingsBank />
									</TabPanel>
								</TabPanels>
							)}
						</Tabs>
					</Flex>
				</Flex>
			</Flex>
		</SettingsContext.Provider>
	);
};

export default Settings;
