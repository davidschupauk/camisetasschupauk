import { Link } from 'react-router-dom';
import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { cartCantidad } = useContext(CartContext)
  

      return (
          <Link to={'/cart'}>
            <button className='CartWidget'>
              <img src="https://res.cloudinary.com/dxxjxc1fu/image/upload/v1646582990/cart_sthlac.png" alt='cart' height="50px"/>
              {cartCantidad()}
            </button>
          </Link>
        );
  }
  
  export default CartWidget;