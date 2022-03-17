import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({product})=>{

    return(
        <div className='container'>
            <h3>{product.title}</h3>
            <img src={product.img} alt={product.title}width="200px" />
            <section>
                <p>Precio ${product.price}</p>
            </section>
            <footer>
                <Link className='option' to={`/detail/${product.id}`}>Ver Detalle</Link>
            </footer>
        </div>
    );
};

export default Item;