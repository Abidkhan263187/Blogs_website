import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, Textarea, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Avatar, Heading, Text, Spinner, MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, handleDeleteEmployee, updateBlogObj } from '../Redux/api';
import '../Styles/home.css';
import { setLoading } from '../Redux/action';
import axios from 'axios';

export const DashBoard = () => {
  const dispatch = useDispatch();
  // modal part 
  const [isOpen, setIsOpen] = useState(false);
  const [editID, setEditID] = useState('')
  const [updateBlog, setUpdateBlog] = useState({
    title: '',
    type: '',
    content: ''
  });

  const handleOpen = (id) => {
    setIsOpen(true);
    setEditID(id)
  }

  const handleClose = () => setIsOpen(false);
  const handleUpdate = () => {

    dispatch(updateBlogObj(editID, updateBlog,token))
    getData()
  }

  const [Loading, setLoad] = useState(true)
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token)

  const { blogArray, load } = useSelector((store) => {
    return store
  })

  const[array,setArray]=useState([])
  const getData = async() => {
    try {
         await axios.get('http://localhost:5000/blog/dashboard', {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }).then(({data})=>{
            // dispatch(storeData(data.blogList))
          console.log(data.blogList)
            setArray(data.blogList)
            setLoad(false) 
        })
    } catch (error) {
        console.log(error);
    }
};

  useEffect(() => {
    getData()
    setLoad(false) 
  }, [token]);



  const handleDelete = (id) => {
    dispatch(handleDeleteEmployee(id))
    setLoad(!Loading) 
    getData()
  
  }

  return (
    <Box> 
      <Heading size={'md'}>My Blogs</Heading>
      {Loading ? (<Box margin={"5% auto"}>
        <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />
        <Heading mt={'10px'} size={"lg"}> Please wait ....</Heading>

      </Box>)
        : (<Box className='dashboard'>

          {array && array.length > 0 ? array.map(({ title, type, content, _id }) => (
            <><Card maxW='sm' padding={'20px 10px'} size='sm' key={_id}>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={array.email} src={array.email} />

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
                      <MenuItem onClick={() => handleOpen(_id)}>Edit</MenuItem>
                      <MenuItem onClick={() => handleDelete(_id)}> Delete</MenuItem>
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

          )) : <Box > <Heading size={"lg"} >  {token === '' ? "Please Login !" : '' }</Heading> </Box>
          }

        </Box>)
      }



    </Box>
  );
};
