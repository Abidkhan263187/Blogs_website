import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav.css'
import {useSelector} from 'react-redux'

export const Navbar = () => {
  const {who}=useSelector((store)=>{
    return store
  })
  return (
    <HStack className='navbar' spacing={20}>
     
     <Box><Link to={'/'}>DashBoard</Link></Box>
     <Box><Link to={'/create'} >Create</Link></Box>
     <Box><Link  to={'/contact'}>Contact</Link></Box>
     <Box><Link to={'/about'} >About</Link></Box>
     <Box><Link to={'/login'} >Login</Link></Box>
     <Box><Link to={'/signup'} >Signup</Link></Box> 
    {who && <Box><Link to={'#'} >{who}</Link></Box> } 


    </HStack>
  )
}
