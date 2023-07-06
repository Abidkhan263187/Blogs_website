import React, { useState } from 'react'
import { Button, FormControl, FormLabel, HStack, Input, Textarea } from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import { postBlog } from '../Redux/api'
import '../Styles/combine.css'
export const CreateBlogs = () => {

  const dispatch=useDispatch()
  const [blog,setBlog]=useState({
    title:'',
    type: '',
    content:''
  })

  const handlePost=()=>{
    dispatch(postBlog(blog))
    console.log(blog)
    alert("posted")
    setBlog({
      title:'',
      type: '',
      content:''
    })
  }

  return (
    <HStack w={"80%"} m={"10% auto 0 auto"} className='create_blog'>
    <FormControl className='Create_container'>
      <FormLabel>Title</FormLabel>
      <Input placeholder='Title' name='title' value={blog.title} onChange={(e)=>{setBlog({...blog,[e.target.name]:e.target.value})}} />
      <FormLabel>Type</FormLabel>
      <Input placeholder='Type' name='type' value={blog.type} onChange={(e)=>{setBlog({...blog,[e.target.name]:e.target.value})}} />
      <FormLabel>Content</FormLabel>
      <Textarea  placeholder='Write....' name='content' value={blog.content} onChange={(e)=>{setBlog({...blog,[e.target.name]:e.target.value})}}/>
      <Button  onClick={handlePost}>Post</Button>
    </FormControl>
   
  </HStack>
  )
}
