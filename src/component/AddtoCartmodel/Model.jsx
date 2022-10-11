import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import './model.css';
export const Model = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className='model'>
      <Button ref={btnRef} onClick={onOpen}>
        <img
          src='https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png'
          alt=''
          className=''
        />
        <Text className='cart-qty'>1</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
