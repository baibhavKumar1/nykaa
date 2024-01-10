import { useDisclosure } from '@chakra-ui/react';
import { Select, Button, ModalBody, ModalFooter, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Input, FormControl } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/product/action';
import edit from '../assets/edit-3.svg';
// eslint-disable-next-line react/prop-types
const Editproduct = ({id}) => {
    const isAuth = useSelector((store) => store.AuthReducer.isAuth)
    // console.log(isAuth)
    let [formData, setFormData] = useState({
        picture: "",
        name: "",
        description: '', 
        gender: '',
        category: '',
        price: null
    });
    const token = useSelector((store) => store.AuthReducer.token) || localStorage.getItem("token") || "";
        // console.log(token)
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        dispatch(addProduct(token,formData))
        onClose()
    }
    return (
        <>
            {isAuth == true ?
                <>
                    <button onClick={onOpen}><img src={edit}/></button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{id}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={4}>
                                <FormControl>

                                    <Input ref={initialRef} placeholder='Image URL' onChange={(e) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                picture: e.target.value,
                                            };
                                        })
                                    } />
                                </FormControl>

                                <FormControl mt={2}>

                                    <Input placeholder='Name' onChange={(e) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                name: e.target.value,
                                            };
                                        })
                                    }/>
                                </FormControl>
                                <FormControl mt={2}>

                                    <Input placeholder='Description' onChange={(e) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                description: e.target.value,
                                            };
                                        })
                                    }/>
                                </FormControl>
                                <FormControl mt={2}>

                                    <Select placeholder='Select gender' onChange={(e) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                gender: e.target.value,
                                            };
                                        })
                                    }>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                    </Select>
                                </FormControl>
                                <FormControl mt={2}>

                                    <Select placeholder='Select category' onChange={(e) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                category: e.target.value,
                                            };
                                        })
                                    }>
                                        <option value='makeup'>Makeup</option>
                                        <option value='skincare'>Skincare</option>
                                        <option value='haircare'>Haircare</option>
                                    </Select>
                                </FormControl>
                                <FormControl mt={2}>

                                    <Input type='number' placeholder='Price' onChange={(e) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                price: e.target.value,
                                            };
                                        })
                                    }/>
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                                    Add
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal></> :
                <button disabled={true} className='rounded-xl p-1 px-2 bg-gray-200'>Add Product</button>}
        </>
    )
}

export default Editproduct
