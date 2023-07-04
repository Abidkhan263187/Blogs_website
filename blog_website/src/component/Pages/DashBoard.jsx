import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner, MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getdata, handleDeleteEmployee } from '../Redux/api';
import '../Styles/home.css';

export const DashBoard = () => {
  const dispatch = useDispatch();


  const [reload,setReload]=useState(false)
  const token = JSON.parse(localStorage.getItem('token'));
  const [blogArray, setBlogArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/blog/dashboard', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data.blogList);
      setBlogArray(data.blogList);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token,reload]);

  const handleDelete=(id)=>{
    handleDeleteEmployee(id)
    setReload(!reload)
  }

  return (
    <Box>
    {loading ? (<Box margin={"5% auto"}> 
      <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />

     </Box>)
      :(<Box className='home'>

{ blogArray &&
blogArray.map(({ title, type, content, _id }) => (
 <Card maxW='sm' size='sm' key={_id}>
   <CardHeader>
     <Flex spacing='4'>
       <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
         <Avatar name={blogArray.email} src='' />

         <Flex gap={4}>
           <Heading size='sm'>{type}</Heading>
           <Heading size='sm'>{title}</Heading>
         </Flex>
       </Flex>
       <Menu>
        <MenuButton
          as={Button}
          variant='ghost'
          color='#068181'
          size='sm'
          flex='0 0 auto'
          _hover={{ background: 'none' }}
        >
      <i className="fa-solid fa-bars"></i>
        </MenuButton>
        <MenuList>
          <MenuItem >Edit</MenuItem>
          <MenuItem onClick={()=>handleDelete(_id)}> Delete</MenuItem>
        </MenuList>
      </Menu>
     </Flex>
   </CardHeader>
   <CardBody>
     <Text textAlign='center'>{content}</Text>
   </CardBody>

   <CardFooter
     justify='space-between'
     flexWrap='wrap'
     sx={{
       '& > button': {
         minW: '106px'
       }
     }}
   >
     <Button color='#068181' size='sm' flex='1' variant='ghost'>
       <i className='fa-sharp fa-solid fa-heart fa-xl'></i>
     </Button>
     <Button color='#068181' size='sm' flex='1' variant='ghost'>
       <i className='fa-solid fa-comment fa-xl'></i>
     </Button>
     <Button color='#068181' size='sm' flex='1' variant='ghost'>
       <i className='fa-solid fa-share fa-xl'></i>
     </Button>
   </CardFooter>
 </Card>
))
}
</Box>)}
    
  </Box>
  );
};
