import { Link } from 'react-router-dom';
import './CartWidget.css'


const CartWidget = () => {
    //Click en el carrito
    const handleCart = () => {
      console.log("Carrito");
    }

      return (
          <Link to={'/cart'}>
            <button className='CartWidget'>
              <img src={'./images/cart.png'} alt='cart' height="50px"/>
              <p>0</p>
            </button>
          </Link>
        )

  }
  
  export default CartWidget;