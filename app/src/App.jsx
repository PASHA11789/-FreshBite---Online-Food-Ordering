import './App.css'
import SignIn from "./pages/SignIn.jsx"
import Homepage from "./pages/HomePage.jsx"
import CheckOut from "./pages/CheckOut.jsx"
import Menu from "./pages/Menu.jsx"
import Cart from "./pages/Cart.jsx"



import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>

      <main className='min-h-screen bg-[#FFF8F0] text-[#2D1B12] flex flex-col'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </main>

    </>
  )

}

export default App
