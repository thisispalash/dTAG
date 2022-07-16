import { useState, useEffect } from 'react';
import {
  HStack,
  Spacer
} from '@chakra-ui/react';

import Bag from './modals/Bag';
import Shop from './modals/Shop';
import Stats from './modals/Stats';
import Create from './modals/Create';
import Save from './modals/Save';

export default function Footer({}) {

  return(
    <HStack>
      <Bag />
      <Stats />
      <Shop />
      <Spacer />
      <Save />
      <Create />
    </HStack>
  );
}