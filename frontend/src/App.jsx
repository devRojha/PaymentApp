import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Successfull } from "./pages/Successfull"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/>
        <Route path="/successfull" element={<Successfull />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
