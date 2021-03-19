import { Text,Box, Button, Flex, Heading, HStack, Image, Link, Stack } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import logo from '../images/aea-logo.svg'
import {Link as ScrollLink} from 'react-scroll'

const Header = ({ siteTitle }) => (
  <Box as="header" p={6} position="sticky" top={0} bgGradient="linear(to-r, pink.600, gray.700)">
    <Flex alignItems="center" justifyContent="space-between">
      <Flex>
        <Link
          as={GatsbyLink}
          to="/"
          color="white"
          _hover={{ textDecor: 'none' }}
          mr={6}
        >
          <Image src={logo} alt="Logo" w={100} />
        </Link>
        <HStack spacing={6}>
          <Link as={ScrollLink}  to="what-is-aea" smooth={true} offset={-75} duration={200}>What is AEA?</Link>
          <Link as={ScrollLink}  to="creators" smooth={true} offset={-75} duration={200}>Creators + Contributors</Link>
          <Link as={ScrollLink}  to="partners" smooth={true} offset={-75} duration={200}>Partners</Link>
          <Link as={ScrollLink}  to="research" smooth={true} offset={-75} duration={200}>Research</Link>
          <Link as={GatsbyLink} to='/blog'>Blog</Link>
        </HStack>
      </Flex>
      <Button colorScheme="pink" size='lg'>Read the Docs</Button>
    </Flex>
  </Box>
)

export default Header