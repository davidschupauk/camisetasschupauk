import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/Cart/Cart'


function App() {
  const [route, setRoute] = useState({
    path: 'list',
    id: 1
  });


  return (
    <div className="App">
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
      </div>
  );
}

export default App;
