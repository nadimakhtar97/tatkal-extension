import React from 'react'
import {Box,Button,Heading} from '@chakra-ui/react'

function Welcome() {

  const handleClick = () => {
    const newURL = "chrome-extension://klefndadohdhmlccpbnfjbbkopmmfimf/popup.html";
    chrome.tabs.create({ url: newURL });
  }
  return (
    
    <Box>
      <Heading>Welcome to Tatkal Extension</Heading>
      <Button colorScheme={"facebook"} onClick={handleClick} >options</Button>
    </Box>

  )
}

export default Welcome