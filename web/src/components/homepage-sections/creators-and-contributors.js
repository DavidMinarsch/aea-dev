import {
  Box,
  Center,
  Divider,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import * as React from "react"
import { useQuery } from "react-query"
import TeamItem from "../team-item"

const CreatorsAndContributorsSection = () => {
  const { isLoading, error, data: rawData } = useQuery("creatorsData", () =>
    fetch(
      "https://api.github.com/repos/fetchai/agents-aea/contributors"
    ).then(res => res.json())
  )

  const data = rawData?.filter(item => item.id !== 49699333) // filter out dependabot
  const oaksproutItem = {
    id: 66292936,
    login: "Oaksprout",
    avatar_url: "https://avatars.githubusercontent.com/u/66292936?v=4",
    html_url: "https://github.com/oaksprout",
  } // hackingly add contributors to aea-dev repo for now to save on api requests

  return (
    <Box
      as="section"
      py={28}
      bgGradient="linear(to-bl, gray.700, pink.900)"
      id="creators-and-contributors"
    >
      <Center>
        <Box mb={12} textAlign="center">
          <Box>
            <Heading mb={6} size="lg" fontStyle="normal">
              Creators + Contributors
            </Heading>
            <Link
              href="https://github.com/fetchai/agents-aea"
              mb={6}
              display="inline-block"
              color="gray.200"
              isExternal
            >
              Visit Github Repository →
            </Link>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          {error ? (
            <Text>Couldn't load contributor list</Text>
          ) : (
            <SimpleGrid
              columns={{ base: 2, md: 4, lg: 5 }}
              spacing={10}
              textAlign="center"
            >
              {isLoading
                ? "Loading..."
                : data?.map(item => <TeamItem key={item.id} item={item} />)}
              <TeamItem key={oaksproutItem.id} item={oaksproutItem} />
            </SimpleGrid>
          )}
        </Box>
      </Center>
    </Box>
  )
}

export default CreatorsAndContributorsSection
