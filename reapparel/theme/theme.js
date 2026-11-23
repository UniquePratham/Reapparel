// theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
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
    },
  },
  components: {
    Button: {
      baseStyle: { borderRadius: "lg", fontWeight: 600 },
    },
    Input: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
    Select: {
      defaultProps: { focusBorderColor: "brand.400" },
    },
  },
});

export default theme;