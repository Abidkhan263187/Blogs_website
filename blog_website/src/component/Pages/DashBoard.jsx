import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Heading, Text, Button,Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getdata } from '../Redux/api'
import '../Styles/home.css'


export const DashBoard = () => {
const dispatch=useDispatch()

const{blogArray}=useSelector((store)=>{
  return store
})

useEffect(() =>{
 dispatch( getdata())
},[])

  return (
    <Box className='dashboard'>
      {
        blogArray && blogArray.map(({title,type,content})=>{
          return      <Card maxW='sm' size={'sm'}>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        
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
                minW: '136px',
              },
            }}
          >
            <Button flex='1' variant='ghost' >
              Like
            </Button>
            <Button flex='1' variant='ghost'>
              Comment
            </Button>
            <Button flex='1' variant='ghost'>
              Share
            </Button>
          </CardFooter>
        </Card>
        })
      }

    </Box>
  )
}
