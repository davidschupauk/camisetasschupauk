import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css'
 

const Cart = () => {
    const { cart, removeItem, cartTotal } = useContext(CartContext)
    
    if (cart.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemover = (id, title) => {
        removeItem(id)
        console.log(`se eliminó '${title}' del carrito`)
    }
    return (
        <>
        <h1>Este es el carrito</h1>
        {
            cart.map(item =>{
                return(
                    <div key={item.id} style={{display: 'flex'}}>
                        <h3>Camiseta de: {item.title}, --{'>'}    </h3>
                        <h3>Cantidad: {item.quantity}--{'>'}   </h3>
                        <h3>Precio por unidad: ${item.price}</h3>
                        <button className="btnEliminar" onClick={() => handleRemover(item.id, item.title)}>Eliminar Producto</button>
                    </div>
                )
            })
        }
        <h1>Total: ${cartTotal()}</h1>
        <NavLink className="Option" to={`/`} >Volver al catalogo</NavLink>
        </>
    )
}

export default Cart