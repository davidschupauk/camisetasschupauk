import { useContext, useState } from 'react';
import Count from '../Count/Count';
import './ItemDetail.css';
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {
    const [cantidad, setCantidad] = useState(0)
    
    const handleOnAdd = (cantidad) => {
       setCantidad(cantidad)
       console.log(`Agregaste ${cantidad} productos`)
    }

    return(
        <div className='detailCard'>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title}/>
            <section className='informacion'>
                <p> Categoria: {product.category}</p>
                <p> Descripcion: {product.description}</p>
                <p> Precio: {product.price}</p>
            </section>
            <footer>
            {
                    cantidad > 0 ? 
                        <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                        <Count stock={product.stock} initial={1} onAdd={handleOnAdd}/>
            
            } 
            </footer>
        </div>
    )
}

export default ItemDetail;