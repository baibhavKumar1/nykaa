//import './Topheader.css'
import searchNormal from '../assets/search-normal.svg'
import Orders from './Orders'
import bell from '../assets/notification-bing.svg';
import { Select } from '@chakra-ui/react';
import Login from './Login';
import Addproduct from './Addproduct';
import Register from './Register';
import userphoto from '../assets/profile-avtar.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Topheader = () => {
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  console.log(isAuth)
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [gender, setGender] = useState("");
  let [order, setOrder] = useState("");
  return (
    <div className='w-full border'>
      <div className=' w-5/6 h-full mx-auto'>
        <div className='top-header flex justify-between w-full m-auto my-6 '>
          <div className='search-bar flex gap-2 border px-2 rounded-xl'>
            <img src={searchNormal} />
            <input placeholder='Search' onChange={(e) => setName(e.target.value)} className='outline-none px-1 rounded-xl' />
          </div>
          <div className='frame3 flex gap-2'>
            <img src={bell} />
            {isAuth==false?
            <div className='flex gap-2'>
            <Login/>
            <Register/></div>:<div><img src={userphoto} /></div>}
          </div>
        </div>
        <div className='flex gap-4 pb-24'>
          <div className='w-1/4'>
            <Select placeholder='Filter By Gender' onChange={(e) => setGender(e.target.value)}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Select>
          </div>
          <div className='w-1/4'>
            <Select placeholder='Filter By Category' onChange={(e) => setCategory(e.target.value)}>
              <option value='makeup'>Makeup</option>
              <option value='skincare'>Skincare</option>
              <option value='haircare'>Haircare</option>
            </Select>
          </div>
          <div className='w-1/4'>
            <Select placeholder='Sort By Price' onChange={(e) => setOrder(e.target.value)}>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </Select>
          </div>
          <Addproduct/>
        </div>
        <Orders data={{name,gender,category,order}}/>
      </div>
    </div>
  )
}

export default Topheader
