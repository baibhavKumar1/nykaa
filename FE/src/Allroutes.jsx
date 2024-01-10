import { Route,Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Analytics from "./Analytics"

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
