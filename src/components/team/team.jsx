import { Box, Flex, Image, Link, Text } from "@chakra-ui/core";
// import mission from "../../assets/images/mission.jpg";
import twitter from "../../assets/icons/twitter-filled.svg";
// import instagram from "../../assets/icons/instagram-filled.svg";
// import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/team-linkedin.svg";
import Fade from "react-reveal/Fade";
// import behance from "../../assets/icons/behance.svg";

export const Team = () => {
  const members = [
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1607270513/wocman/TJKW7061_vdouj8.jpg",
      name: "Olalekan Ilesanmi",
      designation: "Founder/CEO",
      icons: [
        { icon: twitter, name: "twitter", href: "https://twitter.com/lekuwe" },
        {
          icon: linkedin,
          name: "linkedin",
          href:
            "https://www.linkedin.com/in/olalekan-ilesanmi-mnse-mnice-95766756/",
        },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/daviluiz/image/upload/v1648114105/Screenshot_2022-03-24_at_10.27.25.png",
      name: "Adamu Bwala",
      designation: "Co-founder",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
      ],
    },
  ];

  return (
    <Box
      backgroundColor="wocman.featuredService"
      px={[8, 8, 8, 40, 40]}
      py={[12, 12, 12, 24, 24]}
    >
      <Box textAlign="center">
        <Fade opposite delay={500} duration={2000}>
          <Text
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="2rem"
            color="wocman.typography1"
            mb={8}
          >
            The Team
          </Text>
        </Fade>
        <Fade opposite delay={1000} duration={2000}>
          <Text
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="1rem"
            color="wocman.typography1"
            mb={16}
          >
            We’re a team of traditional geeks seeking to build Africa's foremost
            workmen pool for collective prosperity.
          </Text>
        </Fade>
      </Box>
      <Flex
        flexWrap="wrap"
        justify={["center", "center", "center", "flex-start", "flex-start"]}
      >
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
    <Flex
      flexDirection="column"
      w={["90%", "90%", "48%", "33%", "33%"]}
      align="center"
      mb={16}
    >
      <Fade opposite delay={1000} duration={2000}>
        <Image
          src={image}
          alt=""
          w="200px"
          h="200px"
          borderRadius="50%"
          objectFit="cover"
          mb={6}
        />
      </Fade>

      <Fade bottom delay={1000} duration={2000}>
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
      </Fade>
      <Fade bottom delay={1000} duration={2000}>
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
      </Fade>
      <Flex>
        {icons.map((item, index) => (
          <Fade right delay={1000} duration={(index + 1) * 100}>
            <Link isExternal href={item.href} _focus={{ outline: "none" }}>
              <Image key={index} src={item.icon} alt={item.name} mr={4} />
            </Link>
          </Fade>
        ))}
      </Flex>
    </Flex>
  );
};
