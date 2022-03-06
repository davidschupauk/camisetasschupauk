import React, { useState} from "react";

const Context = React.createContext();

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    
    
    const addItem = (productoAAgregar, cantidad) =>{
        const ObjAAgregar = {
            ...productoAAgregar,
            quantity: cantidad
        }

        if(isInCart(productoAAgregar.id)){
            actualizarItemInCart(ObjAAgregar)
        }else{
            agregarItemToCart(ObjAAgregar)
        }
    }
    
    const agregarItemToCart = (ObjAAgregar) => {
        setCart([...cart, ObjAAgregar])
    }


    const actualizarItemInCart = (ObjAAgregar) => {
        const actualCart = cart.map(prod => {
            if(prod.id === ObjAAgregar.id) {
                const productoActualizado = {
                    ...prod,
                    quantity: prod.quantity + ObjAAgregar.quantity
                }
                console.log(productoActualizado)
                return productoActualizado
            } else {
                return prod
            }
        })

        setCart(actualCart)
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const removeItem = (id) =>{
        const nuevoCart = cart.filter(p => p.id !== id)
        setCart(nuevoCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const cartTotal = () =>{
        let total = 0
        cart.forEach(prod =>{
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const cartCantidad = () => {
        let contador = 0
        cart.forEach(item => {
            contador = contador + item.quantity
        })
        return contador
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, cartCantidad}}>
            {children}
        </Context.Provider>
    )
}

export default Context;