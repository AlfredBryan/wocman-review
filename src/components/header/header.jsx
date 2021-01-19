import { Flex } from "@chakra-ui/core";
import { useProgressiveImage } from "../../utils/useProgressiveImage";
import { Nav } from "../nav/nav";
export const Header = ({ children, bgImage, vh, search, placeholder }) => {

  const image = useProgressiveImage(bgImage);

  return (
    <Flex
      className="header"
      bgImage={
        !search
          ? `linear-gradient(0deg, rgba(85, 45, 30, 0.2), rgba(85, 45, 30, 0.2)), url(${
              image || placeholder
            })`
          : null
      }
      pt={8}
      pb={search ? 0 : "10rem"}
      px={search ? 0 : 8}
      bgPos="center"
      flexDir="column"
      position="relative"
      bgRepeat="no-repeat"
      bg={search ? "wocman.typography1" : "transparent"}
      bgSize="cover"
      minHeight={vh}
      backgroundAttachment="fixed"
    >
      <Nav search={search} />
      <Flex minH="100%" flex="1">
        {children}
      </Flex>
    </Flex>
  );
};
