import { Box, Button, Flex, Heading, HStack, Image, Link, Stack } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import logo from '../images/aea-logo.svg'

const Header = ({ siteTitle }) => (
  <Box as="header" py={6}>
    <Flex alignItems="center" justifyContent="space-between">
      <Flex>
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
          _hover={{ textDecor: 'none' }}
          mr={6}
        >
          <img src={logo} alt="Logo" />
        </Link>
        <HStack spacing={6}>
          <Link>What is AEA?</Link>
          <Link>Creators & Contributors</Link>
          <Link>Partners</Link>
          <Link>Research</Link>
          <Link>Blog</Link>
        </HStack>
      </Flex>
      <Button size='lg'>Read the Docs</Button>
    </Flex>
  </Box>
)

export default Header