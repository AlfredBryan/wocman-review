import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/core";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export const Faq = () => {
  const faqs = [
    {
      question: "How can I join wocman?",
      answer: `You can join wocman by registering through the wocman online platform, upload a certificate for verification and vetting, take an online screening tests,undergo induction and get on-boarded on the wocman web app to start earning`,
    },
    {
      question: "Am a customer, how do I register?",
      answer: `You can register online through the Wocman Technology website and get started by updating your profile.`,
    },
    {
      question: "How do I get my jobs done?",
      answer: `You just need to submit a free work request on the Wocman Technology online platform to get started`,
    },
    {
      question: "Can I make payment from anywhere in the world?",
      answer: `Yes, you can through the online Wocman Technology platform`,
    },
    {
      question:
        "Can I execute my jobs from anywhere in the world back home in Nigeria?",
      answer: `Absolutely yes, you can get your jobs done from any part of the world and even track every progress of your projects with no hassle`,
    },
    {
      question: "How do I make payments?",
      answer: `All payments by customers are made and secured through Paystack online payment system on the Wocman Technology platform.`,
    },
    {
      question: "What qualification do I need to join wocman?",
      answer: `You must be able to read and write, have a minimum of trade test certificate or its equivalent, to include freedom certificate, OND, HND, BSc, and other professional certifications.`,
    },
    {
      question: "How do I get paid?",
      answer: `Payments are made weekly to a registered bank account. At wocman, we strictly operate a cashless system. `,
    },
    {
      question: "Can I work 24hrs on the platform?",
      answer: `All work execution commences at 7 am and ends at 7 pm daily, so you can only work within this time frame. You can work anywhere you want within the areas where our service is available to include, for now, Ikeja, Ojodu, Ogudu, Gbagada, Ikoyi, Oregun, Surulere, Yaba, Lekki, and Lagos Island.`,
    },
    {
      question: "What else do I need to know?",
      answer: `You must be able to use the internet, have a registered phone number, and email address `,
    },
  ];

  return (
    <Box
      py={16}
      px={[3, 12, 12, 20, 20]}
      backgroundColor="wocman.featuredService"
    >
      <Flex pb={4} textAlign="center" justify="center">
        <Fade top delay={500} duration={2000}>
          <Text fontFamily="Poppins" as="small" color="wocman.typography2">
            CUSTOMER HELP
          </Text>
        </Fade>
      </Flex>
      <Flex pb={12} textAlign="center" justify="center">
        <Fade top delay={500} duration={2000}>
          <Text
            fontFamily="Poppins"
            fontSize="2rem"
            fontWeight="600"
            color="wocman.typography1"
          >
            Frequently Asked Questions
          </Text>
        </Fade>
      </Flex>
      <Box
        w={["100%", "100%", "100%", "100%", "60%"]}
        flex="1"
        mx="auto"
        flexDirection="column"
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <Zoom bottom delay={500} duration={2000}>
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                borderTop={index === 0 ? "none" : ""}
                w="100%"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader _focus={{ outline: "none" }} py={6}>
                      <AccordionIcon
                        h="40px"
                        w="50px"
                        color={
                          isExpanded
                            ? "wocman.typography1"
                            : "wocman.typography2"
                        }
                      />
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        fontSize="0.9rem"
                        fontFamily="Poppins"
                        ml={4}
                        color={
                          isExpanded
                            ? "wocman.typography1"
                            : "wocman.typography2"
                        }
                      >
                        {item.question}
                      </Box>
                    </AccordionHeader>
                    <AccordionPanel
                      pb={4}
                      px={[8, 8, 8, 16, 24]}
                      py={8}
                      fontSize="0.8rem"
                      fontFamily="Poppins"
                      color="wocman.typography2"
                    >
                      {item.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Zoom>
        </Accordion>
      </Box>
    </Box>
  );
};
