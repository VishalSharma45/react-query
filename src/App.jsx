import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Products'
import Product from './Product'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
