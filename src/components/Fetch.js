import React, { Component } from 'react'

export class Fetch extends Component {
        constructor(props){
                super(props)
                this.state = {
                    data : null
                }
        }
    fetchMe = () =>{
            let x = 0
            fetch('https://reqres.in/api/users')
            .then(res=>res.json())
            .then(
                (result)=>{
                    //result = JSON.parse(result)
                    let Result = result.data.map(results =><h2 key = {++x} results = {results.data} />)
                    this.setState({
                        data : Result
                    })
                }
            )
            .catch(
                (error)=>{console.log(error)}
            )
    }
    render() {
        let Result
        return (
            <div>
                <button onClick={this.fetchMe}>Click Me Bro</button>  
                {this.state.data} 
            </div>
        )
    }
}

export default Fetch