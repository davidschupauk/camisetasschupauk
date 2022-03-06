import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from "../../services/firebase/firebase"
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();


    
    useEffect(() => {
      setLoading(true)
      const collectionRef = categoryId ? 
      query(collection(db, 'products'), where('category', "==", categoryId)) : 
      collection(db, 'products')

      getDocs(collectionRef).then(res =>{
        const products = res.docs.map(doc =>{
          return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
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
                    <ItemList className='ItemList' products={products}/>
                  </div>
                </>:
                <h1>No se encontraron Productos</h1>
            } 
          </div>
              
      );
  }
  
  export default ItemListContainer;