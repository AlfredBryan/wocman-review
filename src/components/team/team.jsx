import { Box, Flex, Image, Link, Text } from "@chakra-ui/core";
import mission from "../../assets/images/mission.jpg";
import twitter from "../../assets/icons/twitter-filled.svg";
import instagram from "../../assets/icons/instagram-filled.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import behance from "../../assets/icons/behance.svg";

export const Team = () => {
  const members = [
    {
      image: mission,
      name: "Olalekan Ilesanmi",
      designation: "Co-founder & Ceo",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
      ],
    },
    {
      image: mission,
      name: "Adamu Bwala",
      designation: "Co-founder",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
      ],
    },
    {
      image: mission,
      name: "Abasifreke Ekwere",
      designation: "Full Stack Developer",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: instagram, name: "instagram", href: "" },
        { icon: github, name: "github", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
      ],
    },
    {
      image: mission,
      name: "Lasisi Sodiq",
      designation: "Designer",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
        { icon: behance, name: "behance", href: "" },
        { icon: instagram, name: "instagram", href: "" },
      ],
    },
    {
      image: mission,
      name: "Justice George",
      designation: "Backend Developer",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: instagram, name: "instagram", href: "" },
        { icon: github, name: "github", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
      ],
    },
  ];

  return (
    <Box backgroundColor="wocman.featuredService" px={[8, 8, 8, 40, 40]} py={[12, 12, 12, 24, 24]}>
      <Box textAlign="center">
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="2rem"
          color="wocman.typography1"
          mb={16}
        >
          The Team
        </Text>
      </Box>
      <Flex flexWrap="wrap" justify={["center", "center", "center", "flex-start", "flex-start"]}>
        {members.map((item, i) => (
          <Member
            key={i}
            icons={item.icons}
            name={item.name}
            designation={item.designation}
            image={item.image}
          />
        ))}
      </Flex>
    </Box>
  );
};

const Member = ({ icons, name, image, designation }) => {
  return (
    <Flex flexDirection="column" w={["90%", "90%", "48%", "33%", "33%"]} align="center" mb={16}>
      <Image
        src={image}
        alt=""
        w="200px"
        h="200px"
        borderRadius="50%"
        objectFit="cover"
        mb={6}
      />
      <Text
        fontFamily="Poppins"
        fontWeight="600"
        fontSize="1.2rem"
        color="wocman.typography1"
        mb={2}
        lineHeight="163.35%"
      >
        {name}
      </Text>
      <Text
        fontFamily="Poppins"
        fontWeight="600"
        fontSize="0.7rem"
        color="wocman.typography3"
        letterSpacing="6px"
        textTransform="uppercase"
        mb={4}
        lineHeight="163.35%"
        opacity="0.5"
      >
        {designation}
      </Text>
      <Flex>
        {icons.map((item, index) => (
          <Link isExternal href="https://google.com">
            <Image key={index} src={item.icon} alt={item.name} mr={4} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
