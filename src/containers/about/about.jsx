import { Box } from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import { Header } from "../../components/header/header";
import landing from "../../assets/images/about.jpg";
import { NewsLetter } from "../../components/newsletter/newsletter";
import { Footer } from "../../components/footer/footer";
import { GeneralHero } from "../../components/general-hero/generalhero";
import { AboutSubsection } from "../../components/about-subsection/about-subsection";
import { Advisory } from "../../components/advisory/advisory";
import { Team } from "../../components/team/team";
import { CustomerQuotes } from "../../components/customer-quotes/customer-quotes";


const PLACE_HOLDER =
  "https://res.cloudinary.com/kingabesh/image/upload/c_scale,dpr_auto,e_blur:539,q_80,w_640/v1611076128/wocman/about_c9xnhu.jpg";
  
export const About = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="50vh" placeholder={PLACE_HOLDER}>
        <GeneralHero
          heading="About Us"
          subHeading="There is something about us people find fascinating, hope you will help us know more."
        />
      </Header>
      <Fade left>
        <AboutSubsection />
      </Fade>
      <Fade right>
        <Advisory />
      </Fade>
      <Bounce down>
        <Team />
      </Bounce>
      <LightSpeed left>
        <CustomerQuotes />
      </LightSpeed>
      <Slide right>
        <NewsLetter />
      </Slide>
      <Footer />
    </Box>
  );
};
