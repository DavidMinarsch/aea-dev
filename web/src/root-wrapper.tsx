import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/layout'
import theme from './theme'
import './layout.css'

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}