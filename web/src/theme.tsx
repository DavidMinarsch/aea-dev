import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontWeight: "600",
        fontSize: 'lg'
      },
    },
  },
  fonts: {
    heading: `'GT Haptik', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `'GT Haptik', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
  },
})

export default theme