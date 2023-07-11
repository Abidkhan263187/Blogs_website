import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import  '../Styles/combine.css'


const Card = ({ head, content, src, sub }) => {
    return <Flex direction={["column", "row"]} className='SecThree_fst'>
    <Box className='sec_three_left' w={["100%", "40%"]} p={["20px", "20px"]} >
      <Image className='sec_three_img' borderRadius={"10px"} height={"95%"} src={src} />
    </Box>
    <Box w={["100%", "60%"]} className='sec_three_right' p={["20px", "20px"]} >
      <Box h={"100%"} border={'1px solid'}  pt={'1%'}>
        <Heading ml={"20px"} textAlign={'start'} size={'lg'}> {head}</Heading>
        <Heading ml={"20px"} textAlign={'start'} size={'md'}> {sub} </Heading>
        <Text m={" 0px 20px"} textAlign={"start"} mt={'20px'}>{content} </Text>
      </Box>
    </Box>
  </Flex>
}
const RevCard = ({ head, content, src, sub }) => {
    return <Flex bgColor={'#1a202c'} direction={["column", "row"]}  color={'white'}  className='SecThree_fst' >

        <Box w={["100%","60%"]} className='sec_three_right' p={"20px "} >
            <Box h={"100%"} w={['100%','','','',]} pt={'1%'} border={'1px solid gray'}>
                <Heading ml={"20px"} textAlign={'start'} size={'lg'}> {head}</Heading>
                <Heading ml={"20px"} mt={'5px'} textAlign={'start'} size={'md'}> {sub} </Heading>
                <Text m={" 10px 20px"} textAlign={"start"} mt={'20px'}>{content} </Text>
            </Box>
        </Box>
        <Box className='sec_three_left' w={["100%","","45%","40%"]} p={"20px "} >
            <Image className='sec_three_img' borderRadius={"10px"} height={"90%"} src={src} />
        </Box>
    </Flex>
}

export const SectionThree = () => {
    return (
        <Box className='sectionThree_Container'  p={"20px"} m={'20px'}>
            <Heading bgColor={'#068181'} color={'white'} p={'5px'} size={'md'} mb={'20px'}> All time Favroute </Heading>

            <Card head={'Living Life to the Fullest'} sub={'Nurturing a Life Filled with Optimism'} src={'https://www.timesonline.com/gcdn/authoring/2016/03/06/NBCT/ghows-PA-80bfcd7e-7372-4960-838f-3579f6e91d2c-83c4d428.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp'} content={'Life is a beautiful journey, and a positive mindset acts as our compass, guiding us through challenging times and propelling us forward in moments of triumph. It empowers us to face adversity with resilience, to overcome obstacles with determination, and to learn valuable lessons from setbacks. With positivity as our foundation, we have the strength to keep pushing forward, knowing that every experience serves a purpose in our personal development.'} />
            <RevCard  head={'Influencer Marketing'} sub={'Harnessing the Power of Influencers for Brand Growth'} src={'https://grin.co/wp-content/uploads/2020/08/IM_SA_Influencers_for_Every_Stage_of_the_Influencer_Marketing_Funnel_2022-Q3-07_FINAL_BLGI_960x640_01-1.webp'} content={'One of the key benefits of influencer marketing is the ability to reach a highly targeted audience. Influencers often have a niche focus or expertise, which allows brands to connect with a specific group of consumers who are already interested in their industry or niche. This targeted approach helps to ensure that the brands message reaches the right people, increasing the likelihood of conversions and sales'} />
            <Card head='Mount Everest' src='https://ychef.files.bbci.co.uk/976x549/p01rpz8r.jpg' sub='Discover the Majestic Beauty of Hills' content={'Hills are natures magnificent creations that offer breathtaking landscapes and serene environments, making them an ideal destination for travelers seeking tranquility and scenic beautyWith their towering peaks, lush green valleys, and cascading waterfalls, hills provide a perfect escape from the hustle and bustle of city life, allowing travelers to immerse themselves in the soothing embrace of nature'} />
            <RevCard head={'Impact of Technology'} sub={'Shaping the Future in a Connected World'} src={'https://elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg'} content={'Firstly, technology has enhanced communication, breaking down geographical barriers and enabling instant connectivity through platforms such as social media, video conferencing, and messaging apps. It has facilitated global collaboration, knowledge sharing, and strengthened relationships across borders. Additionally, technology has revolutionized industries, driving automation, streamlining processes, and boosting productivity. It has empowered businesses to reach wider audiences, personalize experiences, and deliver innovative products and services.'} />
            <Card head={'Importance of Study'} sub={'The Power of Learning: Unlocking Potential through Study'} src={'https://calvin.edu/dotAsset/137e6845-ec8a-4c58-b097-06af44554088.jpg'} content={'Engaging in study brings numerous benefits. Firstly, it provides individuals with the opportunity to explore new subjects, ideas, and perspectives. Through study, people can expand their horizons, develop a broader understanding of the world, and cultivate a sense of intellectual curiosity. Study also fosters the development of critical thinking and problem-solving skills, allowing individuals to analyze information, make informed decisions, and tackle challenges effectively.'} />


        </Box>
    )
}
