import React, { useState } from 'react'
import { Button, FormControl, FormLabel, HStack, Input, Textarea } from '@chakra-ui/react'
import { signUpUser } from '../Redux/api'
import '../Styles/login_signup.css'
export const SignUp = () => {



  const [signup,setSignup]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleSignup=()=>{
   signUpUser(signup)
  
    setSignup({
      name:'',
      email:'',
      password:''
    })
  }
  return (
    <HStack w={"30%"} m={"5% auto"}  className='signUp_form'>
      <FormControl  isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Name' type='text' name='name' value={signup.name} onChange={(e)=>{setSignup({...signup,[e.target.name]:e.target.value})}} />
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email' type='email' name='email' value={signup.email} onChange={(e)=>{setSignup({...signup,[e.target.name]:e.target.value})}}  />
        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' type='password' name='password' value={signup.password} onChange={(e)=>{setSignup({...signup,[e.target.name]:e.target.value})}}  />
        <Button onClick={handleSignup}>Sign Up</Button>
      </FormControl>
      
    </HStack>
  )
}
