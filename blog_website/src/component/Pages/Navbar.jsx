import { Box, Button, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/Nav.css';
import { logOut } from '../Redux/api';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { who } = useSelector((store) => store);
  const localWho = JSON.parse(localStorage.getItem('who'))||''

  const navigate = useNavigate();

  const getUsername = (email) => {
    let atIndex = email.indexOf('@');
    return atIndex !== -1 ? email.slice(0, atIndex) : email;
  };

  const username = getUsername(localWho);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/reg');
  };

  return (
    <>
      {/* Large screen navbar */}
      <HStack display={['none', 'none', 'flex', 'flex']} className="navbar" spacing={20}>
        <Flex w={'50%'} justifyContent={'space-between'}>
          <Box><Link to={'/'}>Home</Link></Box>
          <Box><Link to={'/dashboard'}>Dashboard</Link></Box>
          <Box><Link to={'/create'}>Create</Link></Box>
          <Box><Link to={'/about'}>About</Link></Box>
          <Box><Link to={'/reg'}>Register</Link></Box>
        </Flex>
        {who && (
          <Box ml={'80px'}>
            <Button onClick={handleLogout} color={'white'} bg={'transparent'} size={'sm'} _hover={{ bg: 'transparent' }}>Logout</Button>
            (<Link to={'#'}>{username}</Link>)
          </Box>
        )}
      </HStack>

      {/* Small screen navbar */}
      <VStack display={['flex', 'flex', 'none', 'none']} w={"100%"} className='navbarTwo'>
        <Flex w={'90%'} mr={"20px"} justifyContent={'space-between'}>
          <Box><Link to={'/'}>Home</Link></Box>
          <Box><Link to={'/dashboard'}>Dashboard</Link></Box>
          <Box><Link to={'/create'}>Create</Link></Box>
          <Box><Link to={'/about'}>About</Link></Box>
          <Box><Link to={'/reg'}>Register</Link></Box>
        </Flex>
        {console.log(localWho)}
        {localWho !== '' && (
          <Box>
            <Button onClick={handleLogout} color={'white'} bg={'transparent'} size={'sm'} _hover={{ bg: 'transparent' }}>Logout</Button>
            (<Link to={'#'}>{username}</Link>)
          </Box>
        )}
      </VStack>
    </>
  );
};
