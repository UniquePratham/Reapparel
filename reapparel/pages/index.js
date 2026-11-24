// pages/index.js
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import ItemCard from "../components/ItemCard";
import { CATALOG } from "../data/catalog";

const STEPS = [
  {
    n: "01",
    title: "List it",
    body: "Photograph the garment, add measurements and pick a condition grade. Takes about four minutes.",
  },
  {
    n: "02",
    title: "We grade it",
    body: "Every item is checked against a written condition scale, so buyers know exactly what they are getting.",
  },
  {
    n: "03",
    title: "It sells",
    body: "Buyers browse by size, fibre and condition. You ship once, in recycled packaging.",
  },
];

export default function Home() {
  const featured = CATALOG.slice(0, 4);
  const totalCo2 = CATALOG.reduce((sum, i) => sum + i.co2Saved, 0);
  const totalWater = CATALOG.reduce((sum, i) => sum + i.waterSaved, 0);

  return (
    <Layout>
      <Box bg="surface" borderBottomWidth="1px" borderColor="border">
        <Container maxW="1200px" py={{ base: 14, md: 24 }}>
          <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={12} align="center">
            <VStack align="flex-start" spacing={6}>
              <HStack
                spacing={2}
                bg="surfaceAlt"
                color="navActiveText"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
              >
                <Box w="6px" h="6px" borderRadius="full" bg="brand.500" />
                <Text>Second-hand, first-rate</Text>
              </HStack>

              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.1"
                letterSpacing="-0.03em"
                color="heading"
              >
                Good clothes deserve a second life.
              </Heading>

              <Text fontSize={{ base: "md", md: "lg" }} color="mutedText" maxW="52ch">
                Reapparel is a marketplace for pre-owned clothing that is graded,
                measured and honestly described. Buy less, choose better, keep it
                in circulation.
              </Text>

              <HStack spacing={3} pt={2}>
                <Link href="/apparel">
                  <Button size="lg" colorScheme="brand">
                    Shop the collection
                  </Button>
                </Link>
                <Link href="/submit">
                  <Button size="lg" variant="outline" colorScheme="brand">
                    Sell an item
                  </Button>
                </Link>
              </HStack>

              <SimpleGrid columns={3} spacing={8} pt={6} w="100%">
                <Stat>
                  <StatNumber fontSize="2xl" color="navActiveText">
                    {CATALOG.length}
                  </StatNumber>
                  <StatLabel fontSize="xs" color="faintText">
                    Items listed
                  </StatLabel>
                </Stat>
                <Stat>
                  <StatNumber fontSize="2xl" color="navActiveText">
                    {Math.round(totalCo2)} kg
                  </StatNumber>
                  <StatLabel fontSize="xs" color="faintText">
                    CO₂ avoided
                  </StatLabel>
                </Stat>
                <Stat>
                  <StatNumber fontSize="2xl" color="navActiveText">
                    {Math.round(totalWater / 1000)}k L
                  </StatNumber>
                  <StatLabel fontSize="xs" color="faintText">
                    Water saved
                  </StatLabel>
                </Stat>
              </SimpleGrid>
            </VStack>

            <Box
              borderRadius="2xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="border"
              bg="surfaceAlt"
            >
              <Grid templateColumns="1fr 1fr" gap={2} p={2}>
                {featured.map((item) => (
                  <Box key={item.id} borderRadius="xl" overflow="hidden" bg="surface">
                    <img
                      src={`/items/${item.id}.png`}
                      alt={`${item.brand} ${item.title}`}
                      className="product-shot"
                      style={{ width: "100%", display: "block", aspectRatio: "1 / 1", objectFit: "contain" }}
                    />
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Container maxW="1200px" py={{ base: 14, md: 20 }}>
        <Flex justify="space-between" align="flex-end" mb={8}>
          <Box>
            <Heading as="h2" size="lg" color="heading" letterSpacing="-0.02em">
              Recently listed
            </Heading>
            <Text color="mutedText" mt={1}>
              Graded, measured and ready to ship.
            </Text>
          </Box>
          <Link href="/apparel">
            <Button variant="ghost" colorScheme="brand" size="sm">
              View all →
            </Button>
          </Link>
        </Flex>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={5}
        >
          {featured.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} />
          ))}
        </Grid>
      </Container>

      <Box bg="surface" borderYWidth="1px" borderColor="border">
        <Container maxW="1200px" py={{ base: 14, md: 20 }}>
          <Heading as="h2" size="lg" color="heading" mb={2} letterSpacing="-0.02em">
            How Reapparel works
          </Heading>
          <Text color="mutedText" mb={10}>
            Three steps, no guesswork.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {STEPS.map((step) => (
              <Box key={step.n}>
                <Text fontSize="sm" fontWeight="700" color="brand.500" mb={2}>
                  {step.n}
                </Text>
                <Text fontWeight="700" color="heading" mb={1}>
                  {step.title}
                </Text>
                <Text fontSize="sm" color="mutedText" lineHeight="1.7">
                  {step.body}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
}