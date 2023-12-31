
import React, { useEffect } from 'react'
import {  Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner, MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { useDispatch,useSelector } from 'react-redux';
import { singleBlogObj } from '../Redux/api';
import {useParams} from 'react-router-dom'
import { Footer } from './Footer';
import '../Styles/combine.css'
export const SingleBlog = () => {
  const dispatch=useDispatch()


const {id}=useParams()
// console.log(id)
  const {single}=useSelector((store)=>{
    return store
  })
    useEffect(()=>{
        dispatch(singleBlogObj(id))
        window.scrollTo(0, 0);
    },[id])


  return (
    <><Box mt={"80px"}>
      <Card  className='single_Blog_card'  key={single._id} bgImage="url('https://media.istockphoto.com/id/841983900/photo/defocused-soft-abstract-background.jpg?s=612x612&w=0&k=20&c=W763Um5zlZ75T4aLYyr45IfUlmtXlVk7g8hSfbsJ_Hc=')">
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap={['5','','','20']} alignItems='center' flexWrap='wrap'>
              <Avatar name={single.title} src={single.title} />

              <Flex gap={4}>
                <Heading size='sm'>{single.type}</Heading>
                <Heading size='sm'>{single.title}</Heading>
              </Flex>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text textAlign='center'>{single.content}</Text>
        </CardBody>

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: ['40px','','','106px']
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

    </Box>
   
    </>
  )
}
