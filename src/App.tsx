import './App.css'
import ProductPage from './components/FakeProduct/ProductPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/FakeProduct/CartPage'
import ProductDetails from './components/FakeProduct/ProductDetails'
import LoginPage from './components/Portfolio/LoginPage'
import Dashboard from './components/Portfolio/Dashboard'
import RegisterPage from './components/Portfolio/RegisterPage'
import Portfolio from './components/Portfolio/Portfolio'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/products" element={<ProductPage />} />
      <Route path='/carts' element={<CartPage/>} /> 
      <Route path='/products/:id' element={<ProductDetails/>} /> 
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/portfolio' element={<Portfolio/>} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
