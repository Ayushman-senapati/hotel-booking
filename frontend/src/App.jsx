import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'

const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner")

  return (
    <div>
     {!isOwnerPath?<Navbar/>:""}
     <div className='min-h-[70vh]'>
     <Outlet/>
     <Footer/>
     </div>
    </div>
  )
}

export default App
