import Home from './components/Home'
import Product from './components/Product'
import Services from './components/Services'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <>
    <Nav/>
    <Routes className='font-bold text-2xl bg-red-300'>
      <Route path='/' element={<Home/>} />

      <Route path='/product' element={<Product/>} > 
      <Route path='/product/detail' element={<ProductDetails/>} />
      </Route>

      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} >
      </Route>
    </Routes>

    
    </>
  )
}

export default App