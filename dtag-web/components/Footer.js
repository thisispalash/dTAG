import { useState, useEffect } from 'react';
import {
  HStack,
  Spacer
} from '@chakra-ui/react';

import Bag from './footer/Bag';
import Shop from './footer/Shop';
import Stats from './footer/Stats';
import Create from './footer/Create';
import Save from './footer/Save';

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