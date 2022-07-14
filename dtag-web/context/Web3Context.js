import { createContext, useContext } from 'react';
import { ethers } from 'ethers';

// Only Polygon support
const chainInfo = {
  testnet: {
    chain: 80001,
    rpc: 'https://rpc-mumbai.maticvigil.com',
    rpcBackup: 'https://matic-mumbai.chainstacklabs.com	'
  },
  mainnet: {
    chain: 137,
    rpc: 'https://rpc-mainnet.maticvigil.com',
    rpcBackup: 'https://matic-mainnet.chainstacklabs.com'
  }
}

const Web3Context = createContext({});

export const Web3Provider = ({ children }) => {

  const generateWallet = (network='testnet') => {
    const provider = new ethers.providers.JsonRpcProvider(chainInfo[network]);
    const wallet = ethers.Wallet.createRandom().connect(provider);
    return wallet;
  }

  const connectWallet = (network='testnet') => {

  }

  const changeWallet = (network='testnet') => {

  }

  const signMessage = (msg) => {

  }

  return (
    <Web3Context.Provider
      value = {{
        generateWallet,
        connectWallet,
        changeWallet,
        signMessage
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3Provider = () => useContext(Web3Context);