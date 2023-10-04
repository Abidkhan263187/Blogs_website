import { Box, Button, Flex, Grid, HStack, Heading, Image, VStack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/Nav.css';
import { logOut } from '../Redux/api';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { who } = useSelector((store) => store);
  const localWho = JSON.parse(localStorage.getItem('who')) || ''

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
    <HStack className="navbar" justifyContent={'space-between'}>
      {/* Large screen navbar */}

      <Heading size={'md'} as={Link} to='/'     display={['block','block','none']}> <Image w={'30%'} borderRadius={'5px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6yQm3ngwjr8vnk6SIafEFSjFny7-wQHeHogppLDRmF1qeH8MHN0fmLZc5dCj6xzgrjk&usqp=CAU"/></Heading>
      <HStack display={['none', 'none', 'flex', 'flex']} justifyContent={'space-between'} className="navbar" spacing={20}>
      <Heading size={'md'}  as={Link} to='/' > <Image w={'20%'} borderRadius={'5px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6yQm3ngwjr8vnk6SIafEFSjFny7-wQHeHogppLDRmF1qeH8MHN0fmLZc5dCj6xzgrjk&usqp=CAU"/></Heading>
        <Flex w={'50%'} justifyContent={'space-between'} id="lap_2nd"  >
          <Box><Link id="lap_link" to={'/'}>Home</Link></Box>
          <Box><Link id="lap_link" to={'/dashboard'}>Dashboard</Link></Box>
          <Box><Link id="lap_link" to={'/create'}>Create</Link></Box>
          <Box><Link id="lap_link" to={'/about'}>About</Link></Box>
          <Box><Link id="lap_link" to={'/reg'}>Register</Link></Box>
        </Flex>
        {who && (
            <Button  id="lap_link" onClick={handleLogout}
             color={'white'} bg={'transparent'} size={'sm'}
              _hover={{ bg: 'transparent' }}>
                <i class="fa-solid fa-right-from-bracket"></i>
                <Link i to={'#'}>{username}</Link>
                </Button>
            
        
        )}


      </HStack>
      <Button
      display={['block','block','none']}
        size={'sm'}
        colorScheme='#068181'
        variant={'outline'}
        onClick={isOpen ? onClose : onOpen}
      >
        Menu
      </Button>
      {/* Small screen navbar */}
      {isOpen && <VStack className='navbarTwo'>

        <Box id="mob_nav_li">
          <Box><Link onClick={onClose} to={'/'}>Home</Link></Box>
          <Box><Link onClick={onClose} to={'/dashboard'}>Dashboard</Link></Box>
          <Box><Link onClick={onClose} to={'/create'}>Create</Link></Box>
          <Box><Link onClick={onClose} to={'/about'}>About</Link></Box>
          <Box><Link onClick={onClose} to={'/reg'}>Register</Link></Box>
        </Box>
        {console.log(localWho)}
        {localWho !== '' && (
          <Button onClick={handleLogout} color={'white'} bg={'transparent'}
            size={'sm'} _hover={{ bg: 'transparent' }}>
            <i class="fa-solid fa-right-from-bracket"></i>
            <Link style={{ fontSize: "xx-small" }} onClick={onClose} to={'#'}>{username}</Link>
          </Button>

        )}

      </VStack>}

    </HStack>
  );
};
