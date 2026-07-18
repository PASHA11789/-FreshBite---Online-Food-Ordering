import './App.css'
import SignIn from "./pages/SignIn.jsx"
import Homepage from "./pages/HomePage.jsx"
import CheckOut from "./pages/CheckOut.jsx"
import Menu from "./pages/Menu.jsx"
import Cart from "./pages/Cart.jsx"
import Orders from "./pages/Orders.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import Profile from "./pages/Profile.jsx"
import Header from "./components/Header.jsx"
import CartDrawer from "./components/CartDrawer.jsx"

import { Routes, Route, useLocation } from "react-router-dom"


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.toLowerCase() === "/signin";

  return (
    <>

      <main className='min-h-screen bg-[#FFF8F0] text-[#2D1B12] flex flex-col'>
        {!hideNavbar && <Header />}
        <CartDrawer />
        <Routes>
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </main>

    </>
  )

}

export default App
