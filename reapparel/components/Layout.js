// components/Layout.js
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Flex, HStack, Text, Button, IconButton, useColorMode } from "@chakra-ui/react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/apparel", label: "Shop" },
  { href: "/submit", label: "Sell" },
  { href: "/faq", label: "How it works" },
];

export default function Layout({ children }) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh" bg="brand.50">
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={20}
        bg="white"
        borderBottomWidth="1px"
        borderColor="brand.100"
      >
        <Container maxW="1200px">
          <Flex h="64px" align="center" justify="space-between">
            <Link href="/" aria-label="Reapparel home">
              <HStack spacing={2}>
                <Box
                  w="28px"
                  h="28px"
                  borderRadius="8px"
                  bg="brand.500"
                  display="grid"
                  placeItems="center"
                  color="white"
                  fontWeight="700"
                  fontSize="sm"
                >
                  R
                </Box>
                <Text fontWeight="700" fontSize="lg" color="brand.900" letterSpacing="-0.02em">
                  Reapparel
                </Text>
              </HStack>
            </Link>

            <HStack spacing={1} display={{ base: "none", md: "flex" }}>
              {NAV.map((item) => {
                const active = router.pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      fontWeight={active ? "700" : "500"}
                      color={active ? "brand.700" : "gray.600"}
                      bg={active ? "brand.50" : "transparent"}
                      _hover={{ bg: "brand.50" }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </HStack>

            <HStack spacing={2}>
              <IconButton
                aria-label="Toggle colour mode"
                size="sm"
                variant="ghost"
                onClick={toggleColorMode}
                icon={<Text fontSize="md">{colorMode === "dark" ? "☀" : "☾"}</Text>}
              />
              <Link href="/submit">
                <Button size="sm" colorScheme="brand">
                  List an item
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box as="main">{children}</Box>

      <Box as="footer" borderTopWidth="1px" borderColor="brand.100" bg="white" mt={20}>
        <Container maxW="1200px" py={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={4}
          >
            <Box>
              <Text fontWeight="700" color="brand.900">
                Reapparel
              </Text>
              <Text fontSize="sm" color="gray.600">
                Reimagine. Renew. Rewear.
              </Text>
            </Box>
            <HStack spacing={6} fontSize="sm" color="gray.600">
              <Link href="/faq">How it works</Link>
              <Link href="/feedback">Feedback</Link>
              <Link href="/submit">Sell</Link>
            </HStack>
          </Flex>
          <Text mt={6} fontSize="xs" color="gray.500">
            Every listing is graded, measured and photographed before it goes live.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}