import { Flex } from '@chakra-ui/react'
import React from 'react'
import Welcome from './Welcome'
import Options from './Options'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function Layout() {
    return (
        <Flex>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path="options" element={<Options />} />
                </Routes>
            </BrowserRouter>
        </Flex>
    )
}

export default Layout