// components/ItemCard.js
import Link from "next/link";
import { Box, Image, Text, HStack, Badge, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { conditionGrade, conditionLabel } from "../data/catalog";
import WishlistButton from "./WishlistButton";

const MotionBox = motion(Box);

export default function ItemCard({ item, index = 0 }) {
  const discount = Math.round((1 - item.price / item.originalPrice) * 100);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      h="100%"
    >
      <Link href={`/apparel/${item.id}`} style={{ display: "block", height: "100%" }}>
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="brand.100"
          borderRadius="xl"
          overflow="hidden"
          h="100%"
          transition="box-shadow .2s ease, border-color .2s ease"
          _hover={{ boxShadow: "xl", borderColor: "brand.300" }}
        >
          <Box position="relative" bg="brand.50" p={4} role="group">
            <Image
              src={`/items/${item.id}.png`}
              alt={`${item.brand} ${item.title}`}
              w="100%"
              aspectRatio="1 / 1"
              objectFit="contain"
              transition="transform .35s ease"
              _groupHover={{ transform: "scale(1.04)" }}
            />
            <Badge
              position="absolute"
              top={3}
              left={3}
              bg="white"
              color="brand.800"
              borderRadius="full"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="700"
              boxShadow="sm"
            >
              {conditionGrade(item.condition)} · {conditionLabel(item.condition)}
            </Badge>
            <Badge
              position="absolute"
              top={3}
              right={3}
              bg="brand.500"
              color="white"
              borderRadius="full"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="700"
            >
              −{discount}%
            </Badge>
            <Box position="absolute" bottom={2} right={2} bg="white" borderRadius="full" boxShadow="sm">
              <WishlistButton itemId={item.id} />
            </Box>
          </Box>

          <VStack align="stretch" spacing={1} p={4}>
            <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="0.06em">
              {item.brand}
            </Text>
            <Text fontWeight="600" color="brand.900" noOfLines={1}>
              {item.title}
            </Text>
            <HStack justify="space-between" pt={1}>
              <HStack spacing={2}>
                <Text fontWeight="700" color="brand.700">
                  ${item.price}
                </Text>
                <Text fontSize="sm" color="gray.400" textDecoration="line-through">
                  ${item.originalPrice}
                </Text>
              </HStack>
              <Text fontSize="xs" color="gray.500">
                {item.size}
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Link>
    </MotionBox>
  );
}