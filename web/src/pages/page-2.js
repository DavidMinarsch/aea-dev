import * as React from "react"
import { Link } from "gatsby"
import { Link as ChakraLink, Heading, Text } from '@chakra-ui/react'

import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Heading>Hi from the second page</Heading>
    <Text fontSize="xl" my={5}>
      Welcome to page 2
      </Text>
    <ChakraLink
      as={Link}
      to="/"
      color="purple.500"
      fontSize="xl"
      textDecor="underline"
    >
      Go back to the homepage
      </ChakraLink>
  </>
)

export default SecondPage
