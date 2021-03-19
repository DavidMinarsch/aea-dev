import { Box, Heading, Center, Text, Button } from '@chakra-ui/layout';
import { graphql, Link } from 'gatsby';
import React from 'react';

const Blog = ({data}) => {
  return ( <Box px={6} py={28}>
    <Heading size="4xl" mb={12}>Blog</Heading>
    {console.log(data)}
    {
      data.allMdx.edges.map(
        post =>
        <Box key={post.node.id}>
          <Box mb={6} height={350} backgroundColor="gray.900" borderRadius={10} textAlign="center"><Center h="100%"><Text>Illustration</Text></Center></Box>
          <Heading mb={3}>{post?.node?.frontmatter.title}</Heading>
          <Heading size="md" mb={3}>{post?.node?.frontmatter.author} · {post?.node?.frontmatter.date}</Heading>
          <Text mb={3}>{post?.node?.frontmatter.excerpt}</Text>
          <Link to={post.node.slug}>Read now</Link>
        </Box>
      )
    }
  </Box> );
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
          date
        }
        slug
      }
    }
    }
}`
 
export default Blog;