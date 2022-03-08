import CartContext from '../../context/CartContext';
import { useContext, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css'
import { doc, collection, getDoc, writeBatch, addDoc, Timestamp} from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';
import ContactForm from '../ContactForm/ContactForm';
import Togglable from '../Togglable/Togglable';


const Cart = () => {
    const { cart, removeItem, cartTotal, clearCart } = useContext(CartContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        email: ''
    })

    const contactFormRef = useRef()

    if (cart.length === 0) {
        return( 
            <>
                <h1>No hay productos en el carrito</h1>
                <NavLink className="Option" to={`/`} >Volver al catalogo</NavLink>
            </>
        )
    }

    const confirmarOrden = () => {
    if(contact.phone !== '' && contact.email !== '' && contact.name !== '' && contact.address){
        setProcessingOrder(true)
        const objOrden = {
            buyer: contact,
            items: cart,
            total: cartTotal(),
            date: Timestamp.fromDate(new Date())
        }
        console.log(objOrden)
        const batch = writeBatch(db)
        const outOfStock = []

        objOrden.items.forEach(element => {
            getDoc(doc(db, 'products', element.id)).then(res =>{
                if(res.data().stock >= element.quantity){
                    batch.update(doc(db, 'products', res.id), {
                        stock: res.data().stock - element.quantity
                    })
                }else{
                    outOfStock.push({id: res.id , ...res.data()})
                }
            })            
        })

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), objOrden).then(({id})=>{
                batch.commit().then(()=>{
                    clearCart()
                    alert(`su orden quedó confirmada, el numero es ${id}`)
                }).finally(()=>{
                    setProcessingOrder(false)
                })
            })
        }
    }else{
        alert("Debe completar sus datos de contacto!")
    }
}
    

    if(processingOrder){
        return<h1>La orden se está procesando!</h1>
    }

    const handleRemover = (id, title) => {
        removeItem(id)
        console.log(`se eliminó '${title}' del carrito`)
    }
    return (
        <>
        <h1>Este es el carrito</h1>
        {
            cart.map(item =>{
                return(
                    <div key={item.id} style={{display: 'flex'}}>
                        <h3>Camiseta de: {item.title}, --{'>'}    </h3>
                        <h3>Cantidad: {item.quantity}--{'>'}   </h3>
                        <h3>Precio por unidad: ${item.price}</h3>
                        <button className="btnEliminar" onClick={() => handleRemover(item.id, item.title)}>Eliminar Producto</button>
                    </div>
                )
            })
        }
        <h1>Total: ${cartTotal()}</h1>
        <button onClick={() => clearCart()}>Eliminar Carrito</button>
        <button onClick={() => confirmarOrden()}>Confirmar orden</button>{
                (contact.phone !== '' && contact.email !== '' && contact.name !== '' && contact.address !== '') &&
                
                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Direccion: {contact.email}</h4>
                        
                        <button onClick={() => setContact({ phone: '', email: '', name: '', address: ''})} 
                                className='Button' 
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
                    </div>    
            }
        <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.email !== '' && contact.name !== '' && contact.address) 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
        </Togglable>   
        <NavLink className="Option" to={`/`} >Volver al catalogo</NavLink>
        </>
    )
}

export default Cart