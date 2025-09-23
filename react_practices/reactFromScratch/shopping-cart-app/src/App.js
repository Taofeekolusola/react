import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { fetchProducts } from './features/products/productsSlice'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col">
      <Navigation />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App