// components/ImpactCalculator.js
// Shows what buying second-hand saves versus buying new, for the current cart
// of wishlisted items. Numbers come from the catalogue, not from thin air.

import { useEffect, useState } from "react";
import { Box, HStack, SimpleGrid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CATALOG } from "../data/catalog";
import { readWishlist } from "../lib/wishlist";

const MotionBox = motion(Box);

export default function ImpactCalculator() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sync = () => {
      const ids = readWishlist();
      setItems(CATALOG.filter((i) => ids.includes(i.id)));
    };
    sync();
    window.addEventListener("reapparel:wishlist", sync);
    return () => window.removeEventListener("reapparel:wishlist", sync);
  }, []);

  if (!items.length) return null;

  const co2 = items.reduce((s, i) => s + i.co2Saved, 0);
  const water = items.reduce((s, i) => s + i.waterSaved, 0);
  const saved = items.reduce((s, i) => s + (i.originalPrice - i.price), 0);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      bg="brand.900"
      color="white"
      borderRadius="xl"
      p={{ base: 5, md: 6 }}
      mb={8}
    >
      <HStack justify="space-between" align="flex-start" mb={4} flexWrap="wrap" gap={2}>
        <Box>
          <Text fontWeight="700" fontSize="lg">
            Your impact so far
          </Text>
          <Text fontSize="sm" color="brand.200">
            {items.length} saved item{items.length === 1 ? "" : "s"} — versus buying new
          </Text>
        </Box>
      </HStack>

      <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
        <Stat>
          <StatNumber fontSize="2xl" color="brand.200">
            {co2.toFixed(1)} kg
          </StatNumber>
          <StatLabel fontSize="xs" color="brand.300">
            CO₂ avoided
          </StatLabel>
        </Stat>
        <Stat>
          <StatNumber fontSize="2xl" color="brand.200">
            {water.toLocaleString()} L
          </StatNumber>
          <StatLabel fontSize="xs" color="brand.300">
            Water saved
          </StatLabel>
        </Stat>
        <Stat>
          <StatNumber fontSize="2xl" color="accent.300">
            ${saved.toFixed(0)}
          </StatNumber>
          <StatLabel fontSize="xs" color="brand.300">
            Saved vs retail
          </StatLabel>
        </Stat>
      </SimpleGrid>
    </MotionBox>
  );
}