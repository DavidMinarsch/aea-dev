import { Text, Flex, HStack, Box, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import logo from '../images/aea-logo.svg'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <Box as="footer" py={12} textAlign="center">
    <Flex justifyContent="space-between" alignItems='center'>
      <Box>
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
            <Text>© {new Date().getFullYear()}</Text>
            <Link>Blog</Link>
            <Link>Docs</Link>
          </HStack>
        </Flex>
      </Box>
      <HStack spacing={6}>
        <Link><FaTwitter /></Link>
        <Link><FaGithub /></Link>
      </HStack>
    </Flex>
  </Box>
)

export default Footer