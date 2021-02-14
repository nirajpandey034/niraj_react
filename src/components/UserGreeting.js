import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false,
             btnName : "Log in"
        }
    }
    changeState = () =>{
        this.state.isLoggedIn ? 
        this.setState({
                isLoggedIn : false,
                btnName : "Log In"
        }) :
        this.setState({
            isLoggedIn : true,
            btnName : "Log out"
    })
    }
    render() {
        //1st way using if/else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Niraj
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        //2nd way using JS variable
        // let message

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Niraj</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //               {message}
        //               <button onClick={this.changeState}>{this.state.btnName}</button>
        //     </div>
      
        // )
        
        //3rd way using ternary operator
        return [
            this.state.isLoggedIn ? 
            <div>Welcome Niraj</div> : 
            <div>Welcome Guest</div> ,

            <button onClick={this.changeState}>{this.state.btnName}</button>
        ]

        //4th way using short circuit technique, only for if u want to show if logged in and nothing when not logged in
        //return this.state.isLoggedIn && <div>Welcome Niraj</div>


    }
}

export default UserGreeting
