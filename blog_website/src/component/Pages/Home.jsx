import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner } from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux'
import { homeBlogs } from '../Redux/api';
import '../Styles/home.css'
export const Home = () => {
    // const [homeArray, setHomeArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch=useDispatch()

     const {homeBlogArray}=useSelector((store)=>{
        return store
     })

    useEffect(()=>{
        dispatch(homeBlogs())
        setLoading(false)
    },[])


    


  return (
<Box>
    {loading ? (<Box margin={"5% auto"}> 
      <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />

     </Box>)
      :(<Box className='home'>

{ homeBlogArray &&
homeBlogArray.map(({ title, type, content, _id }) => (
 <Card maxW='sm' size='sm' key={_id}>
   <CardHeader>
     <Flex spacing='4'>
       <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
         <Avatar name={homeBlogArray.name} src='' />

         <Flex gap={4}>
           <Heading size='sm'>{type}</Heading>
           <Heading size='sm'>{title}</Heading>
         </Flex>
       </Flex>
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
  )
}
