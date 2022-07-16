
/**
 * 
 * <Context.Provider>
 *   <Head />
 *   <Repl />
 *   <Foot />
 * </Context.Provider>  
 */

import { useState, useEffect } from 'react';
import {
  VStack,
  Spacer
} from '@chakra-ui/react';

import Header from '../components/Header';
import Repl from '../components/Repl';
import Footer from '../components/Footer';

export default function Home({}) {
  
  return(
    <VStack>
      <Header />
      <Spacer />
      <Repl />
      <Spacer />
      <Footer />
    </VStack>
  );
}