import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { homeBlogs } from '../Redux/api';
import { Link } from 'react-router-dom'
import '../Styles/home.css'
import { SectionOne } from './SectionOne';
import { SectionTwo } from './SectionTwo';
import { SectionThree } from './SectionThree';
import { Footer } from './Footer';
import { blogID } from '../Redux/action';
import { useSearchParams } from 'react-router-dom';
export const Home = () => {
  // const [homeArray, setHomeArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const { homeBlogArray } = useSelector((store) => {
    return store
  })
  function getDaysAgo(createdAt) {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);
    const timeDifference = currentDate.getTime() - createdAtDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysAgo === 0) {
      return "Today"
    }
    return `${daysAgo} days ago`
  }
  let currePage=1
const [pageNo,setPageNo]=useState(currePage)

  useEffect(() => {
    setLoading(true)
    dispatch(homeBlogs(pageNo))
    setLoading(false)

  }, [pageNo,loading])


  const handlePage=(payload)=>{
      setPageNo((prev)=>parseInt(prev+payload))
   
  }
  return (

    <><><><SectionOne />
      <SectionTwo />

      <Box className='home_Container' m={'20px'}>
        <Heading bgColor={'#068181'} color={'white'} p={'5px'} size={'md'}> Public Blogs</Heading>
        {loading ? (<Box margin={"8% auto"}>
          <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />
          <Heading mt={'10px'} size={"lg"}> Please wait ....</Heading>
        </Box>)
          : (<Box className='home' mt={'20px'}>
            {homeBlogArray &&
              homeBlogArray.map(({ title, type, content, _id, createdAt }) => (
                <Card maxW='sm' m={'20px'} size='xs' key={_id} p={'10px 30px'} borderRadius={'10px'} bgImage="url('https://media.istockphoto.com/id/841983900/photo/defocused-soft-abstract-background.jpg?s=612x612&w=0&k=20&c=W763Um5zlZ75T4aLYyr45IfUlmtXlVk7g8hSfbsJ_Hc=')">
                  <CardHeader>
                    <Flex spacing='4'>
                      <Box w={'100%'}>
                        <Heading mt={'10px'} size='sm' fontWeight={'750'}>{title}</Heading>
                      </Box>
                    </Flex>
                  </CardHeader>

                  <CardBody w={"70%"} m={"4% auto 0% auto"} borderRadius={"10px"}>
                    <Text textAlign='center'>{content.split(' ').slice(0, 10).join(' ')}. . .
                      <Link ml={"5px"} to={`/singleBlog/${_id}`} style={{ color: '#3182ce', fontWeight: '700' }} >
                        read more
                      </Link></Text>
                    <Text textAlign={'center'} fontSize={'small'} color={'gray'} mt={'10px'}>posted : {getDaysAgo(createdAt)}</Text>

                  </CardBody>

                  <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    mt={'10px'}
                    //  
                    sx={{ '& > button': { minW: '50px' } }}
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

        <Flex  w={['55%','','20%','15%']} m={'auto'} alignItems={'center'} justifyContent={'space-between'}>
          <Button variant={'outline'} size={'sm'} isDisabled={pageNo === 1} onClick={()=>handlePage(-1)} >Prev</Button>
          <Button  size={'sm'}>{pageNo}</Button>
          <Button variant={'outline'}  size={'sm'} isDisabled={homeBlogArray.length < 3} onClick={()=>handlePage(1)} onCLick>Next</Button>
        </Flex>

      </Box>
    </><SectionThree />

    </><Footer /></>
  )
}
