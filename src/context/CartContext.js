import React, {createContext, useState} from "react";

const Context = React.createContext();

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    
    
    const addItem = (productoAAgregar, cantidad) =>{
        const ObjAAgregar = {
            ...productoAAgregar,
            quantity: cantidad
        }

        if(isInCart(productoAAgregar.id)){
            actualizarItemInCart(productoAAgregar)
            console.log(cart)
        }else{
            setCart([...cart, ObjAAgregar])
            console.log(cart)
        }
    }
    
    const actualizarItemInCart = (productoAAgregar) => {
        const actualCart = cart.map(prod => {
            if(prod.id === productoAAgregar.id) {
                const productoActualizado = {
                    ...prod,
                    quantity: prod.quantity + productoAAgregar.quantity
                }
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
        let copiaCart = [...cart]
        return copiaCart.filter(p => p.id != id)
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </Context.Provider>
    )
}

export default Context;