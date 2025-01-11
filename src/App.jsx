import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import NotFound from './components/NotFound'
import './index.css'
import DetailPage from './pages/DetailPage'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='collection' element={<Collection />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='place-order' element={<PlaceOrder />} />
        <Route path='order' element={<Order />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
    <div className='max-w-[1320px] mx-auto '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App