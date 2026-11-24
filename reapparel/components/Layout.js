// components/Layout.js
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Flex, HStack, Text, Button, IconButton, useColorMode } from "@chakra-ui/react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/apparel", label: "Shop" },
  { href: "/wishlist", label: "Saved" },
  { href: "/submit", label: "Sell" },
  { href: "/faq", label: "How it works" },
];

export default function Layout({ children }) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh" bg="surfaceAlt">
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={20}
        bg="surface"
        borderBottomWidth="1px"
        borderColor="border"
      >
        <Container maxW="1200px">
          <Flex h="64px" align="center" justify="space-between">
            <Link href="/" aria-label="Reapparel home">
              <HStack spacing={2}>
                <Box
                  className="logo-chip"
                  display="grid"
                  placeItems="center"
                  w="38px"
                  h="38px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Box
                    as="img"
                    src="/logo-icon.png"
                    alt=""
                    w="34px"
                    h="34px"
                    objectFit="contain"
                  />
                </Box>
                <Text fontWeight="700" fontSize="lg" color="heading" letterSpacing="-0.02em">
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
                      color={active ? "navActiveText" : "navText"}
                      bg={active ? "navActiveBg" : "transparent"}
                      _hover={{ bg: "hoverBg", color: "navActiveText" }}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </HStack>

            <HStack spacing={2}>
              <IconButton
                aria-label={
                  colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
                title={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                size="sm"
                variant="ghost"
                color="navText"
                _hover={{ bg: "hoverBg", color: "navActiveText" }}
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

      <Box as="footer" borderTopWidth="1px" borderColor="border" bg="surface" mt={20}>
        <Container maxW="1200px" py={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={4}
          >
            <Box>
              <Text fontWeight="700" color="heading">
                Reapparel
              </Text>
              <Text fontSize="sm" color="mutedText">
                Reimagine. Renew. Rewear.
              </Text>
            </Box>
            <HStack spacing={6} fontSize="sm" color="mutedText">
              <Link href="/faq">How it works</Link>
              <Link href="/size-guide">Size guide</Link>
              <Link href="/wishlist">Saved</Link>
              <Link href="/feedback">Feedback</Link>
              <Link href="/submit">Sell</Link>
            </HStack>
          </Flex>
          <Text mt={6} fontSize="xs" color="faintText">
            Every listing is graded, measured and photographed before it goes live.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}