import React, { Component } from "react";
import "./style.css"


class Header extends Component{
    constructor(props){
        super()
        this.state = {
            a : 0,
            f : 0,
            // b : 16
        }

        this.props = {
            title : "",
        }
    }

    // chhange = ()=>{
    //     this.setState({a: this.state.a + 5})

    // }
    minus = ()=>{
        
       
        if(this.state.f){
            this.setState({a: this.state.a - +this.state.f})
        }
        else{
            this.setState({a: this.state.a - 1})
            if(this.state.a <= 0){
                this.setState({a: 0})
            }
        }
    }
    plus = ()=>{
        if(this.state.f){
            this.setState({a: this.state.a + +this.state.f})
        }else{
            this.setState({a: this.state.a + 1})
        }
        
    }

    gago = (e)=>{
        this.setState({f: e.target.value })
    }
    
    render(){
        
        return <>
            {/* <p>text</p>
            <p>{this.state.a}</p>
            <button onClick={this.chhange}>click</button> */}
            <button onClick={this.minus}>-</button>
            <div>{this.state.a}</div>
            <button onClick={this.plus}>+</button>
            <input type="text" onChange={this.gago}/>
            <p>{this.props.title}</p>
        </>
    }
}

export default Header