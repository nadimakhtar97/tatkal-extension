import React from 'react'
import {render} from 'react-dom'
import Welcome from './Welcome'
// import { Box, Heading } from '@chakra-ui/react'
// import Welcome from './components/Welcome';
// import Options from './components/Options';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function Popup() {

  return (
    <>
      <Welcome/>
      <div>Hello World!!</div>
    </>
  )
}

render(<Popup/>, document.getElementById('root'))

