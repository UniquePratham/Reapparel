// pages/submit.js
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import SubmitForm from "../components/SubmitForm";

export default function SubmitPage() {
  return (
    <Layout>
      <Container maxW="900px" py={{ base: 10, md: 14 }}>
        <Heading as="h1" size="lg" color="heading" letterSpacing="-0.02em">
          Sell an item
        </Heading>
        <Text color="mutedText" mt={1} mb={8} maxW="60ch">
          Describe the garment honestly and we will grade it before it goes live.
          Listings with measurements and a clear condition note sell fastest.
        </Text>
        <SubmitForm />
      </Container>
    </Layout>
  );
}