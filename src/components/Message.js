import React, {Component} from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state={
            message : "Welcome Visitor"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render(){
    return (
        <div>
                <h3>{this.state.message}</h3>
                <button color="red" onClick={this.changeMessage.bind(this)}>Subscribe</button>
        </div>
    )
    
    
    }
}

export default Message