// components/ItemCard.js
import Link from "next/link";
import { Box, Image, Text, HStack, Badge, VStack } from "@chakra-ui/react";
import { conditionGrade, conditionLabel } from "../data/catalog";

export default function ItemCard({ item }) {
  const discount = Math.round((1 - item.price / item.originalPrice) * 100);

  return (
    <Link href={`/apparel/${item.id}`} style={{ display: "block" }}>
      <Box
        bg="white"
        borderWidth="1px"
        borderColor="brand.100"
        borderRadius="xl"
        overflow="hidden"
        transition="transform .18s ease, box-shadow .18s ease"
        _hover={{ transform: "translateY(-3px)", boxShadow: "lg" }}
        h="100%"
      >
        <Box position="relative" bg="brand.50">
          <Image
            src={`/items/${item.id}.svg`}
            alt={`${item.brand} ${item.title}`}
            w="100%"
            aspectRatio="4 / 5"
            objectFit="cover"
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
  );
}