import image from '../assets/element-3.svg'
import clipboardTick from '../assets/clipboard-tick.svg'
import setting2 from '../assets/setting-2.svg'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='s-idebar'>
      <p className='logo'>Nyka Dashboard</p>
      <div className='sidebar'>
      <div className='frame-1'>
        <div className='group-34633'>
            <img src={image}/>
            <p className='Dashboard'>Dashboard</p>
        </div>
        <div>
            <img src={clipboardTick}/>
            <p>Analytics</p>
        </div>
        <div>
            <img src={setting2}/>
            <p>Analytics</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
