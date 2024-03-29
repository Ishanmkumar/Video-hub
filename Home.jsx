import { Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const HeadingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl",
};

const Home = () => {
return ( <Box>
    <Mycarousel />
    <Container maxWidth={'container.xl'} minH={'100vh'} p='16'>
        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} m="auto">
            Services
        </Heading>
        <Stack h="full" p={"4"} alignItems={'center'} direction={['column','row']}>
            <Image  src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
            As of my last knowledge update in January 2022, there isn't a specific "Video Hub" service that is widely known or recognized. However, there are several popular video hubs or platforms that provide various video-related services. Please note that the information might have changed since my last update, so it's a good idea to check for the latest developments.
            </Text>
        </Stack>
    </Container>
</Box>
  );
};

const Mycarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} 
    showArrows={false}>
         <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...HeadingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Night life is cool
      </Heading>
    </Box>
    </Carousel>
);

export default Home;