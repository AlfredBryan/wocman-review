import { Box } from "@chakra-ui/core";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import { Header } from "../../components/header/header";
import landing from "../../assets/images/services.jpg";
import { NewsLetter } from "../../components/newsletter/newsletter";
import { Footer } from "../../components/footer/footer";
import { GeneralHero } from "../../components/general-hero/generalhero";
import { WhyUs } from "../../components/why-us/why-us";
import { TopRated } from "../../components/top-rated/top-rated";
import { Gardener } from "../../components/gardener/gardener";
import { OnDemand } from "../../components/on-demand/on-demand";


const PLACE_HOLDER =
  "https://res.cloudinary.com/kingabesh/image/upload/c_scale,dpr_auto,e_blur:539,q_80,w_640/v1611076128/wocman/services_smr6uw.jpg";
  
export const Services = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="50vh" placeholder={PLACE_HOLDER}>
        <GeneralHero
          heading="Services"
          subHeading="We execute your domestic, repairs, and construction work where, when, and how you want it."
        />
      </Header>
      <LightSpeed right>
        <WhyUs />
      </LightSpeed>
      <Zoom opposite>
        <TopRated />
      </Zoom>
      <Zoom opposite>
        <Gardener />
      </Zoom>
      <OnDemand />
      <Slide right>
        <NewsLetter />
      </Slide>
      <Footer />
    </Box>
  );
};
