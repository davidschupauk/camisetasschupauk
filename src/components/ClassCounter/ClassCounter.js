import { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props)
        this.state = {count:5}
    }

    decrement = () =>{
        this.setState({
            count: this.state.count -1
        })
    }

    
    increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h3>ClassCounter</h3>
                <h3>{this.state.count}</h3>
                <button onClick = { this.decrement}>-</button>
                <button onClick = { this.increment}>+</button>
            </div>
        )
    }
}

export default ClassCounter;