import { Text, Flex, HStack, Box, Link, Image } from '@chakra-ui/react'
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import logo from '../images/aea-logo.svg'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <Box as="footer" px={6} py={12} textAlign="center"  bgGradient="linear(to-l, pink.600, gray.700)">
    <Flex justifyContent="space-between" alignItems='center'>
      <Box>
        <Flex>
          <HStack spacing={6}>
            <Text>© AEA {new Date().getFullYear()}</Text>
            <Link as={GatsbyLink} to='/blog'>Blog</Link>
            <Link href="https://docs.fetchai.com" isExternal href='https://fetch.ai'>Docs</Link>
          </HStack>
        </Flex>
      </Box>
      <HStack spacing={6}>
        {/* <Link to="https://twitter.com/"><FaTwitter /></Link> */}
        <Link isExternal href="https://github.com/fetchai/agents-aea"><FaGithub /></Link>
          <Link
            as={GatsbyLink}
            to="/"
            color="white"
            _hover={{ textDecor: 'none' }}
            mr={6}
          >
            <Image src={logo} alt="Logo" w={100} />
          </Link>
      </HStack>
    </Flex>
  </Box>
)

export default Footer