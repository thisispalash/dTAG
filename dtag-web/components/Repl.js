import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Icon,
  Spacer,
  Divider,
  InputRightAddon,
  InputLeftAddon
} from '@chakra-ui/react';
import { FaAngleRight } from 'react-icons/fa';

import { useGameProvider } from '../context/GameContext';

export default function Repl({ }) {

  const responseRef = useRef(null);
  const [ input, setInput ] = useState('');
  const { moves, response, makeMove } = useGameProvider();

  const handleChange = (event) => setInput(event.target.value);
  
  const handleMove = () => {
    const valid = makeMove(input);
    if(valid) setInput(''); // Clear input field on accepted move
  }

  const submitOnEnter = (event) => {
    if(event.keyCode === 13) handleMove();
  }
  
  useEffect(() => responseRef.current.scrollIntoView({ behavior: 'smooth' }), [response])

  return (
    <VStack
      spacing={0}
      w='80%' h='75%'
      bgColor='rgba(34,34,34,0.69)'
      borderRadius='2xl'
      borderColor='highlight'
      borderWidth={1}
    >
      <Spacer />
      <VStack
        w='100%' p={4}
        overflowY='scroll'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }}
      >
        {response.map( (res, index) => (
          <Box
            w='100%'
            color='text'
            fontSize='lg'
            ref={responseRef}
          >
            <Text as='span' color='highlight' fontSize='xl'>{moves[index]}</Text>
            &nbsp;
            <Text as='span' fontFamily='Comfortaa'>{res}</Text>
          </Box>
        ))}
      </VStack>
      <Divider color='highlight' />
      <InputGroup
        paddingX={2} paddingY={1} m={0}
        color='text'
      >
        <InputLeftElement pointerEvents='none' h='full'>
          <Icon as={FaAngleRight} color='highlight' fontSize='2xl' />
        </InputLeftElement>
        <Input 
          variant='unstyled'
          fontSize='2xl' pl={8} pr={24}
          value={input}
          onChange={handleChange}
          onKeyDown={submitOnEnter}
          focusBorderColor='highlight'
          placeholder='make your move'
        />
        <InputRightElement w='auto' pr={2} h='full'>
          <Button 
            size='md'
            variant='ghost'
            onClick={handleMove}
            fontFamily='Comfortaa'
            colorScheme='highlights' 
          >
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
}