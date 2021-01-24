import { Box } from "@chakra-ui/core";
import { Header } from "../../components/header/header";
import landing from "../../assets/images/contact.jpg";
import { NewsLetter } from "../../components/newsletter/newsletter";
import { Footer } from "../../components/footer/footer";
import { GeneralHero } from "../../components/general-hero/generalhero";
import { SendMessage } from "../../components/send-message/send-message";
import { ContactDetails } from "../../components/contact-details/contact-details";


const PLACE_HOLDER =
  "https://res.cloudinary.com/kingabesh/image/upload/c_scale,dpr_auto,e_blur:539,q_80,w_640/v1611076128/wocman/contact_ybeoll.jpg";
  
const Contact = () => {
  return (
    <Box>
      <Header bgImage={landing} vh="50vh" placeholder={PLACE_HOLDER}>
        <GeneralHero heading="Contact Us" subHeading="We are here to help!" />
      </Header>
        <SendMessage />
        <ContactDetails />
        <NewsLetter />
      <Footer />
    </Box>
  );
};

export default Contact;