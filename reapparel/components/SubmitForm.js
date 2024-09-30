// components/SubmitForm.js
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react'

export default function SubmitForm() {
  return (
    <Box maxW="600px" mx="auto" py={10} px={6} boxShadow="lg" rounded="lg" bg="white">
      <VStack spacing={6}>
        <FormControl id="name">
          <FormLabel fontWeight="bold" color="brand.700">Apparel Name</FormLabel>
          <Input type="text" placeholder="Enter apparel name" focusBorderColor="brand.400" />
        </FormControl>

        <FormControl id="condition">
          <FormLabel fontWeight="bold" color="brand.700">Condition</FormLabel>
          <Select placeholder="Select condition" focusBorderColor="brand.400">
            <option value="new">New</option>
            <option value="worn">Worn</option>
            <option value="damaged">Damaged</option>
          </Select>
        </FormControl>

        <FormControl id="category">
          <FormLabel fontWeight="bold" color="brand.700">Category</FormLabel>
          <Select placeholder="Select category" focusBorderColor="brand.400">
            <option value="shirt">Shirt</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
          </Select>
        </FormControl>

        <FormControl id="action">
          <FormLabel fontWeight="bold" color="brand.700">Action</FormLabel>
          <Select placeholder="Select action" focusBorderColor="brand.400">
            <option value="donation">Donation</option>
            <option value="recycling">Recycling</option>
            <option value="disposal">Disposal</option>
          </Select>
        </FormControl>

        <Button colorScheme="brand" size="lg" width="full" _hover={{ bg: "brand.600" }}>
          Submit
        </Button>
      </VStack>
    </Box>
  )
}
