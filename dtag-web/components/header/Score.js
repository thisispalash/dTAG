import { useState, useEffect } from 'react';
import {
  ButtonGroup,
  Button
} from '@chakra-ui/react';

import { useGameProvider } from '../../context/GameContext';
import { useWeb3Provider } from '../../context/Web3Context';

export default function Score({

}) {

  const [ lifetime, setLifetime ] = useState(0);
  const [ scoreDisplay, setScoreDisplay ] = useState(0);
  const [ scoreText, setScoreText ] = useState('lifetime');
  
  const { score } = useGameProvider();

  const getLifetimeScore = async () => {
    // TODO get from contract
  }

  const changeScore = () => {
    if(scoreText === 'lifetime') {
      setScoreText('current');
      setScoreDisplay(score);
    } else {
      setScoreText('lifetime');
      setScoreDisplay(lifetime);
    }
  }

  return (
    <ButtonGroup
      p={2} size='sm' isAttached 
      colorScheme='highlights' 
      variant='outline'
      fontFamily='Comfortaa' 
    >
      <Button disabled>{scoreText} score</Button>
      <Button onClick={changeScore}>{scoreDisplay}</Button>
    </ButtonGroup>
  );
}