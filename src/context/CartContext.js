import React, {createContext, useState} from "react";

const Context = React.createContext();

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    
    
    const addItem = (productoAAgregar, cantidad) =>{
        const ObjAAgregar = {
            ...productoAAgregar,
            cantidad
        }

        if(isInCart(productoAAgregar.id)){
            alert("Producto duplicado, no se agrega.")
        }else{
            setCart([...cart, ObjAAgregar])
            console.log(cart)
        }
    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    const removeItem = (id) =>{
        return cart.filter(p => p.id != id)
    }

    const clearCart = () => {
        cart = [];
    }

    return(
        <Context.Provider value={{cart, addItem, removeItem}}>
            {children}
        </Context.Provider>
    )
}

export default Context;