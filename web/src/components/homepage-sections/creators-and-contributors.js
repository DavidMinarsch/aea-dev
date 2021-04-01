import * as React from "react"
import { Box, Center, Heading, Divider, SimpleGrid, Text } from "@chakra-ui/react"
import TeamItem from "../team-item"
import { useQuery } from "react-query"

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
        <Box mb={12}>
          <Box textAlign="center">
            <Heading mb={6} size="lg" fontStyle="italic">
              Creators + Contributors
            </Heading>
            <Divider my={6} w={50} mx="auto" />
          </Box>
          {error ? (
            <Text>There was an error fetching the list of creators :(</Text>
          ) : (
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
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
