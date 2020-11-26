import { Box } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Header } from "../../components/header/header";
import landing from "../../assets/images/contact.jpg";
import { NewsLetter } from "../../components/newsletter/newsletter";
import { Footer } from "../../components/footer/footer";
import { GeneralHero } from "../../components/general-hero/generalhero";
import { SendMessage } from "../../components/send-message/send-message";
import { ContactDetails } from "../../components/contact-details/contact-details";

export const Contact = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="50vh">
        <GeneralHero heading="Contact Us" subHeading="We are here to help!" />
      </Header>
      <Bounce up>
        <SendMessage />
      </Bounce>
      <Zoom>
        <ContactDetails />
      </Zoom>
      <Slide right>
        <NewsLetter />
      </Slide>
      <Footer />
    </Box>
  );
};
