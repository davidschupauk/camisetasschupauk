import { useEffect } from "react";
import {useState} from "react";

const FunctionCounter = (props) => {
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log("el componente se montó")
        setCount(count + 1)
        return()=>{
            console.log("me voy a desmontar")
            setCount(0)
        }   
      }, [])
    
      console.log("voy a renderizar.")
    

    const decrement = () => {
        if(count>0){
            setCount(count-1)
        }
    }

    const increment = () =>{
        setCount(count+1)
    }

    return(
        <div>
            <h3>FunctionCounter</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default FunctionCounter;