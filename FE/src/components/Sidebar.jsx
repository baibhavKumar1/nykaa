import image from '../assets/element-3.svg'
import clipboardTick from '../assets/clipboard-tick.svg'
import setting2 from '../assets/setting-2.svg'
//import './Sidebar.css'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='s-idebar text-center w-1/5'>
      <p className='logo text-2xl text-blue-700 font-semibold my-8'>Nyka Dashboard</p>
      <div className='sidebar w-max m-auto'>
      <div className='frame-1 flex flex-col gap-8'>
        <NavLink to='/'><div className='group-34633 flex gap-2'>
            <img src={image}/>
            <p className='Dashboard'>Dashboard</p>
        </div></NavLink>

        <NavLink to='/analytics'><div className='flex gap-2'>
            <img src={clipboardTick}/>
            <p>Analytics</p>
        </div></NavLink>
        <NavLink to='/setting'><div className='flex gap-2'>
            <img src={setting2}/>
            <p>Logout</p>
        </div></NavLink>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
