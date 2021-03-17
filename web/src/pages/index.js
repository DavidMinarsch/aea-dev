import * as React from "react"
import { Heading, Text, Box, Image, Link as ChakraLink, Button, Center, Divider, SimpleGrid, Flex } from "@chakra-ui/react"

import SEO from "../components/seo"
import PlaceholderTeamItem from "../components/placeholder-team-item"
import fetchLogo from '../images/fetch-logo.png'
import centralityLogo from '../images/centrality-logo.png'
import { FaTwitter } from "react-icons/fa"


const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Box as="section" py={12} h="50vh">
      <Center h="100%">
        <Box textAlign="center">
          <Heading mb={6} size="2xl">Build the Foundations<br />of the Machine Economy</Heading>
          <Button size="lg">Read the Docs</Button>
        </Box>
      </Center>
    </Box>
    <Box as="section" py={12}>
      <Center h="100%">
        <Box>
          <Box textAlign="center" mb={12}>
            <Heading mb={6} size="lg" fontStyle="italic">What is AEA?</Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          <SimpleGrid columns={2} spacing={10} alignItems="center">
            <Text maxW="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius a rhoncus imperdiet quis morbi nulla. Nisl massa vitae nec sit magna curabitur. Fringilla lacus orci eget aliquet in augue. Morbi felis massa tincidunt dolor, amet orci eget vehicula aenean. Enim velit non pretium, nec pharetra, arcu. Enim dignissim convallis venenatis dolor tristique posuere et sit nisl. </Text>
            <Box backgroundColor="gray.100" borderRadius={10} textAlign="center" h="400"><Center h="100%"><Text>Illustration</Text></Center></Box>
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
    <Box as="section" py={12}>
      <Center>
        <Box mb={12}>
          <Box textAlign="center">
            <Heading mb={6} size="lg" fontStyle="italic">Creators</Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          <SimpleGrid columns={3} spacing={10}>
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
          </SimpleGrid>
        </Box>
      </Center>
      <Center>
        <Box mb={12}>
          <Box textAlign="center">
            <Heading mb={6} size="lg" fontStyle="italic">Contributors</Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          <SimpleGrid columns={3} spacing={10}>
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
            <PlaceholderTeamItem />
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
    <Box as="section" py={12} backgroundColor="gray.100" h='50vh'>
      <Center h='100%'>
        <Box>
          <Box textAlign="center" mb={12}>
            <Heading mb={6} size="lg" fontStyle="italic">Partners</Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          <Center h="100%">
            <SimpleGrid columns={2} spacing={10} alignItems="center">
              <Image src={fetchLogo} w={300} />
              <Image src={centralityLogo} w={300} />
            </SimpleGrid>
          </Center>
        </Box>
      </Center>
    </Box>
    <Box as="section" py={12} >
      <Box textAlign="center" mb={12}>
        <Heading mb={6} size="lg" fontStyle="italic">Research</Heading>
        <Divider my={6} w={50} mx="auto" />
      </Box>
      <SimpleGrid mb={12} columns={2} spacing={10} maxW={1000} mx="auto" alignItems='center'>
        <Box>
          <Heading mb={3}>Trading Agent Competition with Autonomous Economic Agents</Heading>
          <Heading size="md" mb={3}>David Minarsch, Seyed Ali Hosseini, Marco Favorito, and Jonathan Ward</Heading>
          <Text mb={6}>Short blurb – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pulvinar arcu enim diam lacus at nunc. Lorem placerat turpis sed dui feugiat pulvinar integer orci dolor. Proin risus platea mi mollis metus, nulla diam eleifend rhoncus. Posuere nunc viverra sem netus in vitae egestas eu viverra.</Text>
          <Button>Read the Paper</Button>
        </Box>
        <Box height={500} backgroundColor="gray.100" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={10} maxW={1000} mx="auto" alignItems='center'>
        <Box height={500} backgroundColor="gray.100" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
        <Box>
          <Heading mb={3}>Autonomous Economic Agents as a Second Layer Technology for Blockchains</Heading>
          <Heading size="md" mb={3}>David Minarsch, Seyed Ali Hosseini, Marco Favorito, and Jonathan Ward</Heading>
          <Text mb={6}>Short blurb – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pulvinar arcu enim diam lacus at nunc. Lorem placerat turpis sed dui feugiat pulvinar integer orci dolor. Proin risus platea mi mollis metus, nulla diam eleifend rhoncus. Posuere nunc viverra sem netus in vitae egestas eu viverra.</Text>
          <Button>Read the Paper</Button>
        </Box>
      </SimpleGrid>
    </Box>
    <Box as="section" py={12} >
      <Box textAlign="center" mb={12}>
        <Heading mb={6} size="lg" fontStyle="italic">Latest from the Blog</Heading>
        <Divider my={6} w={50} mx="auto" />
      </Box>
      <SimpleGrid mb={12} columns={3} spacing={10} maxW={1200} mx="auto">
        <Box>
          <Box mb={6} height={350} backgroundColor="gray.100" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
          <Box>
            <Heading size="md" mb={3}>Enticing Blog Post Numero Zero</Heading>
            <Heading size="sm" mb={3}>David Minarsch</Heading>
            <Text mb={6}>Short blurb – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pulvinar arcu enim diam lacus at nunc. Lorem placerat turpis sed dui feugiat pulvinar integer orci dolor.</Text>
            <Button>Read Post</Button>
          </Box>
        </Box>
        <Box>
          <Box mb={6} height={350} backgroundColor="gray.100" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
          <Box>
            <Heading size="md" mb={3}>Enticing Blog Post Numero Uno</Heading>
            <Heading size="sm" mb={3}>Seyed Ali Hosseini</Heading>
            <Text mb={6}>Short blurb – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pulvinar arcu enim diam lacus at nunc. Lorem placerat turpis sed dui feugiat pulvinar integer orci dolor.</Text>
            <Button>Read Post</Button>
          </Box>
        </Box>
        <Box>
          <Box mb={6} height={350} backgroundColor="gray.100" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
          <Box>
            <Heading size="md" mb={3}>Enticing Blog Post Numero Due</Heading>
            <Heading size="sm" mb={3}>Marco Favorito</Heading>
            <Text mb={6}>Short blurb – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec pulvinar arcu enim diam lacus at nunc. Lorem placerat turpis sed dui feugiat pulvinar integer orci dolor.</Text>
            <Button>Read Post</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
    <Box as="section" py={12} textAlign="center">
      <Divider my={12} maxW={800} mx="auto" />
      <Heading mb={6} size="lg">Stay in touch!</Heading>
      <Button size="lg"><Box mr={2}>
        <FaTwitter />
      </Box> Follow Us on Twitter</Button>
    </Box>
  </>
)

export default IndexPage
