import './App.css'
import Sidebar from './components/Sidebar'
import Topheader from './components/Topheader'

function Dashboard() {
  return (
    <div className='admin h-screen border-red-900 flex'>
      <Sidebar/>
      <Topheader/>
    </div>
  )
}

export default Dashboard
