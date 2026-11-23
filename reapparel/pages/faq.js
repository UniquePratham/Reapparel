// pages/faq.js
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const FAQS = [
  {
    q: "How is condition graded?",
    a: "Every item is checked against a written scale. A+ is new with tags, A is excellent with no visible wear, B is good with honest signs of use, and C is fair with wear that is described in the listing.",
  },
  {
    q: "Who sets the price?",
    a: "You do. We show the original retail price alongside your asking price so buyers can see the saving, and we reject listings priced above retail.",
  },
  {
    q: "What happens after I submit?",
    a: "You get a reference immediately. We review the description and measurements, grade the item, and email you when it goes live.",
  },
  {
    q: "Can I return something?",
    a: "Yes, within 14 days, if the item does not match its listed condition. Photograph the discrepancy and we will arrange the return.",
  },
  {
    q: "How are the impact numbers calculated?",
    a: "CO₂ and water figures are estimates for producing a new garment of the same fibre and weight. They are indicative, not audited.",
  },
  {
    q: "Do you accept everything?",
    a: "No. We decline items with undisclosed damage, strong odours, or fibres we cannot verify. Honest listings keep the marketplace trustworthy.",
  },
];

export default function FaqPage() {
  return (
    <Layout>
      <Container maxW="800px" py={{ base: 10, md: 14 }}>
        <Heading as="h1" size="lg" color="brand.900" letterSpacing="-0.02em">
          How Reapparel works
        </Heading>
        <Text color="gray.600" mt={1} mb={8}>
          The rules we hold ourselves to.
        </Text>

        <Accordion allowMultiple>
          {FAQS.map((item, index) => (
            <AccordionItem
              key={item.q}
              borderWidth="1px"
              borderColor="brand.100"
              borderRadius="lg"
              bg="white"
              mb={3}
              px={2}
            >
              <AccordionButton py={4}>
                <Box flex="1" textAlign="left" fontWeight="600" color="brand.900">
                  {item.q}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} color="gray.600" lineHeight="1.75">
                {item.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Layout>
  );
}