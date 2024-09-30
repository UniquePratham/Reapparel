// theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50', // Main green
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20', // Dark green from the logo
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'lg', // Rounded buttons
      },
    },
  },
})

export default theme
