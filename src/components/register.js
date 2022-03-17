import React, { Component } from 'react'
class Register extends Component {
    state = { full_name:"",email:"",password:"" } 
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})


    }
    handlesubmit=()=>{
        fetch('http://localhost:3001/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
            }).then(res=>res.json()).then(users=>console.log(users))
            this.props.onroutechange(1)
    }
    render()
    { 
        return (
        <div className="mainform">
            <button onClick={()=>this.props.onroutechange(3)}className="btn btn-primary btn1">Log In</button>
        <div className="form">
             <div  class="textfield"> 
            <p>ENTER FULL NAME: </p>
            <input type="text "  onChange={this.handlechange}class="input-group-text input1" name="full_name" placeholder="ENTER FULL NAME"/>
            </div>
         <div  class="textfield"> 
            <p>ENTER EMAIL: </p>
            <input type="email "  onChange={this.handlechange} class="input-group-text input1" name="email" placeholder="ENTER EMAIL"/>
        </div>
        
        <div  class="textfield"> 
            <p>ENTER PASSwORD: </p>
            <input type="text " onChange={this.handlechange} class="input-group-text input1" name="password" placeholder="ENTER PASSwORD"/>
        </div>
        <button type="button" onClick={this.handlesubmit}value="submit" class="btn btn-success m">SUBMIT</button>


        </div>
        </div>
        );
    }
}
 
export default Register;