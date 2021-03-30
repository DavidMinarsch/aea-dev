import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub } from 'react-icons/fa';

const TeamItem = (item) => {
  const {login, avatar_url, html_url} = item.item
  
  return (
    <Box as={Link} href={html_url} textAlign='center' maxW="300">
      <Image borderRadius="full" boxSize={125} src={avatar_url} mx="auto" mb={3} />
        <Heading mr={2} size="md">
          <Flex alignItems="center" justifyContent="center">
            <Box mr={2}>{login}</Box>
            <FaGithub ml='auto' />
          </Flex>
        </Heading>
    </Box>
  );
}

export default TeamItem;