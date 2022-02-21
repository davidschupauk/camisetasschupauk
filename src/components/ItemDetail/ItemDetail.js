import Count from '../Count/Count'

const ItemDetail = ({product}) => {
    return(
        <div>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title}/>
            <section>
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