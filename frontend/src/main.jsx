import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import { ClerkProvider } from '@clerk/react'
import Allrooms from './pages/Allrooms.jsx'
import Roomdetail from './pages/Roomdetail.jsx'
import Bookings from './pages/Bookings.jsx'

const routebrain=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route index element={<Home/>}/>
      <Route path='/rooms' element={<Allrooms/>}/>
      <Route path='/rooms/:id' element={<Roomdetail/>}/>
      <Route path='/my-bookings' element={<Bookings/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <ClerkProvider>

        <RouterProvider router={routebrain} />
    </ClerkProvider>
      
)
