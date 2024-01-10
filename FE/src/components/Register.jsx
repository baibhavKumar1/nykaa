import { useDisclosure } from '@chakra-ui/react';
import { Button, ModalBody, ModalFooter, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useRef } from 'react';
const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = useRef();
    return (
        <>
            <Button onClick={onOpen}>Register</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Register</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Avatar</FormLabel>
                            <Input ref={initialRef} placeholder='Photo' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} placeholder='Name' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input ref={initialRef} placeholder='Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Register
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Register
