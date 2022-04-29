import React from 'react'
import { render } from 'react-dom'
import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import Layout from './Layout';



function Popup() {

  return (
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
  )
}

render(<Popup />, document.getElementById('root'))

