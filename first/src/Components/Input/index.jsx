import React, { Component } from "react";
import "./style.css"




class Input extends Component{
    state = {
        a : "",
        b : "",
    }
    
    Changge = (e)=>{
        console.log(e.target.value);
        this.setState({a: e.target.value})
    }
    
    click = ()=>{
     this.setState({b: this.state.a })
    }



    
    render(){
        return<>
        {console.log(this.state.a)}
            <input onChange={this.Changge} className={!this.state.b? "block" : null} type="text" />
            <button onClick={this.click}>Click</button>
            {!this.state.b? <p>text</p> : null}

        </>
    }

}

export default Input