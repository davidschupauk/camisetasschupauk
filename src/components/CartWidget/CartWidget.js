import './CartWidget.css'


const CartWidget = () => {
    //Click en el carrito
    const handleCart = () => {
      console.log("Carrito");
    }

      return (
          <div className='CartWidget'>
            <img src={'./images/cart.png'} alt='cart' height="50px"/>
            <p>0</p>
          </div>
      )
  }
  
  export default CartWidget;