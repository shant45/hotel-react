import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Hotels from "./pages/Hotels"
import Booking from "./pages/Booking"
import Admin from "./pages/Admin"
import MyBookings from "./pages/MyBookings"
import Profile from "./pages/Profile"

function App() {

 return (
  <>
    <Navbar/>

    <div className="container mt-4">

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>

    </div>

    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
  </>
 )
}

export default App
