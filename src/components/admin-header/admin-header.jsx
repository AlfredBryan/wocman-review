import {
  Flex,
  Icon,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/core";
import bell from "../../assets/icons/bell.svg";
import mission from "../../assets/images/mission.jpg";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../state/actions/loginAction";

export const AdminHeader = ({ toggle, profile }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };

  const { firstname, lastname, isProfileUpdated, profile_picture } =
    profile || {};
  const profilePics = profile_picture?.map((pics) => pics?.current);

  return (
    <Flex
      px={{ base: 4, md: 8 }}
      justify="space-between"
      backgroundColor="#F8F7F7"
      align="center"
      py={{ base: 4, md: 6 }}
      position="sticky"
    >
      <Flex
        align={{ base: "center", lg: "baseline" }}
        d={{ base: "none", lg: "flex" }}
      >
        <Text
          color="wocman.contact"
          fontFamily="Poppins"
          lineHeight="54px"
          fontSize={{ lg: "1.7rem", xl: "1.9rem" }}
          fontWeight="600"
          mr={8}
        >
          Hello {firstname || lastname || "User"}.
        </Text>
        <Text
          as="small"
          color="wocman.newsLetter"
          fontFamily="Poppins"
          lineHeight="21px"
        >
          Wash your hands.
        </Text>
      </Flex>

      <Flex d={{ base: "flex", lg: "none" }} onClick={toggle}>
        <Icon
          name="burger"
          color="wocman.newsLetter"
          w={{ base: "25px", md: "40px" }}
          h={{ base: "25px", md: "40px" }}
        />
      </Flex>

      <Flex align="center">
        {isProfileUpdated === false && (
          <Button
            leftIcon="warning-2"
            mr={[4, 4, 8]}
            ml={[2, 0]}
            mb={0}
            fontSize="0.7rem"
            backgroundColor="#552D1E"
            color="white"
            borderRadius="4px"
            h={12}
            flex={3}
            _hover={{ opacity: "0.7" }}
            _active={{ transform: "scale(0.98)" }}
            _focus={{ outline: "none" }}
            onClick={() => history.push("/wocman/profile")}
          >
            Complete your profile
          </Button>
        )}
        <Image cursor="pointer" src={bell} alt="notifications" mr={8} />
        <Menu>
          <MenuButton>
            <Image
              src={profilePics || mission}
              w="40px"
              h="40px"
              borderRadius="50%"
              alt="notifications"
              border="2px solid black "
            />
          </MenuButton>
          <MenuList zIndex="500">
            <MenuItem zIndex="500" onClick={handleLogout} title="Logout">
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
