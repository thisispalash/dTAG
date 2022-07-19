import { useState, useEffect } from 'react';
import {
  VStack,
  Spacer
} from '@chakra-ui/react';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Repl from '../components/Repl';
import Footer from '../components/Footer';

export default function Home({}) {
  
  return(
    <>
      <Meta title='dTAG | Home' />
      <VStack
        h='100%'
      >
        <Header />
        <Spacer />
        <Repl />
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
}