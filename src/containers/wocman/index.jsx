import { Box, Flex, Image, Text, useToast } from "@chakra-ui/core";
import React, { lazy, Suspense, useRef, useState } from "react";
import { AdminHeader } from "../../components/admin-header/admin-header";
import { SideNav } from "../../components/sidenav/sidenav";
import { useOnClickOutside } from "../../utils/hooks";
import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "../../utils/PrivateRoute";
import loader from "../../assets/images/wocman.gif";
import { axios, setAuthToken } from "../../utils/axios";
import { ShowMessage } from "../../utils/alert";

export const ProfileContext = React.createContext();

const Wocman = () => {
	const [openSideNav, setSideNav] = useState(false);
	const node = useRef();
	const toast = useToast();

	const [profile, setProfile] = React.useState({});
	const [profileLoading, setProfileLoading] = React.useState(false);

	const routes = [
		{
			path: "/dashboard",
			name: "Dashboard",
			Component: lazy(() => import("./pages/dashboard")),
		},
		{
			path: "/wocstation",
			name: "WocStation",
			Component: lazy(() => import("./pages/wocstation")),
		},
		{
			path: "/wallet",
			name: "Wallet",
			Component: lazy(() => import("./pages/wallet")),
		},
		{
			path: "/messaging",
			name: "Contact",
			Component: lazy(() => import("./pages/messaging")),
		},
		{
			path: "/profile",
			name: "Contact",
			Component: lazy(() => import("./pages/profile")),
		},
		{
			path: "/settings",
			name: "Contact",
			Component: lazy(() => import("./pages/settings")),
		},
	];

	useOnClickOutside(node, () => setSideNav(false));

	const toggleSideNav = () => setSideNav(!openSideNav);
	const closeSideNav = () => setSideNav(false);

	React.useEffect(() => {
		const getUserProfile = async () => {
			setAuthToken(localStorage["wocman_token"]);
			setProfileLoading(true);
			try {
				const { data } = await axios.post("/wocman/profile");
				if (data?.status) {
					setProfile(data?.data);
				} else {
					ShowMessage(
						"Error",
						"An error occurred while fetching user",
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
				setProfileLoading(false);
				console.log("user fetched.");
			}
		};
		getUserProfile();
	}, [toast]);

	return (
		<ProfileContext.Provider
			value={{
				profile,
				setProfile,
			}}
		>
			<Flex backgroundColor="wocman.dashboard" h="100vh" position="relative">
				<SideNav
					open={openSideNav}
					toggle={toggleSideNav}
					close={closeSideNav}
					node={node}
				/>
				<Flex flex={1} flexDir="column" position="relative" overflowY="scroll">
					{profileLoading ? (
						<Flex w="90%" h="90%" align="center" justify="center">
							<Image src={loader} />
						</Flex>
					) : (
						<Box position="relative" w="100%" h="100%">
							<AdminHeader profile={profile} toggle={toggleSideNav} />
							<Flex flex={1} h="100%">
								<Suspense
									fallback={
										<Flex w="100vw" h="100vh" align="center" justify="center">
											<Image src={loader} />
										</Flex>
									}
								>
									<Switch>
										{routes.map(({ path, Component }) => (
											<PrivateRoute
												key={path}
												component={Component}
												path={"/wocman" + path}
											/>
										))}
										<Redirect from="/wocman" to="/wocman/dashboard" />
										<Route
											render={() => (
												<Flex
													justify="center"
													align="center"
													h="100vh"
													w="100%"
												>
													<Text
														fontFamily="Poppins"
														fontWeight="bold"
														color="wocman.newsLetter"
													>
														Oops, this page does not exist
													</Text>
												</Flex>
											)}
										/>
									</Switch>
								</Suspense>
							</Flex>
						</Box>
					)}
				</Flex>
			</Flex>
		</ProfileContext.Provider>
	);
};

export default Wocman;
