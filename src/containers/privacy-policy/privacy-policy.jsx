import { Box, Text } from "@chakra-ui/core";
import Zoom from "react-reveal/Zoom";
import { Footer } from "../../components/footer/footer";
import { Nav } from "../../components/nav/nav";

export const PrivacyPolicy = () => {
  return (
    <Box>
      <Box pt={8} px={8} mb={{ base: 6, md: 12 }}>
        <Nav isPrivacy />
        <Zoom opposite>
          <Box px={{ base: 4, md: 16, xl: 32 }} py={16}>
            <TextBody heading="**TERMS AND CONDITIONS**">
              <Text fontFamily="Poppins" mt={8}>
                WOCMAN TECHNOLOGY connects customers to the nearest tradesmen,
                technicians, and Professionals by a simple clique on their
                mobile phones to help execute domestic, repairs and construction
                works. The operation of this location based online platform is
                subject to the following terms and conditions which are binding
                on WOCMAN TECHNOLOGY, WORK-PARTNERS and CUSTOMERS.
              </Text>
            </TextBody>
            <TextBody heading="**ACCOUNT LOGIN**">
              <Text fontFamily="Poppins" mt={8}>
                Customers, work-partners or any user of our platform are solely
                responsible for maintaining the confidentiality or security of
                their account on this platform. The password of any user of this
                platform is only within his/her sphere of control and as such
                all users of our platform shall be liable or responsible for any
                activities on his/ her account. In the event of any breach on a
                user account by hacking or unauthorised third party, the User of
                the account should immediately notify the service provider for
                assistance.
              </Text>
            </TextBody>
            <TextBody heading="**WORK FEES**">
              <Box>
                <Text fontFamily="Poppins" mt={4}>
                  a. The customer shall make full payment of the work done,
                  service provided or all repairs carried out to WOCMAN
                  TECHNOLOGY through the bank or other electronic means of
                  payment. The participation of an assigned professional or
                  technician is to carry out only the assigned domestic works,
                  repairs or construction works in compliance with work
                  description as submitted by the customers.{" "}
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  b. Any Professional or Technician who collects money directly
                  from customer has breach a fundamental term of this agreement
                  and may be liable to the payment of civil damages in the court
                  of law
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  c. WOCMAN TECHNOLOGY will not tolerate any unauthorised side
                  deals or direct collection of professional fees in cash or
                  kind from customers and where this happens, the account of the
                  infringing professional may be shut down on the Platform
                </Text>
              </Box>
            </TextBody>
            <TextBody heading="**DISPUTE RELATING TO SERVICE**">
              <Text fontFamily="Poppins" mt={8}>
                <Text fontFamily="Poppins" mt={4}>
                  a.The principal aim of this platform is to solve the problems
                  of hassle and high cost related to execution of domestic,
                  repairs, and construction works for our customers by
                  connecting them with the appropriate and qualified
                  work-partners. Before the commencement of work, both the
                  customer and Wocman Technology shall agree on job description
                  and quote of such works.
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  b. Where the Technician deviates from the Job description
                  while carrying out repairs, the customer may recall the
                  technician, tradesmen or professional to order as stated by
                  the work request submitted.
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  c. Where the work done or repairs is fundamentally defective,
                  the customer may apply for correction of work done or a refund
                  from the assigned technician of such an amount out of the
                  professional fees that is sufficient to correct the defect
                  found in the work done
                </Text>
                <Box>
                  <Text fontFamily="Poppins" mt={4}>
                    d. Customers shall not be entitled to refund or correction
                    of work done where the following events occur;
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    i. Where the repairs made or work done is re-damaged by the
                    customer by the reason of an intentional, ignorance or
                    negligent act,
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    ii. Where the customer failed to follow the professional
                    advice of our work-partner as regard to the use of the
                    repaired item
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    iii. Where the default found in the work done or repairs
                    constitute a fresh complaint
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    iv. Where the customer compel the technician to attempt a
                    repair of damaged device contrary to the earlier advice of
                    the assigned technician instructing the customer against
                    further repairs on the ground that the device is damaged
                    beyond repairs
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    v. Where the customer made payment of professional fees
                    directly to the work-partner rather than pay into the
                    approved account of WOCMAN TECHNOLOGY
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    vi. A Customer shall only be entitled to apply for
                    correction of work done within five days calculated from the
                    date of work completion otherwise, the customer shall be
                    deemed to have waived his/her right to work correction
                  </Text>
                  <Text fontFamily="Poppins" mt={4} ml={2}>
                    vii. A Customer shall only be entitled to apply for a refund
                    owing to defect in work done within five days calculated
                    from the date of work completion otherwise, the customer
                    shall be deemed to have waived his/her right to any
                    percentage of refund
                  </Text>
                </Box>
              </Text>
            </TextBody>
            <TextBody heading="PROFESSIONAL / TECHNICIAN FEES">
              <Box>
                <Text fontFamily="Poppins" mt={4}>
                  a. Every Technician or professional assigned to a specific
                  customer shall be entitled to 85 percent of the total
                  professional fees paid into the account of WOCMAN TECHNOLOGY
                  by the customer.
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  b. WOCMAN TECHNOLOGY shall be entitled to 15 percent remainder
                  of the professional fees as a service charge.
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  c. Professionals, tradesmen or Technicians shall only receive
                  his or her 85 percent professional fees in their wallet on the
                  Wocman web app after work completion or after the expiration
                  of 5 days calculated from the date of work completion if the
                  said work has a complaint.
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  d. Where customers file a complaint of a simple or fundamental
                  defect in work done or repairs, No professional fees shall be
                  paid to the Professional, tradesmen or technicians until the
                  correction of such default.
                </Text>
                <Text fontFamily="Poppins" mt={4}>
                  e. Where a claim of refund is successfully made by a customer
                  under this term and conditions, such refund shall be deducted
                  from the fees of the technician or professional.
                </Text>
              </Box>
            </TextBody>
            <TextBody heading="DIS-INTERMEDIATION PROHIBITION CLAUSE">
              <Text fontFamily="Poppins" mt={8}>
                By using this platform, the professional, tradesmen or
                technician and the customer agree that WOCMAN TECHNOLOGY shall
                be the middleman/e-connector between both of them in relation to
                execution of domestic, repairs and construction works for period
                of two years calculated from the date that the professional and
                customer were connected together on this platform.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                Any side dealings by the professional with the customer within
                this 2 years similar to the business of WOCMAN TECHNOLOGY is
                prohibited and a breach of this term may entitle WOCMAN to
                damages against the professional in the court of law
              </Text>
            </TextBody>
            <TextBody heading="CHILDREN USE">
              <Text fontFamily="Poppins" mt={8}>
                a. Children are prohibited from the direct use of this platform.
                However, children may use this platform through their guardian,
                parents or any lawful representative under the law in force in
                the User's country.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                b. To determine who is a child, regards will be had to the Child
                Rights Act or any other relevant legislation that defines the
                age of children in the user's country.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                c. Where the Service provider detects that the user of this
                platform is a child who is not represented by a guardian,
                parents or lawful representative, the application shall be
                rejected pending when he or she will be represented by a lawful
                representative.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                d. The Service provider can only detect that a user is a child
                by the information supplied by such a user on this platform.
                Where a user misleads the service provider by supplying a wrong
                age on this platform, the service provider shall not be held
                liable for treating a child as an adult since the service
                provider was misled by the user's wrong age declaration.
              </Text>
            </TextBody>
            <TextBody heading="*RELATIONSHIP STATUS*">
              <Text fontFamily="Poppins" mt={8}>
                a. By acceptance of these terms and conditions, the Technician,
                professionals, Tradesmen and Customers on this platform agree
                that WOCMAN TECHNOLOGY operates as their e-connector on all
                transactions that are initiated on this platform.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                b. The professional, Tradesmen or Technician operates under this
                platform as an independent contractor and not a salaried staff
                of WOCMAN that is entitled to pension contribution or tax
                remittance.
              </Text>
            </TextBody>
            <TextBody heading="*LIABILITY CLAUSE*">
              <Text fontFamily="Poppins" mt={8}>
                WOCMAN TECHNOLOGY has made provisions for events that qualify a
                customer for refund. However, where a refund due to customer
                exceed the amount paid for the expected repairs or work done,
                the Assigned Technician, Professional,Engineer or Tradesmen
                shall become liable to pay the portion of the refund that exceed
                the initial amount deposited with WOCMAN TECHNOLOGY by the
                Customer.
              </Text>
            </TextBody>
            <TextBody heading="*DEFAULT BY PROFESSIONAL, TECHNICIAN, OR TRADESMEN*">
              <Text fontFamily="Poppins" mt={8}>
                a. Where the technician, Tradesmen, Engineer or any other
                professional that is assigned to a Customer refuse to appear at
                the home or office of the customer or any other designated
                places to carry out repairs or render his services at the agreed
                time and day, WOCMAN TECHNOLOGY shall suspend or dismiss the
                defaulting Engineer, Technician, Tradesmen or professional from
                the platform.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                b. A suspended or dismissed Tradesmen, Technician or
                professional may be re-considered for re-onboarding into this
                platform after the defaulting professional is subjected to a
                fresh training and other disciplinary procedures.
              </Text>
            </TextBody>
            <TextBody heading="*DEFINITION SECTION*">
              <Text fontFamily="Poppins" mt={8} color="wocman.typography1">
                For purpose of clarity, the words used in this terms and
                conditions shall be interpreted as follows; the platform.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                *TECHNICIAN / TRADESMEN /PROFESSIONAL* Same is loosely used to
                refer to engineers and tradesmen and technicians such as
                surveyors, architects, plumbers carpenters etc in this
                agreement. It generally refers to any one with requisite skill
                that is assigned to resolve the problem of customers
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                *PROFESSIONAL FEES* : This includes money paid into the approved
                account of WOCMAN TECHNOLOGY by the customer for the service
                rendered by the professional.
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                *SERVICE PROVIDER* refers to WOCMAN TECHNOLOGY
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                *CUSTOMER* Refers to all such persons that apply for the
                services of a professional under this platform
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                *WORK-PARTNERS* This refers to professionals, tradesmen and
                technicians registered on the Wocman Technology platform to
                provide services in the areas of domestic, repairs and
                construction works.
              </Text>
            </TextBody>
            <TextBody heading="*PRIVACY POLICY*">
              <Text fontFamily="Poppins" mt={8} color="wocman.typography1">
                All the information that are disclosed by the users of this
                platform shall not be made available to third party save in
                circumstances stated below;
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                *TECHNICIAN / TRADESMEN /PROFESSIONAL* Same is loosely used to
                refer to engineers and tradesmen and technicians such as
                surveyors, architects, plumbers carpenters etc in this
                agreement. It generally refers to any one with requisite skill
                that is assigned to resolve the problem of customers
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                a. Where the law requires the disclosure of such information
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                b. Where such information is released to the customer or
                professional to resolve the customer's problem
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                c. Where such information is disclosed to protect the interest
                of the service provider
              </Text>
              <Text fontFamily="Poppins" mt={8}>
                d. Where the service provider uses such information to send
                notification or advert to users of the platform provided such
                advertisement shall cease if the user rejects it at the first
                instance
              </Text>
            </TextBody>
          </Box>
        </Zoom>
      </Box>
      <Footer />
    </Box>
  );
};

const TextBody = (props) => (
  <>
    <Text fontFamily="Poppins" fontSize="1.5rem" mt={{ base: 6, md: 12 }}>
      {props.heading}
    </Text>
    {props.children}
  </>
);
