// pages/apparel/index.js
import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ItemCard from "../../components/ItemCard";
import { CATALOG, CATEGORIES, CONDITIONS, SIZES } from "../../data/catalog";

const SORTS = [
  { id: "newest", label: "Newest first" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "discount", label: "Biggest saving" },
];

export default function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [condition, setCondition] = useState("all");
  const [size, setSize] = useState("all");
  const [sort, setSort] = useState("newest");

  const results = useMemo(() => {
    let items = [...CATALOG];

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.brand.toLowerCase().includes(q) ||
          i.fibre.toLowerCase().includes(q) ||
          i.colour.toLowerCase().includes(q)
      );
    }
    if (category !== "all") items = items.filter((i) => i.category === category);
    if (condition !== "all") items = items.filter((i) => i.condition === condition);
    if (size !== "all") items = items.filter((i) => i.size === size);

    switch (sort) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        items.sort(
          (a, b) => 1 - a.price / a.originalPrice - (1 - b.price / b.originalPrice)
        );
        break;
      default:
        items.sort((a, b) => (a.listedAt < b.listedAt ? 1 : -1));
    }
    return items;
  }, [query, category, condition, size, sort]);

  const reset = () => {
    setQuery("");
    setCategory("all");
    setCondition("all");
    setSize("all");
    setSort("newest");
  };

  return (
    <Layout>
      <Container maxW="1200px" py={{ base: 10, md: 14 }}>
        <Heading as="h1" size="lg" color="brand.900" letterSpacing="-0.02em">
          Shop
        </Heading>
        <Text color="gray.600" mt={1} mb={8}>
          {results.length} of {CATALOG.length} items
        </Text>

        <Box
          bg="white"
          borderWidth="1px"
          borderColor="brand.100"
          borderRadius="xl"
          p={4}
          mb={8}
        >
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr 1fr" }} gap={3}>
            <Input
              placeholder="Search brand, item, fibre or colour"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              focusBorderColor="brand.400"
            />
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All categories</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </Select>
            <Select value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option value="all">Any condition</option>
              {CONDITIONS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </Select>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="all">Any size</option>
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              <option value="One size">One size</option>
            </Select>
            <Select value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </Select>
          </Grid>

          <Flex justify="space-between" align="center" mt={3}>
            <Wrap spacing={2}>
              {category !== "all" && (
                <WrapItem>
                  <Button size="xs" variant="outline" onClick={() => setCategory("all")}>
                    {CATEGORIES.find((c) => c.id === category)?.label} ✕
                  </Button>
                </WrapItem>
              )}
              {condition !== "all" && (
                <WrapItem>
                  <Button size="xs" variant="outline" onClick={() => setCondition("all")}>
                    {CONDITIONS.find((c) => c.id === condition)?.label} ✕
                  </Button>
                </WrapItem>
              )}
              {size !== "all" && (
                <WrapItem>
                  <Button size="xs" variant="outline" onClick={() => setSize("all")}>
                    Size {size} ✕
                  </Button>
                </WrapItem>
              )}
            </Wrap>
            <Button size="xs" variant="ghost" onClick={reset}>
              Reset
            </Button>
          </Flex>
        </Box>

        {results.length === 0 ? (
          <Box
            bg="white"
            borderWidth="1px"
            borderColor="brand.100"
            borderRadius="xl"
            py={20}
            textAlign="center"
          >
            <Text fontWeight="600" color="brand.900">
              Nothing matches those filters
            </Text>
            <Text fontSize="sm" color="gray.600" mt={1} mb={4}>
              Try widening the size or condition.
            </Text>
            <Button size="sm" colorScheme="brand" onClick={reset}>
              Clear filters
            </Button>
          </Box>
        ) : (
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={5}
          >
            {results.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
}