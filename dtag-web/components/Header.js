import { useState, useEffect } from 'react';
import {
  HStack,
  Spacer
} from '@chakra-ui/react';

import Score from './header/Score';
import Wallet from './header/Wallet';

export default function Header({ 
  index = false
}) {

  return(
    <HStack w='100%' p={4}>
      <Wallet />
      <Spacer />
      {!index && <Score />}
    </HStack>
  );
}