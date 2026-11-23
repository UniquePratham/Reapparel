// pages/feedback.js
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import FeedbackForm from "../components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <Layout>
      <Container maxW="900px" py={{ base: 10, md: 14 }}>
        <Heading as="h1" size="lg" color="brand.900" letterSpacing="-0.02em">
          Feedback
        </Heading>
        <Text color="gray.600" mt={1} mb={8} maxW="60ch">
          We read every message. Tell us what is missing, what is confusing, or
          what you would like to see next.
        </Text>
        <FeedbackForm />
      </Container>
    </Layout>
  );
}