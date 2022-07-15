import { useState, useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Icon,
  useToast
} from '@chakra-ui/react';
import { FaRegCopy, FaRegSave, FaRegCompass } from 'react-icons/fa';

import { useWeb3Provider } from '../context/Web3Context';

export default function Wallet({ }) {

  const [ wallet, setWallet ] = useState();
  const [ address, setAddress ] = useState('');
  const [ network, setNetwork ] = useState();
  const [ connected, setConnected ] = useState(false);

  const chakraToast = useToast();
  const { generateWallet, connectWallet, switchNetwork, changeWallet, signMessage } = useWeb3Provider();

  const index = async () => {
    const w = generateWallet();
    setWallet(w);
    setNetwork('mumbai')
    setAddress(w.address);
  }

  // Run on page load
  useEffect( () => {
    index();
  }, []);

  // Run on wallet change
  useEffect( () => {
    setConnected(true);
  }, [wallet]);

  const switchWallet = async () => {
    console.log('Connecting to metamask..')
    const addr = await connectWallet();
    console.log(addr)
    setAddress(addr);
    setWallet('metamask');
  }

  const switchChain = () => {
    const newChain = network == 'mumbai'? 'matic':'mumbai'
    setNetwork(newChain);
    switchNetwork(newChain);
    // TODO add check for user rejection
  }


  /* Popover Icon Stuff */

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    chakraToast({
      description: 'Address is copied to clipboard',
      status: 'success',
      duration: 5000,
      variant: 'subtle'
    });
  }

  const saveKey = () => {
    if(!connected) {
      navigator.clipboard.writeText(wallet.privateKey);
      chakraToast({
        description: 'Private key is copied to clipboard',
        status: 'success',
        duration: 5000,
        variant: 'subtle'
      });
    } else {
      chakraToast({
        description: 'Metamask wallet connected. Please get private key from the metamask extension.',
        status: 'warning',
        duration: 5000,
        variant: 'subtle'
      });
    }
  }

  const polyScan = () => {
    const url = `https://${network == 'mumbai'? 'mumbai.':''}polygonscan.com/address/${address}`;
    const win = window.open(url, '_blank');
    if(win) win.focus();
  }

  return(
    <Popover matchWidth={true}>
      <PopoverTrigger>
        <ButtonGroup 
          p={2} size='sm' isAttached 
          colorScheme='highlights' 
          variant='outline'
          fontFamily='Comfortaa' 
        >
          <Button
            color = {network == 'mumbai'? 'gray':'purple'}
          >
            {network}
          </Button>
          <Button
            disabled
          >
            {address.slice(0,5) + '...' + address.slice(-4)}
          </Button>
        </ButtonGroup>
      </PopoverTrigger>
      <PopoverContent bg='background' color='text' border='none'>
        <PopoverHeader pt={4} border='none' fontSize='lg'>
          Currently connected wallet
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody fontFamily='Comfortaa'>
          {address} &nbsp;
          <Icon as={FaRegCopy} opacity={0.8} onClick={copyAddress} _hover={iconHover} /> &nbsp;
          <Icon as={FaRegSave} opacity={0.8} onClick={saveKey} _hover={iconHover} /> &nbsp;
          <Icon as={FaRegCompass} opacity={0.8} onClick={polyScan} _hover={iconHover} />
        </PopoverBody>
        <PopoverFooter pb={4} border='none' alignItems='center' justifyContent='space-between'>
          <ButtonGroup 
            size='xs' 
            colorScheme='highlights' 
            variant='outline'
            fontFamily='Comfortaa'
          >
            <Button onClick={switchChain} disabled>
              Switch Network
            </Button>
            <Button onClick={switchWallet}>
              Change Wallet
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}