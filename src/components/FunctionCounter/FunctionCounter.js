import { useEffect } from "react";
import {useState} from "react";

const FunctionCounter = ({itemTitle, stock, initial}) => {
    const [count, setCount] = useState(initial)
    /*
    useEffect(()=>{
        console.log("el componente se montó")
        setCount(count + 1)
        return()=>{
            console.log("me voy a desmontar")
            setCount(0)
        }   
      }, [])
    
      console.log("voy a renderizar.")
    */

    const decrement = () => {
        if(count>0){
            setCount(count-1)
        }
    }

    const increment = () =>{
        if(count<stock){
            setCount(count+1)
            
        }
        
    }
    const onAdd = () =>{
        alert("se agregaron: " + count  + " productos");
     }
     


    return(
        <div>
            <h3>{itemTitle}</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default FunctionCounter;