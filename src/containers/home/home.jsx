import { Box } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
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

const PLACE_HOLDER =
  "https://res.cloudinary.com/kingabesh/image/upload/c_scale,dpr_auto,e_blur:539,q_80,w_640/v1611076128/wocman/home_uaktzy.jpg";

export const Home = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="100vh" placeholder={PLACE_HOLDER}>
        <Zoom opposite>
          <Hero />
        </Zoom>
      </Header>
      <Fade right>
        <FeaturedServices />
      </Fade>
      <Zoom opposite>
        <WocmanCategories />
      </Zoom>
      <Zoom opposite>
        <JoinSection />
      </Zoom>
      <Zoom opposite>
        <OfferedServices />
      </Zoom>
      <Slide left>
        <Faq />
      </Slide>
      <Slide right>
        <NewsLetter />
      </Slide>
      <Footer />
    </Box>
  );
};
