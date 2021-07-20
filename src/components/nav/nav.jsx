import { useState, useRef } from "react";
import { Button, Flex, Image, Link, List, ListItem } from "@chakra-ui/core";
import logo from "../../assets/icons/logo.svg";
import coloredlogo from "../../assets/icons/logo-colored.svg";
import Burger from "../burger/burger";
import Menu from "../menu/menu";
import "./nav.css";
import { useOnClickOutside } from "../../utils/hooks";
import { Link as ReactLink } from "react-router-dom";
import { useHistory, withRouter } from "react-router";

export const NavBar = (props) => {
	const [open, setOpen] = useState(false);
	const history = useHistory();

	const node = useRef();

	useOnClickOutside(node, () => setOpen(false));

	const navStuff = [
		{
			name: "Home",
			to: "/",
		},
		{
			name: "About",
			to: "/about",
		},
		{
			name: "Services",
			to: "/services",
		},
		{
			name: "Contact us",
			to: "/contact",
		},
		{
			name: "Privacy Policy",
			to: "/privacy-policy",
		},
		{
			name: "Dashboard",
			to: "/wocman", //might change later to accommodate customers
			notDisplay: !localStorage["wocman_token"],
		},
	];

	return (
		<Flex justify="space-evenly" bg="transparent" color="white" h="10vh">
			<Flex
				flex="1"
				bg="transparent"
				h="50%"
				justify={props.isAuth ? "flex-start" : "center"}
				align="center"
				cursor="pointer"
				d="flex"
				pl={
					props.isAuth || props.search
						? ["1.5rem", "1.5rem", "2rem", "3rem", "3rem"]
						: ""
				}
				onClick={() => props.history.push("/")}
			>
				<Image
					objectFit="cover"
					alt="wocman logo"
					src={props.isPrivacy ? coloredlogo : logo}
					// fallbackSrc="https://via.placeholder.com/150"
					// size="12rem"
					minH="200px"
					h="200px"
					w={12}
				/>
			</Flex>
			<Flex
				flex="4"
				justifyContent="center"
				align="center"
				className="nav"
				display={props.isAuth ? "none" : ""}
			>
				<List
					styleType="none"
					display="flex"
					justifyContent="space-evenly"
					w="80%"
					fontFamily="Gilroy-SemiBold"
					align="center"
					color={props.isPrivacy ? "wocman.typography1" : "white"}
				>
					{navStuff
						.filter((e) => !!e.notDisplay === false)
						.map((item, index) => {
							return (
								<ListItem className="mt-2 text-sm" key={index}>
									<Link
										as={ReactLink}
										to={item.to}
										opacity="0.4"
										_hover={{
											textDecor: "none",
										}}
										_focus={{ outline: "none" }}
										className={`link ${
											props.location.pathname === item.to ? "active" : ""
										}`}
									>
										{item.name}
									</Link>
								</ListItem>
							);
						})}
				</List>
			</Flex>
			<Flex
				flex="2"
				align="center"
				justify="center"
				className="nav"
				display={props.isAuth ? "none" : ""}
			>
				<Button
					className="mr-4"
					variant="outline"
					borderColor="wocman.navBtn"
					color={props.isPrivacy ? "wocman.typography1" : "white"}
					fontSize="0.7rem"
					borderRadius="2px"
					_hover={{ bg: "transparent", opacity: "0.7" }}
					_active={{ transform: "scale(0.98)" }}
					_focus={{ borderColor: "wocman.navBtn", outline: "none" }}
					// onClick={() => history.push("/register?wocman=0")}
					onClick={() => history.push("/customer")}
				>
					HIRE WOCMAN
				</Button>
				<Button
					fontSize="0.7rem"
					backgroundColor="wocman.navOutlineBtn"
					borderRadius="2px"
					color={props.isPrivacy ? "wocman.typography1" : "white"}
					_hover={{ bg: "wocman.navOutlineBtn", opacity: "0.7" }}
					_active={{ transform: "scale(0.98)" }}
					_focus={{ borderColor: "wocman.navOutlineBtn", outline: "none" }}
					onClick={() => history.push("/register?wocman=1")}
				>
					REGISTER AS A WOCMAN
				</Button>
			</Flex>
			<div className="mobile-nav">
				<div ref={node}>
					<Flex
						flex="1"
						bg="transparent"
						justify="center"
						align="center"
						onClick={() => props.history.push("/")}
					>
						<Image
							objectFit="cover"
							alt="wocman logo"
							src={props.isPrivacy ? coloredlogo : logo}
							// fallbackSrc="https://via.placeholder.com/150"
							size="3rem"
						/>
					</Flex>
					{!props.isAuth && (
						<Burger open={open} setOpen={setOpen} isPrivacy={props.isPrivacy} />
					)}
					<Menu open={open} setOpen={setOpen} className="w-full">
						<div className="flex flex-col justify-center">
							<List
								styleType="none"
								w="100%"
								color="black"
								fontFamily="Gilroy-SemiBold"
								align="center"
								textAlign="center"
							>
								{navStuff.map((item, index) => (
									<ListItem className="my-8 text-sm" key={index}>
										<Link
											as={ReactLink}
											onClick={() => {
												setOpen(false);
											}}
											to={item.to}
											className={`link ${
												props.location.pathname === item.to
													? "mobile-active"
													: ""
											}`}
											_focus={{ outline: "none" }}
										>
											{item.name}
										</Link>
									</ListItem>
								))}
							</List>
							<Button
								className="mr-4"
								variant="outline"
								color="black"
								borderColor="wocman.navBtn"
								fontSize="0.7rem"
								my={4}
								mx="auto"
								w="70%"
								borderRadius="2px"
								_hover={{ bg: "transparent", opacity: "0.7" }}
								_active={{ transform: "scale(0.98)" }}
								_focus={{ borderColor: "wocman.navBtn", outline: "none" }}
								onClick={() => history.push("/register?wocman=0")}
								// onClick={() => history.push("/wocman")}
							>
								HIRE WOCMAN
							</Button>
							<Button
								fontSize="0.7rem"
								backgroundColor="wocman.navOutlineBtn"
								borderRadius="2px"
								w="70%"
								mx="auto"
								_hover={{ bg: "wocman.navOutlineBtn", opacity: "0.7" }}
								_active={{ transform: "scale(0.98)" }}
								_focus={{
									borderColor: "wocman.navOutlineBtn",
									outline: "none",
								}}
								onClick={() => history.push("/register?wocman=1")}
							>
								REGISTER AS A WOCMAN
							</Button>
							{/* {[].map((item, index) => {
                return (
                  <div className="list" key={index}>
                    <span>
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <span>{item.title}</span>
                  </div>
                );
              })} */}
						</div>
					</Menu>
				</div>
			</div>
		</Flex>
	);
};

export const Nav = withRouter(NavBar);
