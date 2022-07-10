import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../styles/globals.css';

const colors = {
  background: '#222222',
  text: '#A6AAA9',
  highlight: '#2A7F33'
}

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {

  // TODO Integrate Analytics

  return (
    // <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    // </ChakraProvider>
  );
}

export default MyApp
