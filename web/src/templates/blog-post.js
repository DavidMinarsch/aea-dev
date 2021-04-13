import { Box, Heading } from "@chakra-ui/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const imageFluid = frontmatter.image.childImageSharp.fluid
  return (
    <>
      <Box mb={6}>
        <Img fluid={imageFluid} />
      </Box>
      <Box maxW="52ch" mx="auto" my={12} px={6}>
        <Heading size="2xl" mb={6}>
          {frontmatter.title}
        </Heading>
        <Heading size="md" mb={6}>
          {frontmatter.author} · {frontmatter.date}
        </Heading>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        author
        image {
          childImageSharp {
            fluid(maxWidth: 1500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`
