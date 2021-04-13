import React from "react"
import { MDXProvider as BaseMDXProvider } from "@mdx-js/react"
import { Heading, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/layout"

const MDXH2 = props => <Heading size='lg' mb={3} {...props} />
const MDXH3 = props => <Heading size='md' mb={3} {...props} />
const MDXText = props => (
  <Text mb={3} {...props} />
)
const Blockquote = props => <Text {...props} fontStyle='italic' />

const components = {
  h2: MDXH2,
  h3: MDXH3,
  p: MDXText,
  ol: props => <OrderedList {...props} mb={3} />,
  ul: props => <UnorderedList {...props} mb={3} />,
  li: props => <ListItem {...props} mb={3} />,
  blockquote: Blockquote
}

const MDXProvider = ({ children }) => (
  <BaseMDXProvider components={components}>{children}</BaseMDXProvider>
)

export default MDXProvider