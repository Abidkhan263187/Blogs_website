import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Spinner, Stack } from '@chakra-ui/react';
import { loginUser, signUpUser } from '../Redux/api';
import { useDispatch,useSelector } from 'react-redux'
import '../Styles/login_signup.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { GoogleLoginButton } from './GoogleLoginButton';

const LoginForm = () => {


  const {login}=useSelector((store)=>{
    return store
  })
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleLoginSubmit = (e) => {
    // console.log(login)
    e.preventDefault();
    // console.log(loginData)
    dispatch(loginUser(loginData))
     
    setLoginData({
      email: '',
      password: '',
    })
  }

 

  return (
    <Box w={['100%', '', '', '30%']} m={'auto'} mx="auto" p="20px" >
      <form id="login_form" onSubmit={handleLoginSubmit}>
        <Stack spacing="20px">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              value={loginData.email}
              isRequired
              onChange={handleLoginChange}
            />
         
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              isRequired
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </FormControl>
          <Button type="submit">Login</Button>
          {/* <Box> <GoogleLoginButton/> </Box> */}
        </Stack>
      </form>
    </Box>
  );
};


const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    signUpUser(registerData)
    setRegisterData({
      name: '',
      email: '',
      password: '',

    })

  };


  return (
    <Box w={['100%', '', '', '30%']} m={'auto'} mx="auto" p="20px">
      <form id='signUp_form' onSubmit={handleRegisterSubmit}>
        <Stack spacing="10px">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              isRequired
              placeholder="Enter your name"
              value={registerData.name}
              onChange={handleRegisterChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              isRequired
              placeholder="Enter your email address"
              value={registerData.email}
              onChange={handleRegisterChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              isRequired
              placeholder="Enter your password"
              value={registerData.password}
              onChange={handleRegisterChange}
            />
          </FormControl>

          <Button type="submit">Register</Button>
        </Stack>
      </form>
    </Box>
  );
};

const LoginFormToggle = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  
  const {login_loading} = useSelector((store)=>{
    return store
  })

  return (
    <>
    {login_loading?(<Box margin={"10% auto"}>
        <Spinner m={"auto"} size='xl' color='blue.500' thickness='2px' emptyColor='gray.200' />
        <Heading mt={'10px'} size={"lg"}> Please wait ....</Heading>

      </Box>):(<Box mt={"40px"}>
      <Button
        mt={'40px'}
        onClick={toggleForm}
        mb="20px"
        color={isLoginForm ? 'white' : 'black'}
        mr="10px"
        bg={isLoginForm ? '#068181' : 'gray.300'}
      >
        {isLoginForm ? 'Register' : 'Login'}
      </Button>
      <Button
        mt={'40px'}
        onClick={toggleForm}
        bg={isLoginForm ? 'gray.300' : '#068181'}
        mb="20px"
        color={isLoginForm ? 'black' : 'white'}
        variant={isLoginForm ? 'outline' : 'solid'}
      >
        {isLoginForm ? 'Login' : 'Register'}
      </Button>
      {isLoginForm ? <LoginForm /> : <RegisterForm />}
    </Box>)}
    
    
    <Footer /></>
  );
};


export default LoginFormToggle;
