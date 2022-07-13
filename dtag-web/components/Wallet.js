import { useState, useEffect } from 'react';
import {
  Box
} from '@chakra-ui/react';

import { useWeb3Provider } from '../context/Web3Context';

export default function Wallet({ }) {

  const [ wallet, setWallet ] = useState();
  const { generateWallet, connectWallet, changeWallet, signMessage } = useWeb3Provider();

  // Run on page load
  useEffect( () => {
    const w = generateWallet();
    // setWallet(w.address);
  }, []);

  // Run on wallet change
  useEffect( () => {

  }, [wallet]);

  // onClick function to connect / switch wallet
  const switchWallet = () => {

  }

  return(
    <Box>
      {/* Icon */}
      {/* Address */}
    </Box>
  );
}