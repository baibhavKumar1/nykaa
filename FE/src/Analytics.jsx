import Sidebar from "./components/Sidebar"
import Category from "./components/chart/category"
import Gender from "./components/chart/gender"


const Analytics = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex rounded-xl m-auto w-full border">
      <Category/>
      <Gender/>
      </div>
    </div>
  )
}

export default Analytics
