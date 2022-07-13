import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../styles/globals.css';

import { Web3Provider } from '../context/Web3Context';

const colors = {
  background: '#222222',
  text: '#A6AAA9',
  highlight: '#2A7F33',
  highlights: {
    50: '#e6fbe7',
    100: '#c3edc8',
    200: '#9edfa5',
    300: '#79d382',
    400: '#55c660',
    500: '#3bac46',
    600: '#2c8636',
    700: '#1e6025',
    800: '#0f3915',
    900: '#001501',
  }
}

const fonts = {
  heading: 'Comfortaa',
  body: 'Edu SA Beginner'
}

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {

  // TODO Integrate Analytics

  return (
    <ChakraProvider theme={theme}>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp
