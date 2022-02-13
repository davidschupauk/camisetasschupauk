import './ItemListContainer.css'
import {products , getProducts} from '../../asyncmock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getProducts.then((res)=>{
        setProducts(res)
        console.log(setProducts);
      });

      getProducts.catch((error)=>{
        console.log(error);
      })
    
  }, [])

  
      return (
          <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products = {products}/>
          </div>
      );
  }
  
  export default ItemListContainer;