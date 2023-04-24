import React, { Component } from "react";
import "./style.css"

export class Inputs extends Component{
    state = {
        name: "",
        surName: "",
        email: "",
        password: "",
        confirmPassword: "",

        error:{
            errorName: "",
            errorSurName: "",
            errorEmail: "",
            errorPassword: "",
            errorConfirmPassword: "",
        }
    }

    chhange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    validation = ()=>{
        let valid = true
        const errors = {
            errorName: "",
            errorSurName: "",
            errorEmail: "",
            errorPassword: "",
            errorConfirmPassword: "",
        }
        if(!this.state.name){
            errors.errorName = "Required Name"
            valid = false
        }
        if(!this.state.surName){
            errors.errorSurName = "Required SurName"
            valid = false
        }
        if(!this.state.email){
            errors.errorEmail = "Required Email"
            valid = false
        }
        if(!this.state.password){
            errors.errorPassword = "Required Password"
            valid = false
        }
        if(!this.state.confirmPassword){
            errors.errorConfirmPassword = "Required ConfirPassword"
            valid = false
        }else if(this.state.password!==this.state.confirmPassword){
            errors.errorConfirmPassword = "Password not same ConfirmPassowrd"
            valid = false
        }
        this.setState({error: errors})

        return valid
    }

    componentDidMount(){
        console.log("Mounted")
    }
    componentDidUpdate(){
        console.log("Update")
    }
    componentWillUnmount(){
        console.log("Unmounte")
    }
    render(){


        return <div className="form">
            <label>
                <input 
                    type="text"
                    className={this.state.error.errorName? "red" : null}
                    onChange={this.chhange}
                    name="name" 
                    placeholder="Name"/>
                    {this.state.error.errorName? <p>{this.state.error.errorName}</p> : null}
            </label>
            <label>
                <input 
                    onChange={this.chhange}
                    className={this.state.error.errorSurName? "red" : null}
                    type="text" 
                    name="surName" 
                    placeholder="Surname"/>
                    {this.state.error.errorSurName? <p>{this.state.error.errorSurName}</p> : null}
            </label>
            <label>
                <input 
                    onChange={this.chhange}
                    className={this.state.error.errorEmail? "red" : null}
                    type="email" 
                    name="email" 
                    placeholder="Email"/>
                    {this.state.error.errorEmail? <p>{this.state.error.errorEmail}</p> : null}
            </label>
            <label>
                <input 
                    onChange={this.chhange}
                    className={this.state.error.errorPassword? "red" : null}
                    type="password"
                    name="password"  
                    placeholder="Password"/>
                    {this.state.error.errorPassword? <p>{this.state.error.errorPassword}</p> : null}
            </label>
            <label>
                <input 
                    onChange={this.chhange}
                    className={this.state.error.errorConfirmPassword? "red" : null}
                    type="password" 
                    name="confirmPassword" 
                    placeholder="ConfirmPassword"/>
                     {this.state.error.errorConfirmPassword? <p>{this.state.error.errorConfirmPassword}</p> : null}
            </label>
            <button onClick={this.validation}>Registration</button>
        </div>
    }
} 
