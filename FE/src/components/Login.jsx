import { useDisclosure } from '@chakra-ui/react';
import { Button, ModalBody, ModalFooter, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../redux/user/action';
const Login = () => {
    let [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginUser(formData))
        onClose()
    }
    return (
        <>
            <Button onClick={onOpen}>Login</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input ref={initialRef} placeholder='Email' onChange={(e) => setFormData((prev) => { return { ...prev, email: e.target.value } })} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input placeholder='Password' onChange={(e) => setFormData((prev) => { return { ...prev, password: e.target.value } })} />
                            </FormControl>

                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Login
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Login
