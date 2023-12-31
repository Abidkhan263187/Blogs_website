import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Spacer,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const SectionOne = () => {

  const navigate=useNavigate()
  return (
    <Box
      p={8}
      bgImage="url('https://c1.wallpaperflare.com/preview/236/1005/311/keyboard-office-work-home-office.jpg')"
      bgSize="cover"
      bgPosition="center"
      height={'400px'}
      m={'80px 20px 20px 20px'}
    
    >
      <Flex direction={['column', 'column', 'row']} margin="10px 0%" justifyContent={'space-between'} h={"100%"} align='center' >

        <Stack spacing={6} maxW={['100%', '100%', '50%']}  >
          <Heading  color="white">
            Welcome
          </Heading>
          <Text fontSize={["sm","","",'md']} color="white">
            Explore and share your thoughts with the world, The world eagerly awaits your insights,
            your stories, and your unique perspective. Unleash your thoughts, and let the
            world be your audience. Share your voice, and watch as it reverberates through the vast expanse of the blogosphere.
          </Text>
          <Button onClick={()=> navigate('/reg')} w={["","","","30%"]} m={'auto'} color={'white'} bgColor='#068181' size='md'>
            Get Started
          </Button>
        </Stack>
        <Stack w={["100%","50%","50%","50%"]} ml={['0px','','80px','100px']} mt={['120px','','','90px']}  >
          <Box align="center">
            <Flex alignItems="center" borderRadius={"10px"} mb={'10px'} padding={'0px 10px'} w={["100%","","","70%"]}  justifyContent={"space-between"} bgColor={"white"} >
              <Input
                placeholder="Search..."
                size="md"
                rounded="full"
                mr={2}
                 
                bg={'white'}
                border='none'
                outline='none'
                _focus={{ boxShadow: 'none' }}
              />
              <IconButton
                icon={<FaSearch />}
              bgColor='#068181'
                aria-label="Search"
                size="sm"
                rounded="full"
                color={'white'}
              />
            </Flex>
            <IconButton
              icon={<FaFacebook />}
            bgColor='#068181'
              aria-label="Facebook"
              size="sm"
              rounded="full"
              color={'white'}
              mr={2}
            />
            <IconButton
              icon={<FaTwitter />}
            bgColor='#068181'
              aria-label="Twitter"
              size="sm"
              rounded="full"
              color={'white'}
              mr={2}
            />
            <IconButton
              icon={<FaInstagram />}
            bgColor='#068181'
              aria-label="Instagram"
              size="sm"
              rounded="full"
              color={'white'}
              mr={2}
            />
            <IconButton
              icon={<FaLinkedin />}
            bgColor='#068181'
              aria-label="LinkedIn"
              size="sm"
              rounded="full" color={'white'}
            />
          </Box>
          <Flex m={'auto'} alignItems={"center"} w={"80%"}>

            <Button
              w={['','','','40%']}
              m={'auto'}
              bgColor="#068181"
              size="sm"
              mt={4}
              rounded="full"color={'white'}
              onClick={()=>navigate('/create')}
            >
              Create
            </Button>
            <Button
              w={'40%'}
              m={'auto'}
              bgColor="#068181"
              size="sm"
              mt={4}
              rounded="full"
              color={'white'}
              onClick={()=>navigate('/about')}
            >
              Contact
            </Button>
          </Flex>
        </Stack>
        <Spacer />
      </Flex>
    </Box>
  );
};
