import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Layout from "./components/layout"
import theme from "./theme"
import "./layout.css"
import MDXProvider from "./components/mdx-provider"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        {element}
      </Layout>
    </ChakraProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider>{element}</MDXProvider>
}
