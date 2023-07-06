import React, { useEffect, useState } from 'react';
import {Image, Modal, ModalOverlay, ModalContent, ModalHeader, Textarea, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner, MenuButton, MenuItem, MenuList, Menu, Spacer, Center } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteEmployee, updateBlogObj } from '../Redux/api';
import '../Styles/home.css';
import { setLoading } from '../Redux/action';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { useSearchParams } from 'react-router-dom';
export const DashBoard = () => {
  const carouselImages = [
    'https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg',
    'https://www.blue.ps/assets/img/services/digital-content.png',
    'https://images.yourstory.com/cs/wordpress/2016/11/leadership-lessons-from-travelling.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces',
    'https://community.thriveglobal.com/wp-content/uploads/2018/01/techandsuccess.jpg',
    'https://www.e-spincorp.com/wp-content/uploads/2019/01/Media-Entertainment-1024x512.jpg',
    'https://www.potomac.edu/wp-content/uploads/2014/05/university-student-life.jpg',
    'https://cdn.mos.cms.futurecdn.net/2gHPhDWjds5q8nqLM2FG9Y.jpg'
    // Add more image URLs here
  ];
  const dispatch = useDispatch();
  // modal part 
  const [isOpen, setIsOpen] = useState(false);
  const [editID, setEditID] = useState('')
  const [updateBlog, setUpdateBlog] = useState({
    title: '',
    type: '',
    content: ''
  });
  const [searchParams,setSearchParams] = useSearchParams()

  const handleOpen = (id) => {
    setIsOpen(true);
    setEditID(id)
  }

  const handleClose = () => setIsOpen(false);

  const [Loading, setLoad] = useState(true)
  const token = JSON.parse(localStorage.getItem('token'));
  // const { blogArray, load } = useSelector((store) => {
  //   return store
  // })

  const[array,setArray]=useState([])
  const getData = async () => {
    const type = searchParams.get('type');
    const sortby=searchParams.get('sortby');
    const order=searchParams.get('order');
    let url = 'http://localhost:5000/blog/dashboard';
  
    if (type !== null && type !== '') {
      url += `?type=${type}`;
      console.log("type=> ",url)
    }

    if(order !== null){
      if(type ){
        url+=`&sortBy=createdAt&order=${order}`;
        console.log(url)
      }else{
        url+=`?sortBy=createdAt&order=${order}`;
      }
    }
   
    try {
      await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(({ data }) => {
        console.log(data.blogList);
        setArray(data.blogList);
        setLoad(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getData();
    setLoad(false);
    window.scrollTo(0, 0);
  }, [token, Loading, searchParams]);
  
  const handleUpdate = () => {

    dispatch(updateBlogObj(editID, updateBlog,token))
    getData()
    setLoad(!Loading) 
  }


  const handleDelete = (id) => {
    dispatch(handleDeleteEmployee(id))
    setLoad(!Loading) 
    getData()
  
  }

  return (
    <Box> 
      <Heading   p={'5px'} mt={'60px'} size={'lg'}>My Blogs</Heading>
       <Flex justifyContent={'space-between'} p={'0px 60px'} className='sorting_nav'>
        <Box className='sorting_nav_left' onClick={(e)=>{
          setSearchParams({
            type:e.target.value
          })
        }}>
          <Button >Filter</Button>
          <Button value={"Travelling"}>Travel</Button>
          <Button value={'Marketing'}>Market</Button>
          <Button value={'Life'} >Life</Button>
          <Button value={'Technology'} >Technology</Button>
        </Box>
        <Box className='sorting_nav_right' mr={"15px"} onClick={(e)=>{
          setSearchParams({
            sortBy:"createdAt",
            order:e.target.value
          })
        }}>
        <Button>Sort</Button>
          <Button value={'asc'} >asc</Button>
          <Button value={'desc'}>desc</Button>
        </Box>
       </Flex>
      {Loading ? (<Box margin={"5% auto"}>
        <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />
        <Heading mt={'10px'} size={"lg"}> Please wait ....</Heading>

      </Box>)
        : (<Box className='dashboard'>

          {array && array.length > 0 ? array.map(({ title, type, content, _id }) => (
            <><Card maxW='sm'size='sm'  key={_id}  p={'10px 30px'} borderRadius={'10px'} bgImage="url('https://media.istockphoto.com/id/841983900/photo/defocused-soft-abstract-background.jpg?s=612x612&w=0&k=20&c=W763Um5zlZ75T4aLYyr45IfUlmtXlVk7g8hSfbsJ_Hc=')">
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={title} src={title} />

                    <Flex gap={4}>
                     
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
                      <MenuItem onClick={() => handleOpen(_id)}>Edit</MenuItem>
                      <MenuItem onClick={() => handleDelete(_id)}> Delete</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text textAlign='center'>{content.split(' ').slice(0,25).join(' ')}. . . 
                     <Link ml={"5px"}  to={`/singleBlog/${_id}`} style={{color:'#3182ce',fontWeight:'700'}} >
                      read more
                    </Link></Text>
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
              <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update your Blog</ModalHeader>
                  <ModalCloseButton />

                  <ModalBody>
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input
                        value={updateBlog.title}
                        name='title'
                        onChange={(e) => setUpdateBlog({ ...updateBlog, [e.target.name]: e.target.value })}
                        placeholder="Enter title" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Type</FormLabel>
                      <Input
                        value={updateBlog.type}
                        name='type'
                        onChange={(e) => setUpdateBlog({ ...updateBlog, [e.target.name]: e.target.value })}
                        placeholder="Enter type" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Content</FormLabel>
                      <Textarea
                        value={updateBlog.content}
                        name='content'
                        onChange={(e) => setUpdateBlog({ ...updateBlog, [e.target.name]: e.target.value })}
                        placeholder="Enter content" />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button backgroundColor='#068181' color={'white'} mr={3} onClick={handleUpdate}>
                      Update
                    </Button>

                  </ModalFooter>
                </ModalContent>
              </Modal></>

          )) : <Box > <Heading size={"lg"} >  {token === '' ? "Please Login !" : 'no blogs' }</Heading> </Box>
          }

        </Box>)
      }
      <Spacer/>
<Box p={10}>
  <Center> <Heading>Capture World in Your Own Word's</Heading> </Center>
 <Text m={'10px 0px'}>From wanderlust-filled travel tales to tantalizing food adventures and insightful
   personal growth insights, our blog is a diverse tapestry of captivating stories that
    will inspire, nourish, and ignite your curiosity.</Text>
     
<Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
      
      >
        {carouselImages.map((imageUrl, index) => (
          <Box key={index}>
            <Image src={imageUrl} alt={`Image ${index + 1}`} w="97%" h="200px" objectFit="cover" />
          </Box>
        ))}
      </Carousel>

      </Box>
      <Footer/>
    </Box>
  );
};
