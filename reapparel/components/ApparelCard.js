// components/ApparelCard.js
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionBox = motion(Box)

export default function ApparelCard({ item }) {
  return (
    <MotionBox
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      whileHover={{ scale: 1.05 }}
      transition="0.3s ease"
      bg="white"
      boxShadow="md"
    >
      <Image src={item.image} alt={item.title} />
      <Text mt={2} fontSize="xl" fontWeight="bold" color="brand.800">{item.title}</Text>
      <Flex justify="space-between" align="center" mt={2}>
        <Text fontSize="md" color="brand.600">${item.price}</Text>
        <Link href={`/apparel/${item.id}`} passHref>
          <Button colorScheme="brand" size="sm">Details</Button>
        </Link>
      </Flex>
    </MotionBox>
  )
}
