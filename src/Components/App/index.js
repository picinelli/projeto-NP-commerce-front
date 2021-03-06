import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Register from '../Register'
import Login from '../Login'
import Products from '../Products'
import Checkout from '../Checkout'
import Done from '../Done'
import TokenProvider from '../../context/TokenContext'

export default function App() {
  return (
    <TokenProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </BrowserRouter>
    </TokenProvider>
  )
}