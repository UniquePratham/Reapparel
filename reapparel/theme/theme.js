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
  fonts: {
    heading: `'Poppins', system-ui, sans-serif`,
    body: `'Poppins', system-ui, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "gray.800",
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
          borderColor: "brand.300",
          color: "brand.700",
          _hover: { bg: "brand.50", borderColor: "brand.500" },
        },
      },
    },
    Input: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
    Select: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
    Badge: {
      baseStyle: { borderRadius: "full", textTransform: "none", fontWeight: 600 },
    },
  },
});

export default theme;