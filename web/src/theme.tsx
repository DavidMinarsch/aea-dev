import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        fontWeight: "400",
        fontSize: 'lg'
      },
    },
  },
  colors: {
    gray: {
      50: '#f0e5ff',
      100: '#cdb5fd',
      200: '#a784f9',
      300: '#7f53f6',
      400: '#5523f4',
      500: '#370cda',
      600: '#2508aa',
      700: '#150579',
      800: '#09024a',
      900: '#05001c',
    },
    pink: {
      50: '#ffe2ff',
      100: '#fcb1ff',
      200: '#f67fff',
      300: '#f24cff',
      400: '#ed1aff',
      500: '#d300e6',
      600: '#a400b4',
      700: '#760081',
      800: '#48004f',
      900: '#1a001f',
    }
  },
  fonts: {
    heading: `'GT Haptik', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `'GT Haptik', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
  },
})

export default theme