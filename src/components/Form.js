import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }
    
    usernameChangeHandler = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    commentChangeHandler = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }

    topicChangeHandler = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    submitHandler = (event) =>{
        console.log(this.state.username, this.state.comments, this.state.topic)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={this.usernameChangeHandler} value={this.state.username}></input>
                </div>

                <div>
                    <label>Comments: </label>
                    <textarea value={this.state.comments} type="text" onChange={this.commentChangeHandler}></textarea>
                </div>

                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.topicChangeHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
