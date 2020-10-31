import { Box } from "@chakra-ui/core";
import { Header } from "../../components/header/header";
import { Hero } from "../../components/hero/hero";
import landing from "../../assets/images/home.jpg";
import { FeaturedServices } from "../../components/featured-services/featured-services";
import { WocmanCategories } from "../../components/wocman-categories/wocman-categories";


export const Home = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="80vh">
          <Hero/>
      </Header>
      <FeaturedServices/>
      <WocmanCategories/>
    </Box>
  );
};
