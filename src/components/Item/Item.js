import Count from '../Count/Count';
import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({product})=>{

    const handleClick = (evt) =>{
        evt.stopPropagation();
        evt.preventDefault();
        console.log("clckeado")
    }
    return(
        <div className='container'>
            <h3>{product.title}</h3>
            <img src={product.img} width="200px" />
            <section>
                <Count stock={product.stock} initial={1}/>
            </section>
            <footer>
                <Link classname='option' to={`/detail/${product.id}`}>Ver Detalle</Link>
            </footer>
        </div>
    );
};

export default Item;