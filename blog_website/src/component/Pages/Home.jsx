import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { homeBlogs } from '../Redux/api';
import '../Styles/home.css'
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
export const Home = () => {
  // const [homeArray, setHomeArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  const { homeBlogArray } = useSelector((store) => {
    return store
  })

  useEffect(() => {
    dispatch(homeBlogs())
    setLoading(false)

  }, [])

  return (

    <><><SectionOne />
      <SectionTwo />

      <Box className='home_Container' border={'1px solid'} m={'20px'}>
        <Heading bgColor={'#3182ce'} color={'white'} p={'5px'} size={'md'}> Public Blogs</Heading>
        {loading ? (<Box margin={"5% auto"}>
          <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />
          <Heading mt={'10px'} size={"lg"}> Please wait ....</Heading>
        </Box>)
          : (<Box flex className='home'>


            {homeBlogArray &&
              homeBlogArray.map(({ title, type, content, _id, createdAt }) => (
                <Card maxW='sm' m={'20px'} size='xs' key={_id} p={'10px 30px'} borderRadius={'10px'} bgImage="url('https://media.istockphoto.com/id/841983900/photo/defocused-soft-abstract-background.jpg?s=612x612&w=0&k=20&c=W763Um5zlZ75T4aLYyr45IfUlmtXlVk7g8hSfbsJ_Hc=')">
                  <CardHeader>
                    <Flex spacing='4'>
                      <Box w={'100%'}>

                        <Heading mt={'10px'} size='sm'>Title - {title}</Heading>
                        <Heading mt={'10px'} size='sm'>Topic - {type}</Heading>

                      </Box>
                    </Flex>
                  </CardHeader>

                  <CardBody w={"70%"} m={"4% auto 0% auto"} borderRadius={"10px"}>
                    <Text textAlign='center'>{content}</Text>
                    <Text textAlign={'start'} mt={'10px'}>{createdAt}</Text>
                  </CardBody>

                  <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    mt={'10px'}
                    //  border={"1px solid"}
                    sx={{
                      '& > button': {
                        minW: '50px'
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
              ))}
          </Box>)}

      </Box>
      </><SectionThree /></>
  )
}
