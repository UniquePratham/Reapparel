// pages/_app.js
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}