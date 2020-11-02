import { Box } from "@chakra-ui/core";
import { Header } from "../../components/header/header";
import { Hero } from "../../components/hero/hero";
import landing from "../../assets/images/home.jpg";
import { FeaturedServices } from "../../components/featured-services/featured-services";
import { WocmanCategories } from "../../components/wocman-categories/wocman-categories";
import { JoinSection } from "../../components/join-section/join-section";
import { OfferedServices } from "../../components/offered-services/offered-services";
import { Faq } from "../../components/faq/faq";
import { NewsLetter } from "../../components/newsletter/newsletter";
import { Footer } from "../../components/footer/footer";


export const Home = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="80vh">
          <Hero/>
      </Header>
      <FeaturedServices/>
      <WocmanCategories/>
      <JoinSection/>
      <OfferedServices/>
      <Faq/>
      <NewsLetter/>
      <Footer/>
    </Box>
  );
};
