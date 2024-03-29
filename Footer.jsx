import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'} >
    <Stack direction={["column", "row"]}>
        <VStack alignItems={'stretch'} w={"full "} px={'4'}>
            <Heading size="md" textTransform={'uppercase'} textAlign={['center', "left"]}>
                Connect to us for more updates.
            </Heading>
            <HStack borderBottom={"2px solid white"} py="2">
                <Input placeholder='Enter Email here...' border={'none'} borderRadius="none" outline={'none'} focusBorderColor='none'/>
                <Button p={'0'} colorScheme='purple' variant={"ghost"} borderRadius={'0 20px 20px 0'}>
                   <AiOutlineSend size={20}/> 
                </Button>
            </HStack>
        </VStack>
        <VStack w={"full"} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]} >
            <Heading size={'md'} textTransform={"uppercase"} textAlign={"center"}> 
                Video Hub
            </Heading>
            <Text>All rights received</Text>
        </VStack>
        <VStack w={"full"}>
            <Heading size={"md"} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={"Link"} colorScheme='purple'>
                <a href='https://youtube.com/@Ishanmkr'>Youtube</a>
            </Button>
            <Button variant={"Link"} colorScheme='purple'>
                <a href='https://instagram.com/may_be_ishan'>Instagram</a>
            </Button>
            <Button variant={"Link"} colorScheme='purple'>
                <a href='https://github.com/Ishanmkumar'>Github</a>
            </Button>
        </VStack>
    </Stack>
  </Box>
};

export default Footer