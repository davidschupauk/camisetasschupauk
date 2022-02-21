
import Count from '../Count/Count';
import './ItemDetail.css';

const ItemDetail = ({product}) => {

    return(
        <div className='detailCard'>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title}/>
            <section className='informacion'>
                <p> Categoria: {product.category}</p>
                <p> Descripcion: {product.description}</p>
                <p> Precio: {product.price}</p>
            </section>
            <footer>
                <Count stock={product.stock} initial={1}/>
            </footer>
        </div>
    )
}

export default ItemDetail;