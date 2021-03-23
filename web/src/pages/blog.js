import { Box, Heading, Center, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image'

const Blog = ({data}) => {
  
  return ( 
    <>
      <Box px={6} py={28} maxW={1200} mx="auto">
        <Heading size="4xl" mb={12}>Blog</Heading>
        {
          data.allMdx.edges.map(
            post => {
              const link = `/${post?.node?.slug}`

              return (
                <SimpleGrid key={post.node.id} columns={{base: 1, lg: 2}} spacing={12} alignItems="center">
                  <Box>
                    <Link to={link}><Heading mb={6}>{post?.node?.frontmatter.title}</Heading></Link>
                    <Heading size="md" mb={6}>{post?.node?.frontmatter.author} · {post?.node?.frontmatter.date}</Heading>
                    <Text mb={6}>{post?.node?.frontmatter.excerpt}</Text>
                    <Button colorScheme="pink" as={Link} to={link}>Read now</Button>
                  </Box>
                  <Link to={link}>
                    <Box minH={400}>
                      {post?.node?.frontmatter?.image && <Img fluid={post?.node?.frontmatter?.image?.childImageSharp?.fluid} />}
                    </Box>
                  </Link>
                </SimpleGrid>
              )
            }
          )
        }
      </Box>
    </> );
}

export const data = graphql`
query BlogQuery {
  allMdx(
    sort: {fields: frontmatter___date}
    filter: {frontmatter: {published: {eq: true}}}
    ) {
    edges {
      node {
        id
        frontmatter {
          title
          author
          excerpt
          image {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(formatString: "Do MMMM YYYY")
        }
        slug
      }
    }
    }
}`
 
export default Blog;