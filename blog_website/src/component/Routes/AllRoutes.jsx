import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, } from '@chakra-ui/react'
import { About } from '../Pages/About'
import { DashBoard } from '../Pages/DashBoard'
import { CreateBlogs } from '../Pages/CreateBlogs'
import { Home } from '../Pages/Home'
import LoginFormToggle from '../Pages/LoginFormToggle'

export const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/dashboard'} element={<DashBoard />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/reg'} element={<LoginFormToggle />} />
                <Route path={'/create'} element={<CreateBlogs />} />
            </Routes>

        </Box>
    )
}
