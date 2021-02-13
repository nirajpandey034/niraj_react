import React, {Component} from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state={
            value:0,
            bvalue:1
        }
    }
        increaseValue=()=>{
            this.setState({                        //this.setState is an async operation so whenever we want to do something after changing the state we have to pass a arrow function as second argument of setState method
                value : this.state.value + this.state.bvalue,
                bvalue: this.state.bvalue + 1
            },()=>this.testShow(this.state.value))
        }

        testShow(value){
                console.log("value: "+value)
        }
    render(){
    return (
        <div>
                <h3>{this.state.value}</h3>
    <button color="red" onClick={this.increaseValue}>Increase by {this.state.bvalue}</button>
        </div>
    )
    }
}

export default Message