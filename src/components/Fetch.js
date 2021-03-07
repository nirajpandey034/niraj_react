import React, { Component } from 'react'
import Fetching from './Fetching'

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
                    let Results =  result.data.map(results => <Fetching key={results.id} data={results}/>)
                    this.setState({
                        data : Results
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