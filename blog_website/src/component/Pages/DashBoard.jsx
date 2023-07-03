import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Heading, Text, Button,Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getdata } from '../Redux/api'
import '../Styles/home.css'
import { useState } from 'react'


export const DashBoard = () => {
const dispatch=useDispatch()

// const{blogArray}=useSelector((store)=>{
//   return store
// })

var   token=JSON.parse(localStorage.getItem("token"))
const [blogArray, setblogArray] = useState([])


const getdata = async ()=> {
  try {
    const response = await fetch('http://localhost:5000/blog', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data.blogList);
    // dispatch(storeData(data.blogList));
    setblogArray(data.blogList)
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
getdata();
}, [])


  return (
    <Box className='dashboard'>
      {
        blogArray ? blogArray.map(({title,type,content,_id})=>{
          return      <Card maxW='sm' size={'sm'} key={_id}>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name={blogArray.email} src='' />
        
                <Flex gap={4}>
                  <Heading size='sm'>{type}</Heading>
                  <Heading size='sm'>{title}</Heading>
                </Flex>
              </Flex>
             
            </Flex>
          </CardHeader>
          <CardBody>
            <Text textAlign={"center"}>
              {content}
            </Text>
          </CardBody>
         
        
          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '106px',
              },
            }}
          >
            <Button color='#068181' size={"sm"} flex='1' variant='ghost' >
            <i className="fa-sharp fa-solid fa-heart fa-xl"></i>
            </Button>
            <Button  color='#068181'size={"sm"} flex='1' variant='ghost'>
            <i className="fa-solid fa-comment fa-xl"></i>
            </Button>
            <Button color='#068181' size={"sm"} flex='1' variant='ghost'>
            <i className="fa-solid fa-share fa-xl"></i>
            </Button>
          </CardFooter>
        </Card>
        }):<Box> <Heading> NO blogs found create new </Heading></Box>
      }

    </Box>
  )
}
