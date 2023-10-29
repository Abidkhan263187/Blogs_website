import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Box, } from '@chakra-ui/react'
import { About } from '../Pages/About'
import { DashBoard } from '../Pages/DashBoard'
import { CreateBlogs } from '../Pages/CreateBlogs'
import { Home } from '../Pages/Home'
import LoginFormToggle from '../Pages/LoginFormToggle'
import { SingleBlog } from '../Pages/SingleBlog'
import { useSelector } from 'react-redux'

export const AllRoutes = () => {
    const {login}=useSelector((store)=>{
        return store
      })
      const token= JSON.parse(sessionStorage.getItem('token'))
    return (
        <Box mt={'20px'}>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/dashboard'} element={login || token ? <DashBoard />:<Navigate to={'/reg'} />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/reg'} element={login ?<Home/> :<LoginFormToggle />} />
                <Route path={'/create'} element={login || token ? <CreateBlogs />:<Navigate to={'/reg'}/>} />
                <Route path={'/singleBlog/:id'} element={<SingleBlog/>} />
            </Routes>

        </Box>
    )
}
