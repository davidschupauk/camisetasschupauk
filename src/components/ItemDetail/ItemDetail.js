import { useContext, useState } from 'react';
import Count from '../Count/Count';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({id, title, img, category, description, price, stock}) => {
    const [cantidad, setCantidad] = useState(0)
    const { addItem } = useContext(CartContext);
    
    const handleOnAdd = (cantidad) => {
       setCantidad(cantidad)

       const productoAAgregar = {
        id,   
        title,
        img,
        category,
        description,
        price,
        stock
       }
       
       addItem(productoAAgregar, cantidad)
       
    }

    return(
        <div className='detailCard'>
            <h2>{title}</h2>
            <img src={img} alt={title}/>
            <section className='informacion'>
                <p> Categoria: {category}</p>
                <p> Descripcion: {description}</p>
                <p> Precio: {price}</p>
            </section>
            <footer>
            {
                    cantidad > 0 ? 
                        <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                        <Count stock={stock} initial={1} onAdd={handleOnAdd}/>
            
            } 
            </footer>
        </div>
    )
}

export default ItemDetail;