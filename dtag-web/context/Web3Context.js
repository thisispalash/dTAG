import { createContext, useContext } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext({});

export const Web3Provider = ({ children }) => {

  const generateWallet = () => {

  }

  const connectWallet = () => {

  }

  const changeWallet = () => {

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