import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../chakra/theme"
function MyApp({ Component, pageProps } : any) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme = {theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
