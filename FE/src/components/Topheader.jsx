import './Topheader.css'
import searchNormal from '../assets/search-normal.svg'
const Topheader = () => {
  return (
    <div className='top-header'>
      <div className='search-bar'>
        <img src={searchNormal}/>
        <input placeholder='Search' style={{border:"none"}}/>
      </div>
      <div className='frame3'></div>
    </div>
  )
}

export default Topheader
