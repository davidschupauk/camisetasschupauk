import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const Cart = () => {
    const { clearCart } = useContext(CartContext);
    
    const handleCartRemove = () =>{
        clearCart()
    }

    return (
        <>
        <h1>Esta es el carrito</h1>
        <button onClick={handleCartRemove}>clearCart</button>
        </>
    )
}

export default Cart