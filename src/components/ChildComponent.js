import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>

                <button onClick={()=>this.props.changeName("niraj")}>Change text</button>
            </div>
        )
    }
}

export default ChildComponent