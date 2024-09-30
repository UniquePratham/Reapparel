// pages/apparel/[id].js
import { useEffect, useState } from 'react'
import { Box, Image, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function ApparelDetails() {
  const router = useRouter()
  const { id } = router.query
  const [item, setItem] = useState(null)

  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setItem(response.data))
        .catch(error => console.error('Error fetching item:', error))
    }
  }, [id])

  if (!item) return <Text>Loading...</Text>

  return (
    <Box maxW="600px" mx="auto" py={10} px={6}>
      <Image src={item.image} alt={item.title} />
      <Text fontSize="2xl" fontWeight="bold" color="brand.800" mt={4}>{item.title}</Text>
      <Text fontSize="lg" color="brand.600" mt={2}>${item.price}</Text>
      <Text mt={4}>{item.description}</Text>
      <Button mt={6} colorScheme="brand">Add to Favorites</Button>
    </Box>
  )
}
