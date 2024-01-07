import React from 'react'
import {Drawer, DrawerBody, DrawerHeader, DrawerOverlay,DrawerCloseButton,DrawerContent, Button, useDisclosure, VStack, HStack} from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi'
import {Link} from "react-router-dom";

const Header = () => {

  const {isOpen, onClose, onOpen} = useDisclosure();

  return (
  <>
  <Button pos={'fixed'}
  zIndex={'overlay'}
  top={'4'}
  left={'4'}
  colorScheme='purple'
  p={'0'}
  w={'20'}
  h={'20'}
  borderRadius={'full'}
  onClick={onOpen}>
    <BiMenuAltLeft size={"20"} />
  </Button>
  <Drawer isOpen = {isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Video Hub</DrawerHeader>
        <DrawerBody>
          <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/Videos'}>Videos</Link>
            </Button>
            <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/videos?category=free'}>Free videos</Link>
            </Button>
            <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
              <Link to={'/upload'}>Upload Video</Link>
            </Button>
          </VStack>

          <HStack pos={'absolute'} bottom={'10'} left={'0'} justifyContent={'space-evenly'} right={'0'}>
           <Button colorScheme='purple'>
            <Link to={'/login'}>Log In</Link>
           </Button>
           <Button colorScheme='purple' variant={'outline'}> 
            <Link to={'/signup'}>Sign Up</Link>
           </Button>
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  </>
  );
};

export default Header;
