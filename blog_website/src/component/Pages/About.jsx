import { Box, Text, Heading, Flex, Image, VStack } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import abid from '../Images/abid.jpg'
import { Footer } from './Footer';

export const About = () => {
  const carouselImages = [
    'https://www.searchenginejournal.com/wp-content/uploads/2018/04/Gummisig-About-Us-Page.jpg',
    'https://www.masaischool.com/blog/content/images/wordpress/2021/11/Mihir-Kumar.jpeg',
    'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg',
    
  ];

  return (
    <><Box p={4} >
      <Heading  mt={['40px','','','40px']} as="h1" mb={4} textAlign="center">
        About Us
      </Heading>

      <Text fontSize="xl" textAlign="center" mb={8}>
        Welcome to our blog! We are passionate about sharing insightful content with our readers.
      </Text>

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
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {carouselImages.map((imageUrl, index) => (
          <Box key={index}>
            <Image src={imageUrl} alt={`Image ${index + 1}`} w="97%" h="300px" objectFit="cover" />
          </Box>
        ))}
      </Carousel>

      <Box mt={8}>
        <Heading size="lg" textAlign="center" mb={4}>
          Our Mission
        </Heading>
        <Text textAlign="center">
          Our mission is to empower individuals with valuable knowledge by providing a
          platform for insightful and informative blog content. We aim to foster a community
          where people can share their expertise, experiences, and ideas to inspire and educate others.
          Inspiring Creativity: We are dedicated to fostering creativity through our blog app.
    

        </Text>
      </Box>

      <Box mt={20}>
        <Text fontSize="xl" textAlign="center" mb={4}>
         Developed By
        </Text>

        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <VStack spacing={4}>
            <Image src={abid} alt="Team Member 1" w="200px" h="200px" objectFit={"contain"} borderRadius="20%" />
            <Text>Abid khan</Text>
            <Text>Full Stack Web Developer</Text>
          </VStack>


          {/* Add moreteam members here */}
        </Flex>
      </Box>
    </Box><Footer /></>
  );
};
