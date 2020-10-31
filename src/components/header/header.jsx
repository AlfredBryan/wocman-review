import { Box } from "@chakra-ui/core";
import { Nav } from "../nav/nav";
import "./header.css";
export const Header = ({ children, bgImage, vh }) => {
  return (
    <Box
      className="header"
      bgImage={`linear-gradient(0deg, rgba(85, 45, 30, 0.2), rgba(85, 45, 30, 0.2)), url(${bgImage})`}
      pt={8}
      pb="10rem"
      px={8}
      bgPos="center"
      bgRepeat="no-repeat"
      bg="transparent"
      bgSize="cover"
      minHeight="100vh"
      backgroundAttachment="fixed"
    >
      <Nav />
      <Box>{children}</Box>
    </Box>
  );
};
