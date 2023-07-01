import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Box,  } from '@chakra-ui/react'

import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { Login } from '../Pages/Login'
import { SignUp } from '../Pages/SignUp'
import { DashBoard } from '../Pages/DashBoard'
import { CreateBlogs } from '../Pages/CreateBlogs'

export const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path={'/'} element={<DashBoard/>} />
                <Route path={'/about'} element={<About/>} />
                <Route path={'/contact'} element={<Contact/>} />
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/signup'} element={<SignUp/>} />
                <Route path={'/create'} element={<CreateBlogs/>} />
            </Routes>
        </Box>
    )
}
