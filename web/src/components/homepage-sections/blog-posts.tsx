import React from 'react';
import {Center, SimpleGrid, Box, Heading, Text, Button} from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby';

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
              date
            }
            slug
          }
        }
        }
  }`)
  
  return ( <SimpleGrid mb={12} columns={3} spacing={10} maxW={1200} mx="auto">
    {console.log(data)}
    {
      data.allMdx.edges.map(
        post =>
        <Box key={post.node.id}>
          {console.log(post.node)}
          <Box mb={6} height={350} backgroundColor="gray.900" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
          <Box>
            <Heading size="md" mb={3}>{post.node.frontmatter.title}</Heading>
            <Heading size="sm" mb={3}>{post.node.frontmatter.author}</Heading>
            <Text mb={6}>{post.node.frontmatter.excerpt}</Text>
            <Button>Read Post</Button>
          </Box>
        </Box>
      )
    }
</SimpleGrid> );
}
 
export default BlogPosts;