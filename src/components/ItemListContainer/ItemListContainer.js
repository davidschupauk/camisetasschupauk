import './ItemListContainer.css'
import {getProducts} from '../../asyncmock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts(categoryId).then(item=>{
          setProducts(item)
        }).catch(err =>{
          console.log(err)
        }).finally(()=>{
          setLoading(false)
        })
  
     return(()=> {
       setProducts()
     })
    
  }, [categoryId])

  
      return (
          <div className='ItemListContainer'>
            {
              loading ? 
                <h1>Cargando...</h1>:
              products.length ? 
                <>
                  <h1>{greeting}</h1>
                  <div className='cards'>
                    <ItemList className='ItemList' products={products} />
                  </div>
                </>:
                <h1>No se encontraron Productos</h1>
            } 
          </div>
              
      );
  }
  
  export default ItemListContainer;