// pages/index.js
import { Box, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <Box
      textAlign="center"
      py={20}
      px={6}
      bg="brand.50"
      minH="100vh"
      bgImage="url('bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      width="100vw"
    >
      <MotionBox
        display="inline-block"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        <Image src="/logo.png" alt="Reapparel Logo" boxSize="150px" mx="auto" />
      </MotionBox>

      <Heading as="h1" size="2xl" mt={6} color="brand.900">
        Reapparel
      </Heading>
      <Text fontSize="xl" mt={4} color="brand.700">
        Reimagine. Renew. Rewear.
      </Text>

      <Stack direction="row" spacing={4} mt={10} justify="center">
        <Link href="/submit" passHref>
          <Button colorScheme="brand" size="lg" _hover={{ bg: "brand.600" }}>
            Submit Your Apparel
          </Button>
        </Link>
        <Link href="/apparel" passHref>
          <Button
            variant="outline"
            colorScheme="brand"
            size="lg"
            _hover={{ bg: "brand.100" }}
          >
            View Available Clothing
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
