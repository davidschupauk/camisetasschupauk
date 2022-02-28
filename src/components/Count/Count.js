import { useContext, useState } from 'react';
import './Count.css';


const Count =({stock, initial=1, onAdd})=>{
    
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }

    const increment = () =>{
        if(count<stock){
            setCount(count+1)
            
        }   
    }
    
    
     


    return(
        <>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <footer>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </footer>
        </>
    )
}



export default Count;