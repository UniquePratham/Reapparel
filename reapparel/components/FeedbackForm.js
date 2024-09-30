// components/FeedbackForm.js
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react'

export default function FeedbackForm() {
  return (
    <Box maxW="600px" mx="auto" py={10} px={6} boxShadow="lg" rounded="lg" bg="white">
      <VStack spacing={6}>
        <FormControl id="name">
          <FormLabel fontWeight="bold" color="brand.700">Your Name</FormLabel>
          <Input type="text" placeholder="Enter your name" focusBorderColor="brand.400" />
        </FormControl>

        <FormControl id="email">
          <FormLabel fontWeight="bold" color="brand.700">Email</FormLabel>
          <Input type="email" placeholder="Enter your email" focusBorderColor="brand.400" />
        </FormControl>

        <FormControl id="feedback">
          <FormLabel fontWeight="bold" color="brand.700">Feedback</FormLabel>
          <Textarea placeholder="Your feedback" focusBorderColor="brand.400" />
        </FormControl>

        <Button colorScheme="brand" size="lg" width="full" _hover={{ bg: "brand.600" }}>
          Submit Feedback
        </Button>
      </VStack>
    </Box>
  )
}
