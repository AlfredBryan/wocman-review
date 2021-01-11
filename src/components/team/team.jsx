import { Box, Flex, Image, Link, Text } from "@chakra-ui/core";
// import mission from "../../assets/images/mission.jpg";
import twitter from "../../assets/icons/twitter-filled.svg";
// import instagram from "../../assets/icons/instagram-filled.svg";
// import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/team-linkedin.svg";
// import behance from "../../assets/icons/behance.svg";

export const Team = () => {
  const members = [
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1607270513/wocman/TJKW7061_vdouj8.jpg",
      name: "Olalekan Ilesanmi",
      designation: "Co-founder & Ceo",
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
        "https://res.cloudinary.com/wocman-technology/image/upload/v1607270488/wocman/CLKR4622_j1skvq.jpg",
      name: "Adamu Bwala",
      designation: "Co-founder",
      icons: [
        { icon: twitter, name: "twitter", href: "" },
        { icon: linkedin, name: "linkedin", href: "" },
      ],
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1325235044261240833/MdewYScj_400x400.jpg",
      name: "Abasifreke Ekwere",
      designation: "Full Stack Developer",
      icons: [
        {
          icon: twitter,
          name: "twitter",
          href: "https://twitter.com/kingabesh_",
        },
        // {
        //   icon: instagram,
        //   name: "instagram",
        //   href: "https://www.instagram.com/king_abesh/",
        // },
        // { icon: github, name: "github", href: "https://github.com/kingabesh" },
        {
          icon: linkedin,
          name: "linkedin",
          href: "https://www.linkedin.com/in/abasifreke-ekwere",
        },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1608893692/wocman/Snapchat-1934776076_k2y2xb.jpg",
      name: "Lasisi Sodiq",
      designation: "Designer",
      icons: [
        {
          icon: twitter,
          name: "twitter",
          href: "https://twitter.com/LvzyEngine",
        },
        {
          icon: linkedin,
          name: "linkedin",
          href: "https://www.linkedin.com/in/lasisi-sodiq/",
        },
        // { icon: behance, name: "behance", href: "" },
        // { icon: instagram, name: "instagram", href: "" },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/wocman-technology/image/upload/v1608893690/wocman/tWKny5sH_400x400_zat3bu.jpg",
      name: "Justice George",
      designation: "Backend Developer",
      icons: [
        {
          icon: twitter,
          name: "twitter",
          href: "https://mobile.twitter.com/JusticeGeo",
        },
        // { icon: instagram, name: "instagram", href: "" },
        // { icon: github, name: "github", href: "" },
        {
          icon: linkedin,
          name: "linkedin",
          href: "https://www.linkedin.com/in/justice-george-33a50b184/",
        },
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
        <Text
          fontFamily="Poppins"
          fontWeight="500"
          fontSize="2rem"
          color="wocman.typography1"
          mb={8}
        >
          The Team
        </Text>
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
          <Link isExternal href={item.href} _focus={{ outline: "none" }}>
            <Image key={index} src={item.icon} alt={item.name} mr={4} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
