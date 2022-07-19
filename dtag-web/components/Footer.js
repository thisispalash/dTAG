import { useState, useEffect } from 'react';
import {
  HStack,
  Spacer
} from '@chakra-ui/react';

import Bag from './footer-icons/Bag';
import Shop from './footer-icons/Shop';
import Stats from './footer-icons/Stats';
import Create from './footer-icons/Create';
import Save from './footer-icons/Save';

export default function Footer({}) {

  return(
    <HStack
      w='100%' m={2} p={4}
      color='grey'
      fontSize='2xl'
      spacing={8}
      bottom={0}
    >
      <Shop />
      <Stats />
      <Bag />
      <Spacer />
      <Save />
      <Create />
    </HStack>
  );
}