import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parent : "parent"
        }
    }

    changeParent = (changedName) =>{
        this.setState({
            parent : changedName
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.parent}</p>
                <ChildComponent changeName = {this.changeParent}/>
            </div>
        )
    }
}

export default ParentComponent
