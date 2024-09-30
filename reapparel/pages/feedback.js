// pages/feedback.js
import { Box, Heading } from '@chakra-ui/react'
import FeedbackForm from '../components/FeedbackForm'

export default function FeedbackPage() {
  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="xl" textAlign="center" color="brand.900" mb={10}>
        We Value Your Feedback
      </Heading>
      <FeedbackForm />
    </Box>
  )
}
