/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Text, Table, TableContainer, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react"
import edit from '../assets/edit-3.svg';
import deleteIcon from '../assets/trash-2.svg';
import more from '../assets/more-horizontal.svg';
// import ellipse5 from '../assets/ellipse-5.svg';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteProduct, getProduct } from "../redux/product/action";
import Editproduct from "./Editproduct";
const Orders = ({data}) => {
    const {name,gender,category,order}= data;
    const dispatch= useDispatch(); 
    const token= useSelector((store)=>store.AuthReducer.token)
    useEffect(()=>{
        dispatch(getProduct(token,data))
    },[data,token,dispatch])
    const handleDelete=(id)=>{
        dispatch(deleteProduct(token,id))
    } 
    const products= useSelector((store)=>store.ProductReducer.products);
    console.log(products)
    return (
        <div className="">
            <div className="flex justify-between m-2">
                <Text>Latest Orders</Text>
                <button>More -&gt;</button>
            </div>
            <TableContainer className="p-2">
                <Table variant='simple' size='sm'>
                    <Thead className="bg-rose-200" >
                        <Tr>
                            <Th>Product</Th>
                            <Th>Gender</Th>
                            <Th>Category</Th>
                            <Th isNumeric>Price</Th>
                            <Th>Description</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { products.length>0 && 
                        products.map((item)=>{
                            return(
                            <Tr key={item._id}>
                            <Td><div className="flex items-center gap-2">
                                <img src={item.picture} className="w-10"/>
                                <Text> {item.name}</Text>
                            </div></Td>
                            <Td>{item.gender}</Td>
                            <Td>{item.category}</Td>
                            <Td isNumeric>{item.price}</Td>
                            <Td >{item.description}</Td>
                            <Td>
                            <div className="flex gap-2">
                                <button><img src={more}/></button>
                                {/* <div><img src={edit}/></div> */}
                            <Editproduct id={item._id}/>
                                <button onClick={()=>handleDelete(item._id)}><img src={deleteIcon}/></button>
                            </div>
                            </Td>
                        </Tr>)
                        })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Orders
