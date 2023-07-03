
import React, { useState } from 'react'
import { Button, FormControl, FormLabel, HStack, Input } from '@chakra-ui/react'
import   '../Styles/login_signup.css'
import {loginUser} from '../Redux/api'
import {useDispatch} from 'react-redux'
import { reload } from '../Redux/action'
import {useNavigate} from 'react-router-dom'
export const Login = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch()
   const [login,setlogin]=useState({
    email:'',
    password:''
  })

  const handlelogin=()=>{
   dispatch(loginUser(login))
   navigate('/')
  //  dispatch(reload(true))

    setlogin({
      email:'',
      password:''
    })
  }
  return (
    <HStack w={"30%"} m={"5% auto"}  className='login_form'>
      <FormControl  isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' type='email' name='email' value={login.email} onChange={(e)=>{setlogin({...login,[e.target.name]:e.target.value})}}  />
        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' type='password' name='password' value={login.password} onChange={(e)=>{setlogin({...login,[e.target.name]:e.target.value})}}  />
        <Button onClick={handlelogin}>Login</Button>
      </FormControl>
      
    </HStack>
  )
}
