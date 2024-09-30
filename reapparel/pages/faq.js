// pages/faq.js
import { Box, Heading } from '@chakra-ui/react'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="xl" textAlign="center" color="brand.900" mb={10}>
        Frequently Asked Questions
      </Heading>
      <FAQ />
    </Box>
  )
}
