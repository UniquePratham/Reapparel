// pages/size-guide.js
import {
  Box,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

const ROWS = [
  { size: "XS", chest: "84–88", waist: "66–70", hip: "88–92" },
  { size: "S", chest: "88–94", waist: "70–76", hip: "92–98" },
  { size: "M", chest: "94–102", waist: "76–84", hip: "98–104" },
  { size: "L", chest: "102–110", waist: "84–92", hip: "104–112" },
  { size: "XL", chest: "110–118", waist: "92–100", hip: "112–120" },
  { size: "XXL", chest: "118–126", waist: "100–108", hip: "120–128" },
];

export default function SizeGuide() {
  return (
    <Layout>
      <Container maxW="820px" py={{ base: 10, md: 14 }}>
        <Heading as="h1" size="lg" color="brand.900" letterSpacing="-0.02em">
          Size guide
        </Heading>
        <Text color="gray.600" mt={1} mb={8}>
          Every listing carries its own measurements. Use this table as a starting
          point, then check the item page — the tape measure always wins.
        </Text>

        <Alert status="info" borderRadius="lg" mb={6}>
          <AlertIcon />
          Measurements are body measurements in centimetres, not garment
          measurements. Lay a favourite garment flat and double the width for a
          quick chest check.
        </Alert>

        <Box bg="white" borderWidth="1px" borderColor="brand.100" borderRadius="xl" overflow="hidden">
          <Table>
            <Thead bg="brand.50">
              <Tr>
                <Th>Size</Th>
                <Th isNumeric>Chest (cm)</Th>
                <Th isNumeric>Waist (cm)</Th>
                <Th isNumeric>Hip (cm)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ROWS.map((r) => (
                <Tr key={r.size}>
                  <Td fontWeight="600" color="brand.800">
                    {r.size}
                  </Td>
                  <Td isNumeric>{r.chest}</Td>
                  <Td isNumeric>{r.waist}</Td>
                  <Td isNumeric>{r.hip}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Text fontSize="sm" color="gray.500" mt={6}>
          Between sizes? Size up for outerwear and knitwear, down for jersey.
        </Text>
      </Container>
    </Layout>
  );
}