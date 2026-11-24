// theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#EAF7EE",
      100: "#CDEBD6",
      200: "#A8DCB8",
      300: "#7BCB97",
      400: "#4FB878",
      500: "#2E9E5B",
      600: "#248049",
      700: "#1C663A",
      800: "#154D2C",
      900: "#0E351E",
    },
    accent: {
      50: "#FFF8E6",
      100: "#FFEFC2",
      200: "#FFE28F",
      300: "#FFD45C",
      400: "#FFC72E",
      500: "#F5B400",
      600: "#CC9500",
      700: "#A37700",
      800: "#7A5900",
      900: "#523C00",
    },
  },
  // Semantic tokens resolve per colour mode, so components never hardcode a
  // light-only value. Every surface, border and text colour in the app reads
  // from these instead of "white" / "gray.600".
  semanticTokens: {
    colors: {
      pageBg: { default: "brand.50", _dark: "#0B1A12" },
      surface: { default: "white", _dark: "#12261B" },
      surfaceAlt: { default: "brand.50", _dark: "#183324" },
      surfaceSunken: { default: "gray.50", _dark: "#0E2016" },
      border: { default: "brand.100", _dark: "#234A34" },
      borderStrong: { default: "brand.200", _dark: "#2E5C42" },
      heading: { default: "brand.900", _dark: "brand.100" },
      bodyText: { default: "gray.700", _dark: "gray.200" },
      mutedText: { default: "gray.600", _dark: "gray.400" },
      faintText: { default: "gray.500", _dark: "gray.500" },
      chipBg: { default: "gray.100", _dark: "#1E3D2B" },
      chipText: { default: "gray.700", _dark: "gray.200" },
      brandChipBg: { default: "brand.50", _dark: "#1B3D29" },
      brandChipText: { default: "brand.800", _dark: "brand.200" },
      navActiveBg: { default: "brand.50", _dark: "#1B3D29" },
      navActiveText: { default: "brand.700", _dark: "brand.200" },
      navText: { default: "gray.600", _dark: "gray.300" },
      hoverBg: { default: "brand.50", _dark: "#1B3D29" },
      skeletonFrom: { default: "#e6f2ea", _dark: "#16301F" },
      skeletonTo: { default: "#f4fbf6", _dark: "#1D3B28" },
    },
  },
  fonts: {
    heading: `'Poppins', system-ui, sans-serif`,
    body: `'Poppins', system-ui, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "pageBg",
        color: "bodyText",
      },
      a: {
        _hover: { textDecoration: "none" },
      },
      "::selection": {
        bg: "brand.200",
        color: "brand.900",
      },
    },
  },
  components: {
    Button: {
      baseStyle: { borderRadius: "lg", fontWeight: 600 },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.600", transform: "translateY(-1px)" },
          _active: { bg: "brand.700" },
          transition: "all .18s ease",
        },
        outline: {
          borderColor: "borderStrong",
          color: "brandChipText",
          _hover: { bg: "hoverBg", borderColor: "brand.500" },
        },
        ghost: {
          color: "navText",
          _hover: { bg: "hoverBg", color: "navActiveText" },
        },
      },
    },
    Input: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
    Select: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
    Textarea: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
    Badge: {
      baseStyle: { borderRadius: "full", textTransform: "none", fontWeight: 600 },
    },
    Accordion: {
      baseStyle: {
        container: { borderColor: "border" },
        button: {
          _hover: { bg: "hoverBg" },
          _focus: { boxShadow: "0 0 0 3px rgba(46,158,91,.35)" },
        },
        panel: { color: "mutedText" },
      },
    },
    Table: {
      baseStyle: {
        th: { borderColor: "border" },
        td: { borderColor: "border" },
      },
    },
    Divider: {
      baseStyle: { borderColor: "border" },
    },
  },
});

export default theme;