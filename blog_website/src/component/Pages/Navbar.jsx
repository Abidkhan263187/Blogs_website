import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../Styles/Nav.css'
import { logOut } from '../Redux/api'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
  const { who } = useSelector((store) => store);

  const navigate=useNavigate()

  const getUsername = (email) => {
    const atIndex = email.indexOf("@");
    return atIndex !== -1 ? email.slice(0, atIndex) : email;
  };

  const username = getUsername(who);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/reg')
  }
  return (
    <HStack className='navbar' spacing={20}>

      <Box><Link to={'/'}>Home</Link></Box>
      <Box><Link to={'/dashboard'}>Dashboard</Link></Box>
      <Box><Link to={'/create'}>Create</Link></Box>
      <Box><Link to={'/about'}>About</Link></Box>
      <Box><Link to={'/reg'}>Register</Link></Box>
      {who && (
        <Box ml={"80px"}>
          <Button onClick={handleLogout} color={'white'} bg={'transparent'} size={'sm'} _hover={{ bg: "transparent" }}>Logout</Button>
          ( <Link to={'#'}>{username}</Link> )
        </Box>
      )}
    </HStack>
  )
}
