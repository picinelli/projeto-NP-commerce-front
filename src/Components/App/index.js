import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";

import Register from '../Register'
import Login from '../Login'
import Products from '../Products'
import Checkout from '../Checkout'
import Done from '../Done'
import TokenProvider from '../../context/TokenContext'
import MyProductsContext from '../../context/MyProductsContext'

export default function App() {
  const [myProducts, setMyProducts] = useState([])

  return (
    <TokenProvider>
    <MyProductsContext.Provider value={{myProducts, setMyProducts}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </BrowserRouter>
    </MyProductsContext.Provider>
    </TokenProvider>
  )
}