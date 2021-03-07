import React, { Component } from 'react'
import axios from 'axios'

class EndpointTest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             operation:'createUser',
             phone:'',
             name:'',
             address:'',
             pin:''
        }
    }
    
    nameChangeHandler = (event) =>{
        this.setState({
            name : event.target.value
        })
    }

    numberChangeHandler = (event) =>{
        this.setState({
            phone : event.target.value
        })
    }

    addressChangeHandler = (event) =>{
        this.setState({
            address : event.target.value
        })
    }

    pinChangeHandler = (event) => {
        this.setState({
            pin : event.target.value
        })
    }

    submitHandler = (event) =>{
        axios.post('http://ec2-13-127-124-241.ap-south-1.compute.amazonaws.com:8080/user', {
            operation : this.state.operation,
            phone : this.state.phone,
            name : this.state.name,
            address : this.state.address,
            pin : this.state.pin,
            myself : ''
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })

        event.preventDefault()
    }
    componentDidMount(){
        this.setState({
            myself : 'Niraj Kumar Pandey'
        })
    }
    render() {
        return (
            <div>
            <h1>Hello {this.state.myself}</h1>
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={this.state.name} onChange={this.nameChangeHandler}></input>
                </div>

                <div>
                    <label>Phone: </label>
                    <input type="number" value={this.state.phone} onChange={this.numberChangeHandler}></input>
                </div>

                <div>
                    <label>Address: </label>
                    <input type="text" value={this.state.address} onChange={this.addressChangeHandler}></input>
                </div>

                <div>
                    <label>Pin: </label>
                    <input type="text" value={this.state.pin} onChange={this.pinChangeHandler}></input>
                </div>

                <button type="submit">Create User</button>
            </form>
            </div>
        )
    }
}

export default EndpointTest
