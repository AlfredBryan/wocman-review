import { Box } from "@chakra-ui/core";
import { Header } from "../../components/header/header";
import landing from "../../assets/images/services.jpg";
import { Footer } from "../../components/footer/footer";
import { GeneralHero } from "../../components/general-hero/generalhero";
import Slider from "./Slider";

const PLACE_HOLDER =
  "https://res.cloudinary.com/kingabesh/image/upload/c_scale,dpr_auto,e_blur:539,q_80,w_640/v1611076128/wocman/services_smr6uw.jpg";

const Blog = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="50vh" placeholder={PLACE_HOLDER}>
        <GeneralHero
          heading="Blog"
          subHeading="Explore free access to get your works done by getting connected to skilled tradesmen, technicians, and construction professionals with just a tap on your phone."
        />
      </Header>
      <Slider />
      <Footer />
    </Box>
  );
};

export default Blog;
