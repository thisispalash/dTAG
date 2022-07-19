import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

// Only Polygon support
const chainInfo = {
  mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: 'Polygon Mumbai',
    rpcUrls: [
      'https://rpc-mumbai.maticvigil.com',
      'https://matic-mumbai.chainstacklabs.com'
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    blockExplorerUrls: ['https://mumbai.polygonscan.com']
  },
  matic: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: 'Polygon Mainnet',
    rpcUrls: [
      'https://rpc-mainnet.maticvigil.com',
      'https://matic-mainnet.chainstacklabs.com'
    ],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    blockExplorerUrls: ['https://polygonscan.com']
  }
}

const Web3Context = createContext({});

export const Web3Provider = ({ children }) => {

  const [ network, setNetwork ] = useState('mumbai'); // or 'matic'
  const [ provider, setProvider ] = useState();
  const [ address, setAddress ] = useState();

  // Change provider on network change
  useEffect( () => {
    const p = new ethers.providers.JsonRpcProvider(chainInfo[network].rpcUrls[0]);
    setProvider(p);
  }, [network]);

  const generateWallet = () => {
    const wallet = ethers.Wallet.createRandom().connect(provider);
    setAddress(wallet.address);
    return wallet;
  }

  const connectWallet = async () => {
    if(window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
        .catch( (e) => {
          console.log('Error in connecting to Metamask:', e.message);
          return null;
        });
      console.log('metamask accounts:', accounts);
      if(!accounts || !accounts.length) {
        console.log('No accounts!');
        return null;
      }
      setAddress(accounts[0]);
      return accounts[0];
    }
  }

  const switchNetwork = async (name) => {
    if(window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainInfo[name].chainId }]
        });
      } catch (switchError) {
        // Chain does not exist in Metamask, so add it
        if(switchError.code === 4902) {
          // Should be a try-catch block
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{ ...chainInfo[name] }]
          });
        }
      }
      setNetwork(name);
    }
  }

  const signMessage = (msg) => {

  }

  return (
    <Web3Context.Provider
      value = {{
        generateWallet,
        connectWallet,
        switchNetwork,
        signMessage
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3Provider = () => useContext(Web3Context);