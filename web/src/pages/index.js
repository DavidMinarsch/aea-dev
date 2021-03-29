import * as React from "react"
import {
  Heading,
  Text,
  Box,
  Image,
  Button,
  Center,
  Divider,
  SimpleGrid,
  Link,
} from "@chakra-ui/react"

import SEO from "../components/seo"

import fetchLogo from "../images/fetch-logo.png"
import centralityLogo from "../images/centrality-logo.svg"
import heroBackground from "../images/hero-background.png"
import whatIsAEAImage from "../images/what-is-aea.jpg"
import research1Image from "../images/research-1.jpg"
import research2Image from "../images/research-2.jpg"

import { FaTwitter } from "react-icons/fa"
import { QueryClientProvider, QueryClient } from "react-query"
import { Link as GatsbyLink } from "gatsby"

import BlogPosts from "../components/homepage-sections/blog-posts"
import CreatorsAndContributorsSection from "../components/homepage-sections/creators-and-contributors"

const queryClient = new QueryClient()

const IndexPage = () => (
  <QueryClientProvider client={queryClient}>
    <SEO title="Home" />
    <Box
      as="section"
      py={28}
      h="66vh"
      bgGradient="linear(to-r, pink.600, gray.700)"
    >
      <Box
        backgroundImage={heroBackground}
        backgroundRepeat="repeat"
        display="inline"
        zIndex={1}
        h="100px"
        w="100px"
      ></Box>
      <Center h="100%" zIndex={2}>
        <Box textAlign="center">
          <Heading mb={6} size="2xl">Agents that work for you,<br />and only for you</Heading>
          <Button size="lg" colorScheme="pink" as={Link} isExternal href="https://docs.fetch.ai/aea" _hover={{textDecor: 'none', backgroundColor: "pink.600", color: 'pink.100'}}>Read the Docs</Button>
        </Box>
      </Center>
    </Box>
    <Box
      as="section"
      py={28}
      px={6}
      id="what-is-aea"
      bgGradient="linear(to-tl, gray.700, pink.900)"
    >
      <Center h="100%">
        <Box>
          <Box textAlign="center" mb={12}>
            <Heading mb={6} size="lg" fontStyle="italic">
              What is AEA?
            </Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            alignItems="center"
          >
            <Text maxW="400">
              AEAs or Autonomous Economic Agents are software agents that act on
              behalf of a human or organisation to further their owner's
              economic goals.
            </Text>
            <Center h="100%" w={400}>
              <img src={whatIsAEAImage} alt="What is AEA?" />
            </Center>
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
    <CreatorsAndContributorsSection />
    <Box as="section" py={28} backgroundColor="gray.900" h="50vh" id="partners">
      <Center h="100%">
        <Box>
          <Box textAlign="center" mb={12}>
            <Heading mb={6} size="lg" fontStyle="italic">
              Partners
            </Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          <Center h="100%">
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={10}
              alignItems="center"
            >
              <Link isExternal href="https://fetch.ai">
                <Image src={fetchLogo} w={300} />
              </Link>
              <Link isExternal href="https://centralitylabs.com">
                <Image src={centralityLogo} w={300} />
              </Link>
            </SimpleGrid>
          </Center>
        </Box>
      </Center>
    </Box>
    <Box
      as="section"
      py={28}
      bgGradient="linear(to-r, pink.800, gray.800)"
      id="research"
    >
      <Box textAlign="center" mb={12}>
        <Heading mb={6} size="lg" fontStyle="italic">
          Research
        </Heading>
        <Divider my={6} w={50} mx="auto" />
      </Box>
      <SimpleGrid
        mb={12}
        columns={{ base: 1, lg: 2 }}
        spacing={10}
        maxW={1400}
        mx="auto"
        alignItems="center"
        px={6}
      >
        <Box>
          <Heading mb={3}>
            Trading Agent Competition with Autonomous Economic Agents
          </Heading>
          <Heading size="md" mb={3}>
            David Minarsch, Seyed Ali Hosseini, Marco Favorito, and Jonathan
            Ward
          </Heading>
          <Text mb={6}>
            We provide a case study for the Autonomous Economic Agent (AEA)
            framework; a toolkit for the development and deployment of
            autonomous agents with a focus on economic activities. The use case
            is the trading agent competition (TAC). It is a competition between
            autonomous agents with customisable strategies and market
            parameters. The competition is facilitated by the AEA framework’s
            native support for decentralised ledger technologies, i.e.
            permissionless blockchains and smart contract functionality, for
            immutable transaction recording and trade settlement. We provide an
            open-source implementation, study the result of the competitions we
            ran, and compare it to theoretical results in the economics
            literature. We conclude by discussing its real-world applications in
            crypto-currency, digital assets and token trading
          </Text>
          <Button
            as={Link}
            isExternal
            href="https://www.scitepress.org/Papers/2021/104318/104318.pdf"
          >
            Read the Paper
          </Button>
        </Box>
        <Center h="100%">
          <img src={research1Image} alt="AEA Research 1" />
        </Center>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={10}
        maxW={1400}
        mx="auto"
        alignItems="center"
        px={6}
      >
        <Center h="100%">
          <img src={research2Image} alt="AEA Research 2" />
        </Center>
        <Box>
          <Heading mb={3}>
            Autonomous Economic Agents as a Second Layer Technology for
            Blockchains
          </Heading>
          <Heading size="md" mb={3}>
            David Minarsch, Seyed Ali Hosseini, Marco Favorito, and Jonathan
            Ward
          </Heading>
          <Text mb={6}>
            The user experience of interacting with distributed ledger
            technologies (DLT) is fraught with excessive complexity, high risk
            and unintuitive processes. Moreover, smart contracts deployed in
            these systems are restricted to being reactive. These limitations
            have negative implications on user adoption and prevent DLTs from
            being general purpose. We introduce a framework for the development
            of Autonomous Economic Agents (AEAs), software agents that act
            autonomously and pursue an economic goal, and demonstrate how AEAs
            complement existing decentralised ledgers as a second layer
            technology. In particular, the framework enables a simplified user
            experience through automation, supports modularisation and reuse of
            complex decision making and machine learning capabilities, and
            allows for proactive behaviour facilitating autonomy. We demonstrate
            these gains in the context of a specific use-case, a multi-agent
            trading system modelling a Walrasian Exchange Economy populated by a
            number of agents trading a basket of tokens.
          </Text>
          <Button
            as={Link}
            isExternal
            href="https://ieeexplore.ieee.org/abstract/document/9150195"
          >
            Read the Paper
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
    <Box as="section" py={28} bgGradient="linear(to-br, gray.900, gray.700)">
      <Box textAlign="center" mb={12}>
        <Heading mb={6} size="lg" fontStyle="italic">
          Latest from the Blog
        </Heading>
        <Link
          as={GatsbyLink}
          to="/blog"
          mb={6}
          display="inline-block"
          color="gray.200"
        >
          See All →
        </Link>
        <Divider borderColor="gray.900" my={6} w={50} mx="auto" />
      </Box>
      <BlogPosts />
    </Box>
    <Box
      as="section"
      py={28}
      textAlign="center"
      bgGradient="linear(to-tr, gray.900, gray.700)"
    >
      <Heading mb={6} size="lg">
        Stay in touch!
      </Heading>
      <Button as={Link} isExternal href="https://twitter.com/aea_dev" size="lg">
        <Box mr={2}>
          <FaTwitter />
        </Box>{" "}
        Follow Us on Twitter
      </Button>
    </Box>
  </QueryClientProvider>
)

export default IndexPage
