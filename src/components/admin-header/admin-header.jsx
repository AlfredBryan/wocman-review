import { Flex, Icon, Image, Text } from "@chakra-ui/core";
import bell from "../../assets/icons/bell.svg";
import mission from "../../assets/images/mission.jpg";

export const AdminHeader = ({ toggle }) => {
  return (
    <Flex
      px={{ base: 4, md: 8 }}
      justify="space-between"
      backgroundColor="#F8F7F7"
      align="center"
      py={{ base: 4, md: 6 }}
      position="relative"
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
          Hello Kazeem.
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
        {/* <Image src={menu} alt="menu-bar" mr={8} color="grey" /> */}
        <Icon
          name="burger"
          color="wocman.newsLetter"
          w={{ base: "25px", md: "40px" }}
          h={{ base: "25px", md: "40px" }}
        />
      </Flex>

      <Flex align="center">
        <Image src={bell} alt="notifications" mr={8} />
        <Image
          src={mission}
          w="40px"
          h="40px"
          borderRadius="50%"
          alt="notifications"
        />
      </Flex>
    </Flex>
  );
};
