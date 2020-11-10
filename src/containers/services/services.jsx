import { Box } from "@chakra-ui/core";
import { Header } from "../../components/header/header";
import landing from "../../assets/images/services.jpg";
import { NewsLetter } from "../../components/newsletter/newsletter";
import { Footer } from "../../components/footer/footer";
import { GeneralHero } from "../../components/general-hero/generalhero";
import { WhyUs } from "../../components/why-us/why-us";
import { TopRated } from "../../components/top-rated/top-rated";
import { Gardener } from "../../components/gardener/gardener";
import { OnDemand } from "../../components/on-demand/on-demand";

export const Services = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="50vh">
        <GeneralHero
          heading="Services"
          subHeading="We execute your domestic, repairs, and construction work where, when, and how you want it."
        />
      </Header>
      <WhyUs />
      <TopRated />
      <Gardener/>
      <OnDemand/>
      <NewsLetter />
      <Footer />
    </Box>
  );
};
