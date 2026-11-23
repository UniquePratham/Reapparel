// pages/apparel/[id].js
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ItemCard from "../../components/ItemCard";
import {
  CATALOG,
  categoryLabel,
  conditionGrade,
  conditionLabel,
  getItem,
} from "../../data/catalog";

export async function getStaticPaths() {
  return {
    paths: CATALOG.map((item) => ({ params: { id: item.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = getItem(params.id);
  if (!item) return { notFound: true };

  const related = CATALOG.filter(
    (i) => i.id !== item.id && (i.category === item.category || i.size === item.size)
  ).slice(0, 4);

  return { props: { item, related } };
}

export default function ItemPage({ item, related }) {
  const discount = Math.round((1 - item.price / item.originalPrice) * 100);
  const measurements = Object.entries(item.measurements);

  return (
    <Layout>
      <Container maxW="1200px" py={{ base: 8, md: 12 }}>
        <HStack fontSize="sm" color="gray.500" mb={6} spacing={2}>
          <Link href="/apparel">Shop</Link>
          <Text>/</Text>
          <Text>{categoryLabel(item.category)}</Text>
          <Text>/</Text>
          <Text color="gray.700">{item.title}</Text>
        </HStack>

        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 8, lg: 14 }}>
          <Box
            borderRadius="2xl"
            overflow="hidden"
            borderWidth="1px"
            borderColor="brand.100"
            bg="white"
          >
            <img
              src={`/items/${item.id}.svg`}
              alt={`${item.brand} ${item.title}`}
              style={{ width: "100%", display: "block", aspectRatio: "4 / 5", objectFit: "cover" }}
            />
          </Box>

          <VStack align="stretch" spacing={5}>
            <Box>
              <Text fontSize="sm" color="gray.500" textTransform="uppercase" letterSpacing="0.08em">
                {item.brand}
              </Text>
              <Heading as="h1" size="lg" color="brand.900" letterSpacing="-0.02em" mt={1}>
                {item.title}
              </Heading>
            </Box>

            <HStack spacing={3}>
              <Text fontSize="2xl" fontWeight="700" color="brand.700">
                ${item.price}
              </Text>
              <Text color="gray.400" textDecoration="line-through">
                ${item.originalPrice}
              </Text>
              <Badge colorScheme="green" borderRadius="full" px={2}>
                −{discount}%
              </Badge>
            </HStack>

            <HStack spacing={2} flexWrap="wrap">
              <Badge bg="brand.50" color="brand.800" borderRadius="full" px={3} py={1}>
                {conditionGrade(item.condition)} · {conditionLabel(item.condition)}
              </Badge>
              <Badge bg="gray.100" color="gray.700" borderRadius="full" px={3} py={1}>
                Size {item.size}
              </Badge>
              <Badge bg="gray.100" color="gray.700" borderRadius="full" px={3} py={1}>
                {item.colour}
              </Badge>
            </HStack>

            <Text color="gray.700" lineHeight="1.75">
              {item.description}
            </Text>

            <Divider />

            <Box>
              <Text fontWeight="700" color="brand.900" mb={3}>
                Measurements
              </Text>
              <SimpleGrid columns={2} spacing={3}>
                {measurements.map(([key, value]) => (
                  <HStack key={key} justify="space-between" fontSize="sm">
                    <Text color="gray.600" textTransform="capitalize">
                      {key}
                    </Text>
                    <Text fontWeight="600" color="gray.800">
                      {value} cm
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>

            <Divider />

            <Box>
              <Text fontWeight="700" color="brand.900" mb={2}>
                Impact
              </Text>
              <HStack spacing={6} fontSize="sm" color="gray.600">
                <Text>
                  <Text as="span" fontWeight="700" color="brand.700">
                    {item.co2Saved} kg
                  </Text>{" "}
                  CO₂ avoided
                </Text>
                <Text>
                  <Text as="span" fontWeight="700" color="brand.700">
                    {item.waterSaved.toLocaleString()} L
                  </Text>{" "}
                  water saved
                </Text>
              </HStack>
            </Box>

            <Divider />

            <HStack justify="space-between" fontSize="sm" color="gray.600">
              <Text>
                Sold by{" "}
                <Text as="span" fontWeight="600" color="gray.800">
                  {item.seller}
                </Text>{" "}
                · {item.city}
              </Text>
              <Text>Listed {item.listedAt}</Text>
            </HStack>

            <HStack spacing={3} pt={2}>
              <Button size="lg" colorScheme="brand" flex={1}>
                Buy this item
              </Button>
              <Button size="lg" variant="outline" colorScheme="brand">
                Message seller
              </Button>
            </HStack>

            <Text fontSize="xs" color="gray.500">
              Fibre: {item.fibre}. Returns accepted within 14 days if the item does
              not match its listed condition.
            </Text>
          </VStack>
        </Grid>

        {related.length > 0 && (
          <Box mt={20}>
            <Heading as="h2" size="md" color="brand.900" mb={6}>
              You might also like
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={5}
            >
              {related.map((r) => (
                <ItemCard key={r.id} item={r} />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Layout>
  );
}