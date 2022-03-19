import React, { Component } from 'react'
class Login extends Component {
    state = { email:"",password:"" ,log:"" } 
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
     }
     handlesubmit=()=>{
        fetch('http://localhost:3001/login',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
            }).then(res=>res.json()).then(user=>{if(user.email){
                this.props.profile(user);
            }
            else{
                this.setState({log:"WRONG CREDENTIALS"})
              setTimeout(()=>{
                  this.setState({log:""})
              },2000)
            }
               });          
                             
     }
    render() { 
        return (
        <div className="mainform">
            <button onClick={()=>this.props.onroutechange(2)}className="btn btn-primary btn1">Sign Up</button>
             <div className="form">
                <p className="errorp">{this.state.log}</p>
                <div  className="textfield"> 
                <p>ENTER EMAIL: </p>
                <input type="text "  onChange={this.handlechange}className="input-group-text input1" name="email" placeholder="ENTER EMAIL"/>
                </div>
                <div  className="textfield"> 
                <p>ENTER PASSwORD: </p>
                <input type="text "  onChange={this.handlechange}className="input-group-text input1" name="password" placeholder="ENTER PASSwORD"/>
                </div>
        <button type="button" onClick={this.handlesubmit}value="submit" className="btn btn-success m">LOGIN</button>

            </div>

        </div>

            
        );
    }
}
 
export default Login;