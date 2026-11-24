// pages/wishlist.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ItemCard from "../components/ItemCard";
import ImpactCalculator from "../components/ImpactCalculator";
import { CATALOG } from "../data/catalog";
import { readWishlist } from "../lib/wishlist";

export default function WishlistPage() {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      const ids = readWishlist();
      setItems(CATALOG.filter((i) => ids.includes(i.id)));
      setReady(true);
    };
    sync();
    window.addEventListener("reapparel:wishlist", sync);
    return () => window.removeEventListener("reapparel:wishlist", sync);
  }, []);

  return (
    <Layout>
      <Container maxW="1200px" py={{ base: 10, md: 14 }}>
        <Heading as="h1" size="lg" color="brand.900" letterSpacing="-0.02em">
          Saved items
        </Heading>
        <Text color="gray.600" mt={1} mb={8}>
          {ready ? `${items.length} item${items.length === 1 ? "" : "s"} saved on this device` : "Loading…"}
        </Text>

        <ImpactCalculator />

        {ready && items.length === 0 ? (
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="brand.100"
            borderRadius="xl"
            py={20}
            textAlign="center"
          >
            <Text fontWeight="600" color="brand.900">
              Nothing saved yet
            </Text>
            <Text fontSize="sm" color="gray.600" mt={1} mb={4}>
              Tap the heart on any item to keep it here.
            </Text>
            <Link href="/apparel">
              <Button colorScheme="brand" size="sm">
                Browse the collection
              </Button>
            </Link>
          </Box>
        ) : (
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={5}
          >
            {items.map((item, index) => (
              <ItemCard key={item.id} item={item} index={index} />
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
}