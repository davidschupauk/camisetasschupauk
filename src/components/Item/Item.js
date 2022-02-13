import Count from '../Count/Count';
import './Item.css';

const Item = ({product})=>{
    return(
        <div className='container'>
            <h3>{product.title}</h3>
            <img src={product.img} width="200px" />
            <Count stock={product.stock} initial={1}/>
        </div>
    );
};

export default Item;