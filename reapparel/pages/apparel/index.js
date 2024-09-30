// pages/apparel/index.js
import { useEffect, useState } from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import ApparelCard from '../../components/ApparelCard'
import { fetchProducts } from '../../utils/api' // Import the fetchProducts utility

export default function ApparelList() {
  const [apparel, setApparel] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getApparel = async () => {
      try {
        const products = await fetchProducts('men clothing'); // Specify category here
        setApparel(products);
      } catch (error) {
        console.error('Error fetching apparel:', error);
      } finally {
        setLoading(false);
      }
    }

    getApparel();
  }, [])

  if (loading) return <Text>Loading...</Text>

  return (
    <Box maxW="1200px" mx="auto" py={10} px={6}>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {apparel.map(item => (
          <ApparelCard key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  )
}
