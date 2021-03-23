import { Box, Button, Flex, Heading, HStack, Image, Link, Stack, useDisclosure } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import logo from '../images/aea-logo.svg'
import Dump from './Dump'

const MenuItems = ({showMd, isOpen = false}) => 
  <Flex>
    <Stack spacing={6} display={{base: showMd, lg: 'inherit'}} direction={{base: 'column', lg: 'row'}} alignItems={isOpen ? 'start' : 'center'}>
      <Link as={GatsbyLink}  to="/#what-is-aea" smooth={true} offset={-75} duration={200}>What is AEA?</Link>
      <Link as={GatsbyLink}  to="/#creators-and-contributors" smooth={true} offset={-75} duration={200}>Creators + Contributors</Link>
      <Link as={GatsbyLink}  to="/#partners" smooth={true} offset={-75} duration={200}>Partners</Link>
      <Link as={GatsbyLink}  to="/#research" smooth={true} offset={-75} duration={200}>Research</Link>
      <Link as={GatsbyLink} to='/blog' mr={6}>Blog</Link>
      <Button as={Link} href="https://docs.fetch.ai" isExternal display={{base: showMd, lg: 'inherit'}} colorScheme="pink" size='lg'>Read the Docs</Button>
    </Stack>
  </Flex>

const Header = () => {
  const {isOpen, onToggle} = useDisclosure()
  
  const showMd = isOpen ? 'inherit' : 'none'
  
  return (
  <Box as="header" p={6} position="sticky" top={0} bgGradient="linear(to-r, pink.600, gray.700)" zIndex={100}>
    {/* <Dump data={path} /> */}
    <Flex alignItems="center" justifyContent="space-between">
        <Link
          as={GatsbyLink}
          to="/"
          _hover={{ textDecor: 'none' }}
        >
          <Image src={logo} alt="Logo" w={100} />
        </Link>
      <Box display={{base: 'none', lg: 'inherit'}}>
        <MenuItems showMd={showMd} />
      </Box>
      <Button onClick={onToggle}  display={{base: 'inherit', lg: 'none'}} size='lg'>Menu</Button>
    </Flex>
    <Box mt={6} display={{base: showMd, lg: 'none'}}>
      <MenuItems showMd={showMd} isOpen={isOpen} />
    </Box>
  </Box>
)}

export default Header