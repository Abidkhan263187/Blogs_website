import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import '../Styles/Section.css'
import { Link } from "react-router-dom";

 const Card = ({title,content,src,link}) => {
  return (
    <Box className="card">
      <Box as="img" src={src} alt="Card Image" className="card-image" />
      <Box className="card-overlay">
        <h3 className="card-title" style={{fontWeight:"700"}}>{title}</h3>
        <p className="card-description">{content}</p>
        <Link to={link}> <Button bgColor={'#068181'} color={'white'} mt="10px" size="sm">Read more</Button></Link>
      </Box>
    </Box>
  );
};

export const SectionTwo = () => {
  return (
    <Box m={'20px'}  p={'30px 10px'}>
       <Heading bgColor={'#068181'} color={'white'} p={'5px'} size={'md'}>Blog Categories</Heading>
    <Flex mt={'30px'}  gap="20px" justifyContent="center"  flexWrap="wrap">
      <Card src='https://media.self.com/photos/5f0885ffef7a10ffa6640daa/4:3/w_5240,h_3929,c_limit/travel_plane_corona.jpeg' title="Travel" content='Delve into captivating stories, insightful perspectives, and valuable insights as our blog takes you on a thought-provoking and informative journey.' link='https://www.ourbetterworld.org/story/giving-guide-experiences-retreats?gclid=CjwKCAjwzJmlBhBBEiwAEJyLu9W9qNGByPpbKJIogD15olq2ljjgTxlvzPicwklK25_WKpvacajltRoCZFUQAvD_BwE'/>
      <Card src='https://images.unsplash.com/photo-1589820745206-c6b6d3602361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbWFya2V0fGVufDB8fDB8fHww&w=1000&q=80' title="Marketing" content={'Find and write blog content that engages, inspires, and drives results, trust our expertise to amplify your brand and captivate your audience'} link={'https://digitalagencynetwork.com/growth-uncovered-what-is-an-agency-partner-program/'}/>
      <Card src='https://static.vecteezy.com/system/resources/previews/024/075/630/large_2x/realistic-portrait-of-old-muslim-english-couple-wearing-traditional-attire-generative-ai-photo.jpg' title={"Life"} content={'In a world filled with ups and downs, embracing a positive outlook can transform our lives and the lives of those around us'} link='https://timesofindia.indiatimes.com/readersblog/thoughts-blog/the-journey-of-life-11164/'/>
      <Card src='https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg' title='Technology' content={'Explore the intersection of technology and creativity in our blog, where ideas flourish and innovation takes center stage'} link='https://draft.dev/learn/the-best-technical-writing-blogs'/>
    </Flex>
    </Box>
  );
};


