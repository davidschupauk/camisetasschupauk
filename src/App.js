import './App.css';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/Cart/Cart'
import {CartContextProvider} from '../src/context/CartContext'



function App() {
  

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Hola Casaqueros!"}/>}/>
              <Route path='/about' element={<h1>About</h1>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Hola Casaqueros!"}/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
