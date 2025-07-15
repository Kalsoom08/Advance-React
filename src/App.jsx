import React from 'react'
import {Home} from './Pages/Home';
import {Product} from './Pages/Product';
import {ProductDetail} from './Pages/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Provider from '../src/Provider/productProvider';

const App = () => {
  return (
    <div>
      
      <NavBar/>
      <Provider>
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/products' element={<Product/>} />
        <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      </Routes>
      </Provider>
    </div>
  )
}

export default App