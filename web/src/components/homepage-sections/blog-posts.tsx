import Img from 'gatsby-image'
import React from 'react';
import {Center, SimpleGrid, Box, Heading, Text, Button} from '@chakra-ui/react'
import { graphql, Link, useStaticQuery } from 'gatsby';

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMdx(
        limit: 3
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
                  fluid(maxWidth: 400, maxHeight: 400) {
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
  }`)
  
  return ( <SimpleGrid mb={12} columns={{base: 1, sm: 2, md: 3}} spacing={10} maxW={1200} mx="auto" px={6}>
    {
      data.allMdx.edges.map(
        post =>
        <Box key={post.node.id}>
          <Link to={post.node.slug}>
            <Box mb={3}>
              {post?.node?.frontmatter?.image && <Img fluid={post?.node?.frontmatter?.image?.childImageSharp?.fluid} />}
            </Box>
          </Link>
          <Box>
            <Heading size="lg" mb={3}>{post.node.frontmatter.title}</Heading>
            <Heading size="md" mb={3}>{post.node.frontmatter.author}</Heading>
            <Text mb={6}>{post.node.frontmatter.excerpt}</Text>
            <Button colorScheme="pink" as={Link} to={post.node.slug}>Read Post</Button>
          </Box>
        </Box>
      )
    }
</SimpleGrid> );
}
 
export default BlogPosts;