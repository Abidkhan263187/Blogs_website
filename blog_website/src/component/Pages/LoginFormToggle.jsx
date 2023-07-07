import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { loginUser, signUpUser } from '../Redux/api';
import { useDispatch } from 'react-redux'
import '../Styles/login_signup.css'
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';

const LoginForm = () => {

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
    e.preventDefault();
    console.log(loginData)
    dispatch(loginUser(loginData))
    navigate('/')
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
              onChange={handleLoginChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
          </FormControl>
          <Button type="submit">Login</Button>
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
              placeholder="Enter your name"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
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

  return (
    <><Box mt={"40px"}>
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
    </Box><Footer /></>
  );
};


export default LoginFormToggle;
