import Count from '../Count/Count';
import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({product})=>{

   const handleClick = (e) => {
       e.stopPropagation();
       console.log('hice click')
   }
    return(
        <div className='container' onClick={()=>console.log('click en la card')}>
            <h3>{product.title}</h3>
            <img src={product.img} width="200px" />
            <section>
                <p>Precio ${product.price}</p>
                {/*<Count stock={product.stock} initial={1}/>*/}
            </section>
            <footer>
                <Link classname='option' to={`/detail/${product.id}`}>Ver Detalle</Link>
                <button onClick={handleClick}>BTN</button>
            </footer>
        </div>
    );
};

export default Item;