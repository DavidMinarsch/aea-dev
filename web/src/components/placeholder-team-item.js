import { Box, Heading, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import davidImage from '../images/david-image.png'
import { FaTwitter } from 'react-icons/fa';

const PlaceholderTeamItem = () => {
  return (<Box textAlign='center' maxW="300">
    <Image src={davidImage} mx="auto" mb={3} />
    <Heading mb={3} size="lg">David Minarsch</Heading>
    <Text mb={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum accumsan dictumst pharetra at.
      <FaTwitter display='inline' />
    </Text>
  </Box>);
}

export default PlaceholderTeamItem;