// pages/submit.js
import { Box, Heading } from '@chakra-ui/react'
import SubmitForm from '../components/SubmitForm'

export default function SubmitApparel() {
  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="xl" textAlign="center" color="brand.900" mb={10}>
        Submit Your Apparel
      </Heading>
      <SubmitForm />
    </Box>
  )
}
