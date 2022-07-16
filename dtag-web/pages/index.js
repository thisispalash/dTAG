import { useEffect, useState } from 'react';
import { 
  VStack,
  Spacer,
  Box, 
  Heading,
  Text,
  Button 
} from '@chakra-ui/react';

import Meta from '../components/Meta';
import Header from '../components/Header';

export default function Index() {

  const enterApp = () => {

  }


  return (
    <>
      <Meta />
      <VStack
        h='100%' w='100%'
      >
        <Header index={true} />
        <Spacer />
        <Box
          p={4} pr={16} w='100%'
          textAlign='right'
        >
          <Heading color='highlight' p={2} fontSize='4xl'>
            decentralized Text Adventure Games
          </Heading>
          <Text color='text' p={2} fontSize='3xl'>
            Create, or play, text adventure games powered by NFTs!
          </Text>
          <Button 
            variant='outline' 
            colorScheme='highlights' 
            size='lg' m={8} mr={60}
            fontFamily='heading'
            onClick={enterApp}
          >
            Enter App
          </Button>
        </Box>
      </VStack>
    </>
  );
}